import express, { Express, Request, Response } from 'express';
import { User } from '../middleware/authentication';
import { getAnnouncement, getCheck, getCheckTask, getCoach, getConnect, getConnectTask, submitCheck, submitConnect, unSubmitCheck } from '../services/student';

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

export const submitCheckController = async (req: Request & { user?: User }, res: Response) => {
    try {
        const { userID } = req.user || {};
        const { taskID } = req.body;
        //@ts-ignore
        const result = await submitCheck(taskID, userID, req.files);
        return res.status(result.httpCode).json({ 'message': result.message });
    } catch (error) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
export const unSubmitCheckController = async (req: Request & { user?: User }, res: Response) => {
    try {
        const { userID } = req.user || {};
        const { taskID } = req.body;
        const result = await unSubmitCheck(taskID, userID);
        return res.status(result.httpCode).json({ 'message': result.message });
    } catch (error) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};

export const submitConnectController = async (req: Request & { user?: User }, res: Response) => {
    try {
        const userID = req.user?.userID;
        const { taskID, choiceID } = req.body;
        const result = await submitConnect(taskID, userID, choiceID);
        return res.status(result.httpCode).json({ 'message': result.message });
    } catch (error) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};

export const getCheckTaskController = async (req: Request & { user?: User }, res: Response) => {
    try {
        const userID = req.user?.userID;
        const taskID = req.query.taskID as string;
        if (taskID) {
            let result;
            result = await getCheckTask(taskID, userID);
            return res.status(200).json({ 'message': result });
        }

        return res.status(401).json({ 'message': 'Class not found' });
    } catch {
        res.status(500).json({ 'message': 'Internal Server Error' });
    }
};

export const getConnectTaskController = async (req: Request & { user?: User }, res: Response) => {
    try {
        const userID = req.user?.userID;
        const taskID = req.query.taskID as string;
        if (taskID) {
            let result;
            result = await getConnectTask(taskID, userID);
            return res.status(200).json({ 'message': result });
        }

        return res.status(401).json({ 'message': 'Class not found' });
    } catch {
        res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
