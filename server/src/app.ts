import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { PGDataSource } from './db/data-source';
import binRouter from './routes/binRouter';
import requestRouter from './routes/requestRouter';

const app = express();
app.use(express.json());
app.use(cors());

PGDataSource.initialize()
  .then(() => {
    console.log('Connected to Postgres.');
  })
  .catch((error) => console.error(error));

app.use('/api', binRouter);
app.use('/', requestRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
