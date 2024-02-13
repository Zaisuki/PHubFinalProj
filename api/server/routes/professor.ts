import express, { Express, Request, Response, Router } from 'express';

import { authenticateToken } from '../middleware/authentication';
import { professorOnly } from '../middleware/professor';
import { addAnnouncementController } from '../controller/professor';
import { deleteAnnouncement } from '../services/professor';

const router = Router();

router.post('/announcement', authenticateToken, professorOnly, addAnnouncementController);
router.delete('/delete', deleteAnnouncement);

export default router;
