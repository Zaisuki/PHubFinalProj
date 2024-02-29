import express, { Express, Request, Response } from 'express';
import { Student } from '../models/user';
import { User } from '../middleware/authentication';
import { populate } from 'dotenv';
import { StudentCheckSubmission, StudentConnectSubmission, StudentSubjects } from '../models/classModel/studentClass';
import { Check, Coach, Connect } from '../models/classModel/class';

// export const findAllStudent = async (req: Request, res: Response) => {
//     try {
//         const students = await Student.find({});
//         res.status(200).json(students);
//     } catch (error) {
//         res.status(500).json('No Students found');
//     }
// };

// export const findStudent = async (req: Request, res: Response) => {
//     try {
//         const { id } = req.params;
//         const student = await Student.findById(id);
//         res.status(200).json(student);
//     } catch (error) {
//         res.status(500).json("Student can't be found");
//     }
// };

// export const updateStudent = async (req: Request, res: Response) => {
//     try {
//         const { id } = req.params;
//         const student = await Student.findByIdAndUpdate(id, req.body);
//         // cannot find any student in database
//         if (!student) {
//             res.status(404).json({ message: `Can't find any product with ID ${id}` });
//         }
//         // to see the latest update in postman
//         const updatedStudent = await Student.findById(id);
//         res.status(200).json(updatedStudent);
//     } catch (error: any) {
//         res.status(500).json({ message: error.message });
//     }
// };

// export const deleteStudent = async (req: Request, res: Response) => {
//     try {
//         const { id } = req.params;
//         const student = await Student.findByIdAndDelete(id, req.body);
//         // cannot find any student in database
//         if (!student) {
//             res.status(404).json({ message: `Can't find any product with ID ${id}` });
//         }
//         // to see the latest update in postman
//         const updatedStudent = await Student.findById(id);
//         res.status(200).json(updatedStudent);
//     } catch (error: any) {
//         res.status(500).json({ message: error.message });
//     }
// };

// export const addStudent = async (req: Request, res: Response) => {
//     try {
//         const student = await Student.create(req.body);
//         res.status(200).json(student);
//     } catch (error: any) {
//         console.log(error.message);
//         res.status(500).json({ message: error.message });
//     }
// };

// ALL THINGS THAT STUDENT CAN DO IN THIS WEBSITE

export const getAnnouncement = async (studentID: string | undefined) => {
    try {
        const result = await Student.find({}, 'studentSubjects')
            .populate({
                path: 'studentSubjects',
                populate: {
                    path: 'class',
                    populate: {
                        path: 'professor',
                        populate: {
                            path: 'professorHandledClass',
                            populate: [
                                {
                                    path: 'class',
                                    populate: {
                                        path: 'announcement',
                                    },
                                },
                                {
                                    path: 'announcement',
                                },
                            ],
                        },
                    },
                },
            })
            .exec();
        const announcements = [];

        return { message: result, httpCode: 200 };
    } catch (error: any) {
        return { message: error.message, httpCode: 500 };
    }
};

export const getCheck = async (userID: string | undefined) => {
    try {
        const noDueDate = [],
            thisWeek = [],
            nextWeek = [],
            later = [],
            missing = [];
        const classesObj = await StudentSubjects.findOne({ student: userID });
        for (const classObj of (classesObj as any)?.class) {
            const checks: any = await Check.find({ class: classObj }).sort({ dueDate: 1 });
            for (const check of checks as any) {
                if (!check.studentSubmission.includes(userID)) {
                    if (check.dueDate) {
                        const date = new Date(check.dueDate);
                        const currentDate = new Date();
                        if (date < currentDate) {
                            missing.push(check);
                            continue;
                        }
                        const difference = date.getTime() - currentDate.getTime();
                        const differenceInWeeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));

                        if (differenceInWeeks === 0) {
                            thisWeek.push(check);
                        } else if (differenceInWeeks === 1) {
                            nextWeek.push(check);
                        } else {
                            later.push(check);
                        }
                    } else {
                        noDueDate.push(check);
                    }
                }
            }
        }
        return { noDueDate, thisWeek, nextWeek, later, missing };
    } catch (error) {
        return { 'message': 'No Check' };
    }
};
export const getConnect = async (userID: string | undefined) => {
    try {
        const thisWeek = [],
            nextWeek = [],
            later = [],
            missing = [];
        const classesObj = await StudentSubjects.findOne({ student: userID });
        for (const classObj of (classesObj as any)?.class) {
            const connects: any = await Connect.find({ class: classObj }).populate('postChoices').sort({ dueDate: 1 });
            for (const connect of connects as any) {
                if (!connect.studentSubmission.includes(userID)) {
                    if (connect.dueDate) {
                        const date = new Date(connect.dueDate);
                        const currentDate = new Date();
                        if (date < currentDate) {
                            missing.push(connect);
                            continue;
                        }
                        const difference = date.getTime() - currentDate.getTime();
                        const differenceInWeeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));

                        if (differenceInWeeks === 0) {
                            thisWeek.push(connect);
                        } else if (differenceInWeeks === 1) {
                            nextWeek.push(connect);
                        } else {
                            later.push(connect);
                        }
                    }
                }
            }
        }
        return { thisWeek, nextWeek, later, missing };
    } catch (error) {
        return { 'message': 'No Connect' };
    }
};

export const getCoach = async (userID: string | undefined) => {
    try {
        const coachTask = [];
        const classesObj = await StudentSubjects.findOne({ student: userID });
        for (const classObj of (classesObj as any)?.class) {
            const coachs: any = await Coach.find({ class: classObj })
                .populate({ path: 'class', populate: { path: 'subject' } })
                .sort({ createdAt: -1 });
            coachTask.push(...coachs);
        }
        return { coachTask };
    } catch (error) {
        return { 'message': 'No Coach' };
    }
};

export const submitCheck = async (taskID: string, userID: string | undefined, files: UploadedFile[] | undefined) => {
    try {
        let newStudentCheckSubmission = await new StudentCheckSubmission({
            student: userID,
            task: taskID,
        }).save();
        if (files) {
            for (const file of files) {
                const imagePath = file.path;
                newStudentCheckSubmission.attachment.push(imagePath);
            }
            await newStudentCheckSubmission.save();
        }
        let studentSubjectsSchema = await StudentSubjects.findOne({ student: userID });
        if (!studentSubjectsSchema) {
            return { message: 'Student not found', httpCode: 404 };
        }
        studentSubjectsSchema.studentCheckSubmission.push(newStudentCheckSubmission._id);

        await studentSubjectsSchema.save();
        return { message: 'Check submitted', httpCode: 200 };
    } catch (error: any) {
        return { message: error.message, httpCode: 500 };
    }
};
export const submitConnect = async (taskID: string, userID: string | undefined, answerID: string) => {
    try {
        let studentConnectSubmissionSchema = await new StudentConnectSubmission({
            student: userID,
            answer: answerID,
            task: taskID,
        }).save();

        let studentSubjectsSchema = await StudentSubjects.findOne({ student: userID });
        if (!studentSubjectsSchema) {
            return { message: 'Student not found', httpCode: 404 };
        }
        studentSubjectsSchema.studentConnectSubmission.push(studentConnectSubmissionSchema._id);

        await studentSubjectsSchema.save();
        return { message: 'Connect submitted', httpCode: 200 };
    } catch (error: any) {
        return { message: error.message, httpCode: 500 };
    }
};

// INTERFACE
interface UploadedFile {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    destination: string;
    filename: string;
    path: string;
    size: number;
}
