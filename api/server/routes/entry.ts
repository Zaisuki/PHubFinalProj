import express, { Express, Request, Response, Router } from 'express';

import { checkCurrentUser, loginUserController, registerUserController } from '../controller/entry';
import { authenticateToken } from '../middleware/authentication';

const router = Router();

router.post('/login', loginUserController);
router.post('/checkcurrentuser', authenticateToken, checkCurrentUser);
// authenticate where only admins can register users
router.post('/signup', registerUserController);

export default router;
