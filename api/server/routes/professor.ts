import express, { Express, Request, Response, Router } from 'express';

import { authenticateToken } from '../middleware/authentication';
import { professorOnly } from '../middleware/professor';
import { addAnnouncementController, addCheckController, addCoachController, addConnectController } from '../controller/professor';
import { deleteAnnouncement } from '../services/professor';
import { upload } from '../services/upload';

const router = Router();

router.post('/announcement', authenticateToken, professorOnly, addAnnouncementController);
router.delete('/delete', deleteAnnouncement);
router.post('/check', authenticateToken, professorOnly, upload.array("image"), addCheckController);
router.post('/coach', authenticateToken, professorOnly, upload.array("image"), addCoachController);
router.post('/connect', authenticateToken, professorOnly, upload.array("image"), addConnectController);

export default router;
