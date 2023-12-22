import express from 'express';
import { captureAllEvents } from '../controllers/captureEventController';
import { validateBinPath } from '../middleware/validateBinPath';

const router = express.Router();

router.all(`/:binPath*`, validateBinPath, captureAllEvents);

export default router;
