import app from './app';
import { PORT } from './config';
import { PGDataSource } from './db/data-source';

async function main() {
  try {
    await PGDataSource.initialize();
    console.log('Connected to Postgres.');
    app.listen(PORT);
    console.log(`App is listening on port ${PORT}`);
  } catch (err: unknown) {
    console.error(err);
  }
}

main();
