import express from 'express';
import * as requestController from '../controllers/requestHookController';
const requestRouter = express.Router();

const uuid = '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}';

requestRouter.all(`/:binPath(${uuid})*`, requestController.createRequest);

export default requestRouter;
