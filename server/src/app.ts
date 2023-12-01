import express from 'express';
import cors from 'cors';

import requestHookRouter from './routes/requestHookRouter';
import routes from './routes';
import { errorHandler, notFound } from './middleware';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', routes);
app.use('/', requestHookRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
