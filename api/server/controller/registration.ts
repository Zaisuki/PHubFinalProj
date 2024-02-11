import express, { Express, Request, Response } from 'express';
import { HttpResponse } from '../models/http-response';
import { User } from '../middleware/authentication';
import { addSubject, checkSubjectAvailability, deleteAllSubject, getSubject } from '../services/registration';

export const addSubjectController = async (req: Request, res: Response) => {
    try {
        const { subjectCode, subjectDescription } = req.body;
        // check auth and if not empty
        if (!(await checkSubjectAvailability(subjectCode, subjectDescription))) {
            return res.status(200).json({ 'message': 'Subject is in the database.' });
        }
        const result = await addSubject(subjectCode, subjectDescription);
        return res.status(result.httpCode).json({ 'message': result.message });
    } catch {
        res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
export const getSubjectController = async (req: Request, res: Response) => {
    try {
        // check auth
        const result = await getSubject();
        return res.status(result.httpCode).json({ 'message': result.message });
    } catch {
        res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
export const deleteAllSubjectController = async (req: Request, res: Response) => {
    try {
        // check auth
        const result = await deleteAllSubject();
        return res.status(result.httpCode).json({ 'message': result.message });
    } catch {
        res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
