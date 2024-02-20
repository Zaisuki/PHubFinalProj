import express, { Express, Request, Response, Router } from 'express';

import { authenticateToken } from '../middleware/authentication';
import { professorOnly } from '../middleware/professor';
import { addAnnouncementController, addCheckController, addCoachController, addConnectController, deleteAllCheckController, deleteCheckController } from '../controller/professor';
import { deleteAnnouncement } from '../services/professor';
import { upload } from '../services/upload';

const router = Router();

router.post('/announcement', authenticateToken, professorOnly, addAnnouncementController);
router.delete('/delete', deleteAnnouncement);
router.post('/check', authenticateToken, professorOnly, upload.array("image"), addCheckController);
router.delete('/check/all/delete', deleteAllCheckController);
router.delete('/check/delete', deleteCheckController);
router.post('/coach', authenticateToken, professorOnly, upload.array("image"), addCoachController);
router.post('/connect', authenticateToken, professorOnly, upload.array("image"), addConnectController);

export default router;
