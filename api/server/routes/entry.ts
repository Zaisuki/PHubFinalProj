import express, { Express, Request, Response, Router } from 'express';

import { checkCurrentUser, loginUserController, registerUserController } from '../controller/entry';
// import { authenticateToken } from '../controller/auth';
import { authenticateToken } from '../middleware/authentication';

const router = Router();

router.post('/signup', registerUserController);
router.post('/login', loginUserController);
router.post('/checkCurrentUser', authenticateToken, checkCurrentUser);

export default router;
