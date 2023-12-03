import express from 'express';
import { allRequestHook } from '../controllers/requestHookController';
import { validateBinPath } from '../middleware/validateBinPath';

const router = express.Router();

const uuid = '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}';

router.all(`/:binPath(${uuid})*`, validateBinPath, allRequestHook);

export default router;
