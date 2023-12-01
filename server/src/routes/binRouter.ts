import express from 'express';
import * as binController from '../controllers/binController';
const binRouter = express.Router();

binRouter.get('/', binController.getAllBins);
binRouter.post('/', binController.createBin);
binRouter.get('/:binPath', binController.getBin);
binRouter.delete('/:binPath', binController.deleteBin);

// Bins requests
binRouter.get('/:binPath/requests', binController.getRequests);

export default binRouter;
