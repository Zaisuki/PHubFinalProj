import express, { Express, Request, Response, Router } from 'express';

import { authenticateToken } from '../middleware/authentication';
import { professorOnly } from '../middleware/professor';
import {
    addAnnouncementController,
    addCheckController,
    addCoachController,
    addConnectController,
    deleteAllCheckController,
    deleteAllCoachController,
    deleteAllConnectController,
    deleteCheckController,
    deleteCoachController,
    deleteConnectController,
    editHighScoreCheckController,
    editHighScoreConnectController,
    getCheckController,
    getCheckTaskController,
    getCheckTaskSubmissionController,
    getClassController,
    getClassStatisticsController,
    getCoachController,
    getCoachTaskController,
    getConnectController,
    getConnectTaskController,
    getConnectTaskSubmissionController,
    scoreStudentsCheckController,
    scoreStudentsConnectController,
} from '../controller/professor';
import { deleteAnnouncement } from '../services/professor';
import { upload } from '../services/upload';

const router = Router();

router.get('/class', authenticateToken, professorOnly, getClassController);
router.get('/class/statistics', authenticateToken, professorOnly, getClassStatisticsController);

router.post('/announcement', authenticateToken, professorOnly, addAnnouncementController);
router.delete('/delete', deleteAnnouncement);

router.post('/check', authenticateToken, professorOnly, upload.array('file'), addCheckController);
router.get('/check', authenticateToken, professorOnly, getCheckController);
router.get('/check/task', authenticateToken, professorOnly, getCheckTaskController);
router.put('/check/task/editHighScore', authenticateToken, professorOnly, editHighScoreCheckController);
router.get('/check/task/submission', authenticateToken, professorOnly, getCheckTaskSubmissionController);
router.put('/check/task/score', authenticateToken, professorOnly, scoreStudentsCheckController);
router.delete('/check/all/delete', deleteAllCheckController);
router.delete('/check/delete', deleteCheckController);

router.post('/coach', authenticateToken, professorOnly, upload.array('file'), addCoachController);
router.get('/coach', authenticateToken, professorOnly, getCoachController);
router.get('/coach/task', authenticateToken, professorOnly, getCoachTaskController);
router.delete('/coach/all/delete', deleteAllCoachController);
router.delete('/coach/delete', deleteCoachController);

router.post('/connect', authenticateToken, professorOnly, upload.array('file'), addConnectController);
router.get('/connect', authenticateToken, professorOnly, getConnectController);
router.get('/connect/task', authenticateToken, professorOnly, getConnectTaskController);
router.put('/connect/task/editHighScore', authenticateToken, professorOnly, editHighScoreConnectController);
router.get('/connect/task/submission', authenticateToken, professorOnly, getConnectTaskSubmissionController);
router.put('/connect/task/score', authenticateToken, professorOnly, scoreStudentsConnectController);
router.delete('/connect/all/delete', deleteAllConnectController);
router.delete('/connect/delete', deleteConnectController);

export default router;
