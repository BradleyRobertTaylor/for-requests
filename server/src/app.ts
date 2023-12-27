import express from 'express';
import cors from 'cors';

import captureEventRoute from './routes/captureEventRoute';
import binRoutes from './routes/binRoutes';
import sseRoute from './routes/sseRoute';

import { notFound } from './middleware/notFound';
import { errorHandler } from './middleware/errorHandler';
import { limiter } from './middleware/rateLimiter';

const app = express();

app.use(express.json());
app.use(cors());
app.use(limiter);

app.use('/api/bins', binRoutes);
app.use('/api/subscribe', sseRoute);
app.use('/api', captureEventRoute);

app.use(notFound);
app.use(errorHandler);

export default app;
