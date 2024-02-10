import express, { Express, Request, Response, Router } from 'express';

import { authenticateToken } from '../middleware/authentication';
import { addSubjectController, deleteAllSubjectController, getSubjectController } from '../controller/registration';

const router = Router();

router.get('/add/subject', addSubjectController);
router.delete('/delete/subject', deleteAllSubjectController);
router.get('/subject', getSubjectController);

export default router;
