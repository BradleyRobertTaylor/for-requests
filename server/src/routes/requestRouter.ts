import express from 'express';
import * as requestController from '../controllers/requestController';
const requestRouter = express.Router();

requestRouter.all('/:binPath', requestController.createRequest);

export default requestRouter;
