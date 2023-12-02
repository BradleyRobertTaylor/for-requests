import express from 'express';
import cors from 'cors';

import requestHookRoute from './routes/requestHookRoute';
import binRoutes from './routes/binRoutes';
import { errorHandler, notFound } from './middleware';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/bins', binRoutes);
app.use('/', requestHookRoute);

app.use(notFound);
app.use(errorHandler);

export default app;
