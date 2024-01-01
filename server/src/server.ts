import app from './app';
import { connectDB } from './db/connectDB';
import { env } from './env';

async function startServer() {
  await connectDB();

  const PORT = env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
  });
}

startServer();
