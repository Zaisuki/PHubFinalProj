import express, { Express, Request, Response, Router } from 'express';

import { addStudent, deleteStudent, findAllStudent, findStudent, updateStudent } from '../controller/student';

const router = Router();

router.get('/student', findAllStudent);
router.get('/student/:id', findStudent);
router.put('/student/:id', updateStudent);
router.delete('/student/:id', deleteStudent);
router.post('/student', addStudent);

export default router;
