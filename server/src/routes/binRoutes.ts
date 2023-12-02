import express from 'express';
import {
  getAllBins,
  createBin,
  getBin,
  deleteBin,
  getRequests,
} from '../controllers/binController';
import { validateBinPath } from '../middleware';

const router = express.Router();

router.get('/', getAllBins);
router.post('/', createBin);
router.get('/:binPath', validateBinPath, getBin);
router.delete('/:binPath', validateBinPath, deleteBin);

// Bins requests
router.get('/:binPath/requests', validateBinPath, getRequests);

export default router;
