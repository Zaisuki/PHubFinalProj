import express, { Express, Request, Response, Router } from 'express';

import { getAnnouncementController, postAnnoucementController } from '../controller/feed';
import { authenticateToken } from '../middleware/authentication';
import { professorOnly } from '../middleware/professor';

const router = Router();

router.get('/feed', authenticateToken, getAnnouncementController);
router.post('/post', authenticateToken, professorOnly, postAnnoucementController);

export default router;
