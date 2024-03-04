import express, { Express, Request, Response } from 'express';
import { Professor, Student } from '../models/user';
import { Announcement } from '../models/classModel/announcement';
import { StudentSubjects } from '../models/classModel/studentClass';

export const getAllStudentAnouncement = async (id: string) => {
    try {
        const professorID: string[] = [];
        const announcementID = [];
        const studentResult = await Student.findOne({ _id: id }, 'studentSubjects/class')
            .populate({
                path: 'studentSubjects',
                populate: {
                    path: 'class',
                },
            })
            .exec();

        for (const classObj of (studentResult?.studentSubjects[0] as any)?.class) {
            announcementID.push(...classObj.announcement);
            const professorIDString = classObj.professor.toString();
            if (!professorID.includes(professorIDString)) {
                professorID.push(professorIDString);
            }
        }
        for (const professor of professorID) {
            const professorResult = await Professor.findOne({ _id: professor }).populate('professorHandledClass');
            announcementID.push(...(professorResult?.professorHandledClass[0] as any).announcement);
        }
        const result = await Announcement.find({ _id: { $in: announcementID } })
            .populate('professor')
            .populate({
                path: 'class',
                populate: {
                    path: 'subject',
                },
            })
            .sort({ createdAt: -1 });
        return result;
    } catch (error) {
        return { 'message': 'No Announcement' };
    }
};
export const getAllProfessorAnouncement = async (professorID: string) => {
    try {
        const result = await Announcement.find({ professor: professorID, class: null }).populate('professor').sort({ createdAt: -1 });

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
