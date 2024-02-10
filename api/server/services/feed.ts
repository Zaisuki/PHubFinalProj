import express, { Express, Request, Response } from 'express';
import { HttpResponse } from '../models/http-response';
import { Student } from '../models/user';
import { Announcement } from '../models/classModel/announcement';
import { StudentSubjects } from '../models/classModel/studentClass';

export const getAllAnouncement = async (id: string, res: Response) => {
    try {
        const studentSubjects = await Student.find({}, 'studentSubjects');
        const studentClass = await StudentSubjects.find({}, 'class');
        const result = await Announcement.find({});
        return result;
    } catch (error) {
        return { 'message': 'No Announcement' };
    }
};

export const findStudent = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const student = await Student.findById(id);
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json("Student can't be found");
    }
};
