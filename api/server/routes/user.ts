import express, { Express, Request, Response, Router } from 'express';

// import { addStudent, deleteStudent, findAllStudent, findStudent, updateStudent } from '../services/student';
import { registerUserController } from '../controller/entry';
import { deleteAllUsers, findAllUsers } from '../services/user';
import { authenticateToken } from '../middleware/authentication';
import { getClassPeopleController, getClassTasksController, getUserNotificationController, getUserProfileController, getUserSubjectsController } from '../controller/user';

const router = Router();

// JUST FOR CHECKING
router.get('/all', findAllUsers);
router.delete('/all', deleteAllUsers);

router.get('/profile', authenticateToken, getUserProfileController);
router.get('/course', authenticateToken, getUserSubjectsController);
router.get('/notification', authenticateToken, getUserNotificationController);
router.get('/class/task', authenticateToken, getClassTasksController);
router.get('/class/people', authenticateToken, getClassPeopleController);

export default router;
