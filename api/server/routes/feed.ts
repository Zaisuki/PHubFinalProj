import express, { Express, Request, Response, Router } from 'express';

import { getAnnouncementController } from '../controller/feed';
import { authenticateToken } from '../middleware/authentication';

const router = Router();

router.get('/feed', authenticateToken, getAnnouncementController);
// router.post('/post', registerUserController);

export default router;
