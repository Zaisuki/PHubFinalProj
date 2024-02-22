import express, { Express, Request, Response } from 'express';
import { Professor, Student } from '../models/user';
import { Announcement } from '../models/classModel/announcement';
import { StudentSubjects } from '../models/classModel/studentClass';

export const getAllStudentAnouncement = async (id: string) => {
    try {
        const result = await Student.findOne({ _id: id }, 'studentSubjects')
            .populate({
                path: 'studentSubjects',
                populate: {
                    path: 'class',
                    populate: {
                        path: 'announcement',
                    },
                },
            })
            .exec();
        return result;
    } catch (error) {
        return { 'message': 'No Announcement' };
    }
};
export const getAllProfessorAnouncement = async (professorID: string) => {
    try {
        const result = await Announcement.find({ professor: professorID, class: null }).populate('professor');

        return result;
    } catch (error) {
        return { 'message': 'No Announcement' };
    }
};

export const postAnnouncement = async (header: string, announcement: string, professor: string, classID: string) => {
    try {
        new Announcement({
            header,
            announcement,
            professor,
            classID,
        }).save();
        return { message: 'Announcement saved to the database', httpCode: 200 };
    } catch (error) {
        return { message: "Announcement can't be found", httpCode: 500 };
    }
};
