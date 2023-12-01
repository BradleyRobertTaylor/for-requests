import express from 'express';
const router = express.Router();
import binRouter from './binRouter';

router.use('/bins', binRouter);

export default router;
