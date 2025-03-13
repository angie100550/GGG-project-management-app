import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';

// Create a PostgreSQL client
const client = new Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    // password: process.env.PG_PASSWORD, 
    port: process.env.PG_PORT ? parseInt(process.env.PG_PORT, 10) : undefined,
});

// Connect to the database
client.connect();

// Create a Drizzle instance
const db = drizzle(client);

export default db;