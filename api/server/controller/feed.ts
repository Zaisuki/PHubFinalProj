import express, { Express, Request, Response } from 'express';
import { User } from '../middleware/authentication';
import { findProfessorByID } from '../services/user';
import { getAllProfessorAnouncement, getAllStudentAnouncement, postAnnouncement } from '../services/feed';

export const getAnnouncementController = async (req: Request & { user?: User }, res: Response) => {
    try {
        const { userID, userType } = req.user || {};
        if (userID) {
            let result;
            if (userType === 'student') {
                result = await getAllStudentAnouncement(userID);
            } else {
                result = await getAllProfessorAnouncement(userID);
            }
            return res.status(200).json({ 'message': result });
        }

        return res.status(401).json({ 'message': 'Unauthorize' });
    } catch {
        res.status(500).json({ 'message': 'Internal Server Error' });
    }
};

export const postAnnoucementController = async (req: Request & { user?: User }, res: Response) => {
    try {
        const { userID, userName, userType } = req.user || {};
        const { header, announcement, classID } = req.body;
        if (!userID) {
            return res.status(400).json({ message: 'Unauthorize' });
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
