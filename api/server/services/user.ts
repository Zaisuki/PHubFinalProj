import express, { Express, Request, Response } from 'express';
import { Admin, Professor, Student, UserCredentials } from '../models/user';
import { Announcement } from '../models/classModel/announcement';
import { Check, Class, Coach, Connect } from '../models/classModel/class';
import { ProfessorHandledClass } from '../models/classModel/professorClass';
import { StudentCheckSubmission, StudentCoachView, StudentConnectSubmission, StudentSubjects } from '../models/classModel/studentClass';
import { Subject } from '../models/classModel/subject';
import { Inbox } from '../models/inbox';
import { Message } from '../models/message';
import { Types } from 'mongoose';

// TODO: remove this, this is temporary
export const findAllUsers = async (req: Request, res: Response) => {
    try {
        const students = await Student.find({})
            .populate('userCredentials')
            .populate({
                path: 'studentSubjects',
                populate: {
                    path: 'class',
                },
            })
            .exec();
        const professor = await Professor.find({})
            .populate('userCredentials')
            .populate({
                path: 'professorHandledClass',
                populate: {
                    path: 'class',
                },
            })
            .exec();
        const admin = await Admin.find({}).populate('userCredentials').exec();
        const announcement = await Announcement.find({});
        const check = await Check.find({});
        const connect = await Connect.find({});
        const coach = await Coach.find({});
        const classes = await Class.find({}).populate('professor').populate('subject').exec();
        const professorHandledClass = await ProfessorHandledClass.find({});
        const studentConnectSubmission = await StudentConnectSubmission.find({});
        const studentCheckSubmission = await StudentCheckSubmission.find({});
        const studentCoachView = await StudentCoachView.find({});
        const studentSubjects = await StudentSubjects.find({});
        const subject = await Subject.find({});
        const inbox = await Inbox.find({});
        const message = await Message.find({});

        res.status(200).json({ admin, students, professor, announcement, check, connect, coach, classes, professorHandledClass, studentConnectSubmission, studentCheckSubmission, studentCoachView, studentSubjects, subject, inbox, message });
    } catch (error) {
        res.status(500).json('No Students found');
    }
};
export const deleteAllUsers = async (req: Request, res: Response) => {
    try {
        const students = await Student.deleteMany({});
        const admin = await Admin.deleteMany({});
        const professor = await Professor.deleteMany({});
        const userCredentials = await UserCredentials.deleteMany({});
        const announcement = await Announcement.deleteMany({});
        const check = await Check.deleteMany({});
        const connect = await Connect.deleteMany({});
        const coach = await Coach.deleteMany({});
        const classes = await Class.deleteMany({});
        const professorHandledClass = await ProfessorHandledClass.deleteMany({});
        const studentConnectSubmission = await StudentConnectSubmission.deleteMany({});
        const studentCheckSubmission = await StudentCheckSubmission.deleteMany({});
        const studentCoachView = await StudentCoachView.deleteMany({});
        const studentSubjects = await StudentSubjects.deleteMany({});
        const subject = await Subject.deleteMany({});
        const inbox = await Inbox.deleteMany({});
        const message = await Message.deleteMany({});
        if (students.deletedCount + userCredentials.deletedCount + professor.deletedCount > 0) {
            return res.status(200).json({ message: 'All users deleted successfully' });
        } else {
            return res.status(404).json({ message: 'No users found to delete' });
        }
    } catch (error) {
        res.status(500).json('Error deleting All users');
    }
};

export const findProfessorByID = async (id: string) => {
    try {
        const professor = await Professor.findById(id);

        return professor;
    } catch (error) {
        return { 'message': 'No professor found', 'httpCode': 500 };
    }
};

// Profile
export const getUserProfile = async (userID: string, userType: string) => {
    try {
        const userObjectID = new Types.ObjectId(userID);
        console.log(userObjectID);
        const populateDataByType = userType === 'student' ? 'studentInformation' : userType === 'professor' ? 'professorInformation' : 'adminInformation';
        console.log(populateDataByType);
        const findDataByType = userType === 'student' ? { studentInformation: userObjectID } : userType === 'professor' ? { professorInformation: userObjectID } : { adminInformation: userObjectID };
        const userDetails = await UserCredentials.findOne(findDataByType).populate(populateDataByType).exec();

        if (userDetails) {
            return { message: userDetails, httpCode: 200 };
        }

        return { 'message': 'No user found', 'httpCode': 500 };
    } catch (error) {
        return { 'message': 'No user found', 'httpCode': 500 };
    }
};
