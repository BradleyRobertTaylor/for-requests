import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Bin } from '../models/Bin';
import { HttpRequest } from '../models/HttpRequest';
import { PG_DATABASE, PG_PASSWORD, PG_PORT, PG_USERNAME } from '../config';

export const PGDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: PG_PORT,
  username: PG_USERNAME,
  password: PG_PASSWORD,
  database: PG_DATABASE,
  synchronize: true,
  logging: false,
  entities: [HttpRequest, Bin],
  migrations: [],
  subscribers: [],
});
