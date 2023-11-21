import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { PGDataSource } from './db/data-source';
import binRouter from './routes/binRouter';
import requestRouter from './routes/requestRouter';

const app = express();
app.use(cors());

PGDataSource.initialize()
  .then(async () => {
    console.log('Connected to Postgres.');
  })
  .catch((error) => console.log(error));

app.use('/', requestRouter);
app.use('/api', binRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
