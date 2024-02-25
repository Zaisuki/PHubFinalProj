import { Types } from 'mongoose';
import { Class } from '../models/classModel/class';
import { ProfessorHandledClass } from '../models/classModel/professorClass';
import { StudentSubjects } from '../models/classModel/studentClass';
import { Subject } from '../models/classModel/subject';
import { Student } from '../models/user';

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
        const result = await Subject.find({ $or: [{ subjectCode: { $regex: new RegExp(`^${subjectCode}$`, 'i') } }, { subjectDescription: { $regex: new RegExp(`^${subjectDescription}$`, 'i') } }] });
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
        const classID = await new Class({
            professor: professorID,
            block: block,
            subject: subjectID,
        }).save();
        await ProfessorHandledClass.findOneAndUpdate({ professor: professorID }, { class: classID._id });
        return { message: 'Professor handling the class', httpCode: 200 };
    } catch (error) {
        return { message: error, httpCode: 500 };
    }
};
export const deleteAllClass = async () => {
    try {
        const subject = await Class.deleteMany({});
        if (subject.deletedCount > 0) {
            return { message: 'All Class deleted successfully', httpCode: 200 };
        } else {
            return { message: 'No class found to delete', httpCode: 200 };
        }
    } catch (error) {
        return { message: error, httpCode: 500 };
    }
};
export const deleteClass = async (classID: string) => {
    try {
        const subject = await Class.deleteOne({_id: classID});
        if (subject.deletedCount > 0) {
            return { message: 'Class deleted successfully', httpCode: 200 };
        } else {
            return { message: 'No class found to delete', httpCode: 200 };
        }
    } catch (error) {
        return { message: error, httpCode: 500 };
    }
};
export const enrollStudentInClass = async (studentID: string, classID: string) => {
    try {
        await StudentSubjects.findOneAndUpdate({ student: studentID }, { $push: { class: classID } });
        await Class.findByIdAndUpdate(classID, { $push: { students: studentID } });
        return { message: 'Student enrolled', httpCode: 200 };
    } catch (error) {
        return { message: error, httpCode: 500 };
    }
};

export const checkStudentInClass = async (studentID: string, classID: string) => {
    try {
        const classResult = (await Class.findById(classID))
        let result = true
        const studentObjectID = await Student.findById(studentID);
        if (classResult && studentObjectID){
            result = classResult.students.includes(studentObjectID._id);
        }
        return result;
    } catch (error) {
        return { message: error, httpCode: 500 };
    }
};

export const removeStudentInClass = async (studentID: string, classID: string) => {
    try {
        const result = await Class.updateOne({ _id: classID }, { $pull: { students: studentID } });
        await StudentSubjects.updateOne({student: studentID},  { $pull: { class: classID } })
        if (result.modifiedCount === 1) {
            return { message: 'Student removed from class successfully.', success: true };
        } else {
            return { message: 'Student not found in class.', success: false };
        }
    } catch (error) {
        return { message: error, httpCode: 500 };
    }
};