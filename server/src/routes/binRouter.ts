import express from 'express';
import * as binController from '../controllers/binController';
const binRouter = express.Router();

binRouter.get('/bins', binController.getAllBins);
binRouter.post('/bins', binController.createBin);
binRouter.delete('/bins/:binPath', binController.deleteBin);

export default binRouter;
