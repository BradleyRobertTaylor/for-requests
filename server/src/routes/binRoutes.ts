import express from 'express';
import {
  getBins,
  postBin,
  getBin,
  deleteBin,
  getEvents,
  deleteEvents,
  deleteEvent,
  getEvent,
} from '../controllers/binController';

const router = express.Router();

router.get('/', getBins);
router.post('/', postBin);
router.get('/:binPath', getBin);
router.delete('/:binPath', deleteBin);

// Bins requests
router.get('/:binPath/events', getEvents);
router.delete('/:binPath/events', deleteEvents);
router.get('/:binPath/events/:eventId', getEvent);
router.delete('/:binPath/events/:eventId', deleteEvent);

export default router;
