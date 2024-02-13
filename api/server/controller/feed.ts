import express, { Express, Request, Response } from 'express';
import { User } from '../middleware/authentication';
import { findProfessorByID } from '../services/user';
import { postAnnouncement } from '../services/feed';

export const getAnnouncementController = async (req: Request & { user?: User }, res: Response) => {
    try {
        console.log('Data', req.user);
        return res.status(200).json({ 'message': 'Data' });
    } catch {
        res.status(500).json({ 'message': 'Internal Server Error' });
    }
};

export const postAnnoucementController = async (req: Request & { user?: User }, res: Response) => {
    try {
        const { userID, userName, userType } = req.user || {};
        const { header, announcement, classID } = req.body;
        if (!userID) {
            return res.status(400).json({ message: 'User ID not provided' });
        }
        if (userType === 'Professor') {
            const announcementResult = await postAnnouncement(header, announcement, userID, classID);
            if (!announcementResult) {
                return res.status(500).json({ 'message': 'Internal Server Error' });
            }
            return res.status(200).json({ 'message': 'Announcement posted.' });
        }
        return res.status(401).json({ 'message': 'Unauthorized.' });
    } catch {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
