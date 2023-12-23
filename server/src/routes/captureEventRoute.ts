import express from 'express';
import { captureAllEvents } from '../controllers/captureEventController';

const router = express.Router();

router.all(`/:binPath*`, captureAllEvents);

export default router;
