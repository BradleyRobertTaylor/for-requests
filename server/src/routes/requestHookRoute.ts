import express from 'express';
import { allRequestHook } from '../controllers/requestHookController';
import { validateBinPath } from '../middleware/validateBinPath';

const router = express.Router();

router.all(`/:binPath*`, validateBinPath, allRequestHook);

export default router;
