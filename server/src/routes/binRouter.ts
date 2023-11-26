import express from 'express';
import * as binController from '../controllers/binController';
const binRouter = express.Router();

binRouter.get('/bins', binController.getAllBins);
binRouter.post('/bins', binController.createBin);
binRouter.get('/bins/:binPath', binController.getBin);
binRouter.delete('/bins/:binPath', binController.deleteBin);

// Bins requests
binRouter.get('/bins/:binPath/requests', binController.getRequests);

export default binRouter;
