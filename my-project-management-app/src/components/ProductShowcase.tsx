'use client';

import Image from 'next/image';
import appScreen from '../assets/images/app-screen.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ['start end', 'end end'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CAB] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Powerful Project Insights
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            Stay in control of your projects with a clean, intuitive interface.
            Track progress, manage tasks, and collaborate with your team
            effortlessly.
          </p>
        </div>
        <div className="mt-14 flex justify-center">
          <motion.div
            style={{
              opacity: opacity,
              rotateX: rotateX,
              transformPerspective: '800px',
            }}
          >
            <Image
              src={appScreen}
              alt="The product screenshot"
              className="rounded-lg shadow-lg"
              ref={appImage}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
