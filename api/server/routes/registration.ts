import express, { Express, Request, Response, Router } from 'express';

import { authenticateToken } from '../middleware/authentication';
import { addClassController, addSubjectController, deleteAllClassController, deleteAllSubjectController, enrollStudentInClassController, getSubjectController, removeStudentInClassController } from '../controller/registration';

const router = Router();
// add authentication admins only
router.post('/add/subject', addSubjectController);
router.delete('/delete/subject', deleteAllSubjectController);
router.get('/subject', getSubjectController);

router.post('/add/class', addClassController);
router.get('/delete/class', deleteAllClassController);

router.post('/enroll/student/class', enrollStudentInClassController);
router.post('/remove/student/class', removeStudentInClassController);

export default router;
