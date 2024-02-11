import { Class } from '../models/classModel/class';
import { Subject } from '../models/classModel/subject';

export const addSubject = async (subjectCode: string, subjectDescription: string) => {
    try {
        const subject = await new Subject({
            subjectCode,
            subjectDescription,
        }).save();
        return { message: 'Subject saved to the database', httpCode: 200 };
    } catch (error) {
        return { message: error, httpCode: 500 };
    }
};
export const getSubject = async () => {
    try {
        const subject = await Subject.find({});
        return { message: subject, httpCode: 200 };
    } catch (error) {
        return { message: error, httpCode: 500 };
    }
};
export const checkSubjectAvailability = async (subjectCode: string, subjectDescription: string) => {
    try {
        const result = (await Subject.find({ $or: [{ subjectCode: { $regex: new RegExp(`^${subjectCode}$`, 'i') } }, { subjectDescription: { $regex: new RegExp(`^${subjectDescription}$`, 'i') } }] })) === null;
        return result;
    } catch (error) {
        return false;
    }
};
export const deleteAllSubject = async () => {
    try {
        const subject = await Subject.deleteMany({});
        if (subject.deletedCount > 0) {
            return { message: 'All subject deleted successfully', httpCode: 200 };
        } else {
            return { message: 'No subjects found to delete', httpCode: 200 };
        }
    } catch (error) {
        return { message: error, httpCode: 500 };
    }
};

export const addClass = async (professorID: string, block: string, subjectID: string) => {
    try {
       await new Class({
            professor: professorID,
            block: block,
            subject: subjectID
        }).save();
        return { message: 'Class saved to the database', httpCode: 200 };
    } catch (error) {
        return { message: error, httpCode: 500 };
    }
};