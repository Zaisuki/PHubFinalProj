import express, { Express, Request, Response } from 'express';
import { User } from '../middleware/authentication';
import { getClassPeople, getClassTask, getUserProfile, getUserSubject } from '../services/user';
import { getUserNotification } from '../services/notification';

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
export const getUserSubjectsController = async (req: Request & { user?: User }, res: Response) => {
    try {
        const { userID, userType } = req.user || {};
        if (!userID) {
            return res.status(400).json({ message: 'User ID not provided' });
        }
        if (userID && userType) {
            const result = await getUserSubject(userID, userType);
            return res.status(result.httpCode).json(result.message);
        }
        return res.status(401).json({ 'message': 'Unauthorize' });
    } catch (error) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
export const getUserNotificationController = async (req: Request & { user?: User }, res: Response) => {
    try {
        const { userID, userType } = req.user || {};
        if (!userID) {
            return res.status(400).json({ message: 'User ID not provided' });
        }
        if (userID && userType) {
            const result = await getUserNotification(userID);
            return res.status(result.httpCode).json(result.message);
        }
        return res.status(401).json({ 'message': 'Unauthorize' });
    } catch (error) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
export const getClassTasksController = async (req: Request & { user?: User }, res: Response) => {
    try {
        const classID = req.query.classID as string;
        if (classID) {
            let result;
            result = await getClassTask(classID);
            return res.status(200).json({ 'message': result });
        }

        return res.status(401).json({ 'message': 'ClassID not found' });
    } catch {
        res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
export const getClassPeopleController = async (req: Request & { user?: User }, res: Response) => {
    try {
        const classID = req.query.classID as string;
        if (classID) {
            let result;
            result = await getClassPeople(classID);
            return res.status(200).json({ 'message': result });
        }

        return res.status(401).json({ 'message': 'ClassID not found' });
    } catch {
        res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
