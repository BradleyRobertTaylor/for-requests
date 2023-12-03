import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import { connectDB } from './db/connect';

const startServer = async () => {
  await connectDB();

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
  });
};

startServer();
