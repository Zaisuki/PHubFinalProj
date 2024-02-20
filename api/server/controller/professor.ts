import express, { Express, Request, Response } from 'express';
import { User } from '../middleware/authentication';
import { addAnnouncement, addCheck, addCoach, addConnect, deleteAllCheck, deleteAllConnect, deleteCheck, deleteCoach, deleteConnect } from '../services/professor';

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
// TODO: add delete and required checker
export const addCheckController = async (req: Request, res: Response) => {
    try {
        const { classID, postTitle, postDescription, dueDate, attachment } = req.body;
        const result = await addCheck(classID, postTitle, postDescription, dueDate, attachment);
        return res.status(result.httpCode).json({ 'message': result.message });
    } catch (error) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};

export const addCoachController = async (req: Request, res: Response) => {
    try {
        const { classID, postTitle, postDescription, attachment } = req.body;
        const result = await addCoach(classID, postTitle, postDescription, attachment);
        return res.status(result.httpCode).json({ 'message': result.message });
    } catch (error) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
export const addConnectController = async (req: Request, res: Response) => {
    try {
        const { classID, postTitle, postDescription, dueDate, attachment, choices } = req.body;
        let choicesArr = JSON.parse(choices);
        const result = await addConnect(classID, postTitle, postDescription, dueDate, attachment, choicesArr);
        return res.status(result.httpCode).json({ 'message': result.message });
    } catch (error) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
export const deleteAllCheckController = async (req: Request, res: Response) => {
    try {
        const {classID} = req.body
        const result = await deleteAllCheck(classID);
        
        return res.status(result.httpCode).json({ 'message': result.message });
    } catch (error: any) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
export const deleteCheckController = async (req: Request, res: Response) => {
    try {
        const {classID, checkID} = req.body
        const result = await deleteCheck(classID, checkID);
        
        return res.status(result.httpCode).json({ 'message': result.message });
    } catch (error: any) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
export const deleteAllCoachController = async (req: Request, res: Response) => {
    try {
        const {classID} = req.body
        const result = await deleteAllCheck(classID);
        
        return res.status(result.httpCode).json({ 'message': result.message });
    } catch (error: any) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
export const deleteCoachController = async (req: Request, res: Response) => {
    try {
        const {classID, coachID} = req.body
        const result = await deleteCoach(classID, coachID);
        
        return res.status(result.httpCode).json({ 'message': result.message });
    } catch (error: any) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
export const deleteAllConnectController = async (req: Request, res: Response) => {
    try {
        const {classID} = req.body
        const result = await deleteAllConnect(classID);
        
        return res.status(result.httpCode).json({ 'message': result.message });
    } catch (error: any) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
export const deleteConnectController = async (req: Request, res: Response) => {
    try {
        const {classID, connectID} = req.body
        const result = await deleteConnect(classID, connectID);
        
        return res.status(result.httpCode).json({ 'message': result.message });
    } catch (error: any) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};