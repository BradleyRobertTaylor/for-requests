import express from 'express';
import {
  getBins,
  postBin,
  getBin,
  deleteBin,
  getRequests,
} from '../controllers/binController';
import { validateBinPath } from '../middleware/validateBinPath';

const router = express.Router();

router.get('/', getBins);
router.post('/', postBin);
router.get('/:binPath', validateBinPath, getBin);
router.delete('/:binPath', validateBinPath, deleteBin);

// Bins requests
router.get('/:binPath/requests', validateBinPath, getRequests);

export default router;
