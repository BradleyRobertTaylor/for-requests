import express from 'express';
import cors from 'cors';

import requestHookRoute from './routes/requestHookRoute';
import binRoutes from './routes/binRoutes';
import { notFound } from './middleware/notFound';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/bins', binRoutes);
app.use('/', requestHookRoute);

app.use(notFound);
app.use(errorHandler);

export default app;
