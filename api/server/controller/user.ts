import express, { Express, Request, Response } from 'express';
import { User } from '../middleware/authentication';
import { getUserProfile } from '../services/user';

export const getUserProfileController = async (req: Request & { user?: User }, res: Response) => {
    try {
        const { userID, userType } = req.user || {};
        if (!userID) {
            return res.status(400).json({ message: 'User ID not provided' });
        }
        if (userID && userType) {
            const result = await getUserProfile(userID, userType);
            return res.status(result.httpCode).json(result.message);
        }
        return res.status(401).json({ 'message': 'Unauthorize' });
    } catch (error) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
