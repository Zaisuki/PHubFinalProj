import express, { Express, Request, Response } from 'express';
import { User } from '../middleware/authentication';
import { getAnnouncement, getCheck, getCoach, getConnect } from '../services/student';

export const getAnnouncementController = async (req: Request & { user?: User }, res: Response) => {
    try {
        const studentID = req.user?.userID;
        const result = await getAnnouncement(studentID);
        return res.status(result.httpCode).json({ 'message': result.message });
    } catch (error) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
export const getConnectController = async (req: Request & { user?: User }, res: Response) => {
    try {
        const studentID = req.user?.userID;
        const result = await getConnect(studentID);
        return res.status(200).json({ 'message': result });
    } catch (error) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
export const getCheckController = async (req: Request & { user?: User }, res: Response) => {
    try {
        const studentID = req.user?.userID;
        const result = await getCheck(studentID);
        return res.status(200).json({ 'message': result });
    } catch (error) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};

export const getCoachController = async (req: Request & { user?: User }, res: Response) => {
    try {
        const studentID = req.user?.userID;
        const result = await getCoach(studentID);
        return res.status(200).json({ 'message': result });
    } catch (error) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
