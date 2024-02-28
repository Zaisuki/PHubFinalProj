import express, { Express, Request, Response, Router } from 'express';

import { authenticateToken } from '../middleware/authentication';
import { professorOnly } from '../middleware/professor';
import { addAnnouncementController, addCheckController, addCoachController, addConnectController, deleteAllCheckController, deleteAllCoachController, deleteAllConnectController, deleteCheckController, deleteCoachController, deleteConnectController, getClassController } from '../controller/professor';
import { deleteAnnouncement } from '../services/professor';
import { upload } from '../services/upload';

const router = Router();

router.get('/class', authenticateToken, professorOnly, getClassController);
router.post('/announcement', authenticateToken, professorOnly, addAnnouncementController);
router.delete('/delete', deleteAnnouncement);
router.post('/check', authenticateToken, professorOnly, upload.array('file'), addCheckController);
router.delete('/check/all/delete', deleteAllCheckController);
router.delete('/check/delete', deleteCheckController);
router.post('/coach', authenticateToken, professorOnly, upload.array('file'), addCoachController);
router.delete('/coach/all/delete', deleteAllCoachController);
router.delete('/coach/delete', deleteCoachController);
router.post('/connect', authenticateToken, professorOnly, upload.array('file'), addConnectController);
router.delete('/connect/all/delete', deleteAllConnectController);
router.delete('/connect/delete', deleteConnectController);

export default router;
