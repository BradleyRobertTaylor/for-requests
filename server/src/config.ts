import dotenv from 'dotenv';
dotenv.config();

export const PORT = Number(process.env.PORT) || 3000;

export const PG_PORT = Number(process.env.PG_PORT) || 5432;
export const PG_USERNAME = process.env.PG_USERNAME || 'postgres';
export const PG_PASSWORD = process.env.PG_PASSWORD || 'postgres';
export const PG_DATABASE = process.env.PG_DATABASE || 'postgres';
