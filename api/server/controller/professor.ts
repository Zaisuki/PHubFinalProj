import express, { Express, Request, Response } from 'express';
import { User } from '../middleware/authentication';
import { addAnnouncement } from '../services/professor';

export const addAnnouncementController = async (req: Request & { user?: User }, res: Response) => {
    try {
        const { header, announcement, classID } = req.body;
        const professorID = req.user?.userID;
        const result = await addAnnouncement(header, announcement, professorID, classID);
        return res.status(result.httpCode).json({ 'message': result.message });
    } catch (error) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
