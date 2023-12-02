import { PGDataSource } from './data-source';

export const connectDB = async () => {
  try {
    await PGDataSource.initialize();
    console.log('Connected to Postgres.');
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
  }
};
