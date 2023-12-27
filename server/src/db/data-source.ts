import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Bin } from '../models/Bin';
import { Event } from '../models/Event';
import { env } from '../env';

export const PGDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: env.PG_PORT || 5432,
  username: env.PG_USERNAME,
  password: env.PG_PASSWORD,
  database: env.PG_DATABASE,
  synchronize: true,
  logging: false,
  entities: [Event, Bin],
  migrations: [],
  subscribers: [],
});
