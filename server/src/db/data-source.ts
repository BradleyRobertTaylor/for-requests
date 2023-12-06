import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Bin } from '../models/Bin';
import { HttpRequest } from '../models/HttpRequest';

export const PGDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: Number(process.env.PG_PORT || 5432),
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  synchronize: true,
  logging: true,
  entities: [HttpRequest, Bin],
  migrations: [],
  subscribers: [],
});
