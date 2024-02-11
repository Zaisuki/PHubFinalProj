import express, { Express, Request, Response } from 'express';
import { HttpResponse } from '../models/http-response';
import { User } from '../middleware/authentication';

export const getAnnouncementController = async (req: Request & { user?: User }, res: Response) => {
    try {
        console.log('Data', req.user);
        return res.status(200).json({ 'message': 'Data' });
    } catch {
        res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
