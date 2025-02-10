import type { NextConfig } from 'next';
import type { Configuration, RuleSetRule, RuleSetCondition } from 'webpack';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config: Configuration) {
    if (!config.module || !config.module.rules) {
      return config;
    }

    // Find the existing rule for SVG imports
    const fileLoaderRule = config.module.rules.find(
      (rule): rule is RuleSetRule =>
        typeof rule === 'object' &&
        rule !== null &&
        'test' in rule &&
        rule.test instanceof RegExp &&
        rule.test.test('.svg')
    );

    if (fileLoaderRule) {
      config.module.rules.push(
        // Reapply the existing rule, but only for svg imports ending in ?url
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        // Convert all other *.svg imports to React components
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer ?? undefined,
          resourceQuery: {
            not: [
              ...(Array.isArray(fileLoaderRule.resourceQuery)
                ? fileLoaderRule.resourceQuery
                : []),
              /url/,
            ] as RuleSetCondition[], // ✅ Ensuring correct type
          },
          use: ['@svgr/webpack'],
        }
      );

      // Modify the file loader rule to ignore *.svg
      if ('exclude' in fileLoaderRule) {
        fileLoaderRule.exclude = /\.svg$/i;
      }
    }

    return config;
  },
};

export default nextConfig;
