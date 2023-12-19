import express from 'express';
import {
  getBins,
  postBin,
  getBin,
  deleteBin,
  getRequests,
  deleteRequests,
} from '../controllers/binController';
import { validateBinPath } from '../middleware/validateBinPath';

const router = express.Router();

router.get('/', getBins);
router.post('/', postBin);
router.get('/:binPath', validateBinPath, getBin);
router.delete('/:binPath', validateBinPath, deleteBin);

// Bins requests
router.get('/:binPath/requests', validateBinPath, getRequests);
router.delete('/:binPath/requests', validateBinPath, deleteRequests);

export default router;
