import express, { Express, Request, Response, Router } from 'express';

import { addStudent, deleteStudent, findAllStudent, findStudent, updateStudent } from '../services/student';
import { registerUserController } from '../controller/entry';
import { deleteAllUsers, findAllUsers } from '../services/user';

const router = Router();

router.get('/all', findAllUsers);
router.delete('/all', deleteAllUsers);

router.get('/student', findAllStudent);
router.get('/student/:id', findStudent);
router.put('/student/:id', updateStudent);
router.delete('/student/:id', deleteStudent);
router.post('/student', registerUserController);

export default router;
