import express, { Express, Request, Response } from 'express';
import { User } from '../middleware/authentication';
import { getAnnouncement } from '../services/student';

export const getAnnouncementController = async (req: Request & { user?: User }, res: Response) => {
    try {
        const studentID = req.user?.userID;
        const result = await getAnnouncement(studentID);
        return res.status(result.httpCode).json({ 'message': result.message });
    } catch (error) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
