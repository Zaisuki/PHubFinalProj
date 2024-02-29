import express, { Express, Request, Response, Router } from 'express';

import { authenticateToken } from '../middleware/authentication';
import { studentOnly } from '../middleware/student';
import { getAnnouncementController, getCheckController, getCoachController, getConnectController } from '../controller/student';

const router = Router();

router.get('/feed', authenticateToken, studentOnly, getAnnouncementController);
router.get('/check', authenticateToken, studentOnly, getCheckController);
router.get('/connect', authenticateToken, studentOnly, getConnectController);
router.get('/coach', authenticateToken, studentOnly, getCoachController);

export default router;
