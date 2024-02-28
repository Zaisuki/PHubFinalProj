import express, { Express, Request, Response } from 'express';
import { User } from '../middleware/authentication';
import { addAnnouncement, addCheck, addCoach, addConnect, deleteAllCheck, deleteAllConnect, deleteCheck, deleteCoach, deleteConnect, getCheck, getCheckTask, getClass, getCoach, getCoachTask, getConnect, getConnectTask } from '../services/professor';

export const getClassController = async (req: Request & { user?: User }, res: Response) => {
    try {
        const { userID, userType } = req.user || {};
        if (userID) {
            let result;
            result = await getClass(userID);
            return res.status(200).json({ 'message': result });
        }

        return res.status(401).json({ 'message': 'Unauthorize' });
    } catch {
        res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
export const getCoachController = async (req: Request, res: Response) => {
    try {
        const classID = req.query.classID as string;
        if (classID) {
            let result;
            result = await getCoach(classID);
            return res.status(200).json({ 'message': result });
        }

        return res.status(401).json({ 'message': 'Class not found' });
    } catch {
        res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
export const getCheckController = async (req: Request, res: Response) => {
    try {
        const classID = req.query.classID as string;
        if (classID) {
            let result;
            result = await getCheck(classID);
            return res.status(200).json({ 'message': result });
        }

        return res.status(401).json({ 'message': 'Class not found' });
    } catch {
        res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
export const getConnectController = async (req: Request, res: Response) => {
    try {
        const classID = req.query.classID as string;
        if (classID) {
            let result;
            result = await getConnect(classID);
            return res.status(200).json({ 'message': result });
        }

        return res.status(401).json({ 'message': 'Class not found' });
    } catch {
        res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
export const getCoachTaskController = async (req: Request, res: Response) => {
    try {
        const classID = req.query.classID as string;
        if (classID) {
            let result;
            result = await getCoachTask(classID);
            return res.status(200).json({ 'message': result });
        }

        return res.status(401).json({ 'message': 'Class not found' });
    } catch {
        res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
export const getCheckTaskController = async (req: Request, res: Response) => {
    try {
        const classID = req.query.classID as string;
        if (classID) {
            let result;
            result = await getCheckTask(classID);
            return res.status(200).json({ 'message': result });
        }

        return res.status(401).json({ 'message': 'Class not found' });
    } catch {
        res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
export const getConnectTaskController = async (req: Request, res: Response) => {
    try {
        const classID = req.query.classID as string;
        if (classID) {
            let result;
            result = await getConnectTask(classID);
            return res.status(200).json({ 'message': result });
        }

        return res.status(401).json({ 'message': 'Class not found' });
    } catch {
        res.status(500).json({ 'message': 'Internal Server Error' });
    }
};

export const addAnnouncementController = async (req: Request & { user?: User }, res: Response) => {
    try {
        const { header, announcement, classID } = req.body;
        if (!header) {
            return res.status(400).json({ 'message': 'Add Title' });
        }
        if (!announcement) {
            return res.status(400).json({ 'message': 'Add Description' });
        }
        const professorID = req.user?.userID;
        const result = await addAnnouncement(header, announcement, professorID, classID);
        return res.status(result.httpCode).json({ 'message': result.message });
    } catch (error) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
// TODO: add delete and required checker
export const addCheckController = async (req: Request, res: Response) => {
    try {
        const { classID, postTitle, postDescription, dueDate } = req.body;
        //@ts-ignore
        const result = await addCheck(classID, postTitle, postDescription, dueDate, req.files);
        return res.status(result.httpCode).json({ 'message': result.message });
    } catch (error) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};

export const addCoachController = async (req: Request, res: Response) => {
    try {
        const { classID, postTitle, postDescription } = req.body;
        //@ts-ignore
        const result = await addCoach(classID, postTitle, postDescription, req.files);
        return res.status(result.httpCode).json({ 'message': result.message });
    } catch (error) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
export const addConnectController = async (req: Request, res: Response) => {
    try {
        const { classID, postTitle, postDescription, dueDate, choices } = req.body;
        console.log(classID);
        if (choices) {
            let choicesArr = JSON.parse(choices);
            const result = await addConnect(classID, postTitle, postDescription, dueDate, choicesArr);
            return res.status(result.httpCode).json({ 'message': result.message });
        }
        return res.status(200).json({ 'message': 'Incomplete data' });
    } catch (error) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
export const deleteAllCheckController = async (req: Request, res: Response) => {
    try {
        const { classID } = req.body;
        const result = await deleteAllCheck(classID);

        return res.status(result.httpCode).json({ 'message': result.message });
    } catch (error: any) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
export const deleteCheckController = async (req: Request, res: Response) => {
    try {
        const { classID, checkID } = req.body;
        const result = await deleteCheck(classID, checkID);

        return res.status(result.httpCode).json({ 'message': result.message });
    } catch (error: any) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
export const deleteAllCoachController = async (req: Request, res: Response) => {
    try {
        const { classID } = req.body;
        const result = await deleteAllCheck(classID);

        return res.status(result.httpCode).json({ 'message': result.message });
    } catch (error: any) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
export const deleteCoachController = async (req: Request, res: Response) => {
    try {
        const { classID, coachID } = req.body;
        const result = await deleteCoach(classID, coachID);

        return res.status(result.httpCode).json({ 'message': result.message });
    } catch (error: any) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
export const deleteAllConnectController = async (req: Request, res: Response) => {
    try {
        const { classID } = req.body;
        const result = await deleteAllConnect(classID);

        return res.status(result.httpCode).json({ 'message': result.message });
    } catch (error: any) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
export const deleteConnectController = async (req: Request, res: Response) => {
    try {
        const { classID, connectID } = req.body;
        const result = await deleteConnect(classID, connectID);

        return res.status(result.httpCode).json({ 'message': result.message });
    } catch (error: any) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
