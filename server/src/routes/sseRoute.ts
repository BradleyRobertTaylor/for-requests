import express from 'express';
import { sseController } from '../controllers/sseController';

const router = express.Router();

router.get(`/`, sseController);

export default router;
