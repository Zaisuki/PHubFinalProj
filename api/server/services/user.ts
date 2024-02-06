import express, { Express, Request, Response } from 'express';
import { HttpResponse } from '../models/http-response';
import { Professor, Student, UserCredentials } from '../models/user';

export const findAllUsers = async (req: Request, res: Response) => {
    try {
        const students = await Student.find({}).populate('UserCredentials').exec();

        // const professors = Professor.find({})
        //     .populate('userCredentials')
        //     .then((professors) => {
        //         console.log('All professors:', professors);
        //         return professors;
        //     })
        //     .catch((error) => {
        //         console.error('Error retrieving professors:', error);
        //     });
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json('No Students found');
    }
};
export const deleteAllUsers = async (req: Request, res: Response) => {
    try {
        const students = await Student.deleteMany({});
        const professor = await Professor.deleteMany({});
        const userCredentials = await UserCredentials.deleteMany({});
        if (students.deletedCount + userCredentials.deletedCount + professor.deletedCount > 0) {
            return res.status(200).json({ message: 'All users deleted successfully' });
        } else {
            return res.status(404).json({ message: 'No users found to delete' });
        }
    } catch (error) {
        res.status(500).json('Error deleting All users');
    }
};
