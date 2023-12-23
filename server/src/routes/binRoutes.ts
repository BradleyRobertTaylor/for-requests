import express from 'express';
import {
  getBins,
  postBin,
  getBin,
  deleteBin,
  getRequests,
  deleteRequests,
  deleteRequest,
  getRequest,
} from '../controllers/binController';

const router = express.Router();

router.get('/', getBins);
router.post('/', postBin);
router.get('/:binPath', getBin);
router.delete('/:binPath', deleteBin);

// Bins requests
router.get('/:binPath/requests', getRequests);
router.delete('/:binPath/requests', deleteRequests);
router.get('/:binPath/requests/:requestId', getRequest);
router.delete('/:binPath/requests/:requestId', deleteRequest);

export default router;
