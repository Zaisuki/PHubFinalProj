import express, { Express, Request, Response } from 'express';
import { User } from '../middleware/authentication';
import { getUserProfile } from '../services/user';

export const getUserProfileController = async (req: Request & { user?: User }, res: Response) => {
    try {
        const { userID } = req.user || {};
        if (!userID) {
            return res.status(400).json({ message: 'User ID not provided' });
        }
        const result = await getUserProfile(userID)
        return res.status(result.httpCode).json(result.message);
    } catch (error) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
