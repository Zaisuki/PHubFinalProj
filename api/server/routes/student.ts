import express, { Express, Request, Response, Router } from 'express';

import { authenticateToken } from '../middleware/authentication';
import { studentOnly } from '../middleware/student';
import { getAnnouncementController } from '../controller/student';

const router = Router();

router.get('/feed', authenticateToken, studentOnly, getAnnouncementController);

export default router;
