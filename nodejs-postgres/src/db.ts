import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.POSTGRES_USER || 'postgres',
  host: process.env.host || 'localhost',
  database: process.env.POSTGRES_DATABASE_URL || 'db',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  port: Number(process.env.POSTGRES_PORT) || 5432
});

export function query(text, params) {
  pool.query(text, params);
}
