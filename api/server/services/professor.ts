import express, { Express, Request, Response } from 'express';
import { Professor } from '../models/user';
import { Announcement } from '../models/classModel/announcement';
import { Attachement, Check, Class, Coach, Connect, ConnectChoices } from '../models/classModel/class';
import { ProfessorHandledClass } from '../models/classModel/professorClass';
import { addTaskNotification } from './notification';
import { StudentCheckSubmission, StudentConnectSubmission } from '../models/classModel/studentClass';

import { getStorage, ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { storage } from './upload';
// export const findAllProfessor = async (req: Request, res: Response) => {
//     try {
//         const professors = await Professor.find({});
//         res.status(200).json(professors);
//     } catch (error) {
//         res.status(500).json('No Professors found');
//     }
// };

// export const findProfessor = async (req: Request, res: Response) => {
//     try {
//         const { id } = req.params;
//         const professor = await Professor.findById(id);
//         res.status(200).json(professor);
//     } catch (error) {
//         res.status(500).json("Professor can't be found");
//     }
// };

// export const updateProfessor = async (req: Request, res: Response) => {
//     try {
//         const { id } = req.params;
//         const professor = await Professor.findByIdAndUpdate(id, req.body);
//         // cannot find any Professor in database
//         if (!professor) {
//             res.status(404).json({ message: `Can't find any product with ID ${id}` });
//         }
//         // to see the latest update in postman
//         const updatedProfessor = await Professor.findById(id);
//         res.status(200).json(updatedProfessor);
//     } catch (error: any) {
//         res.status(500).json({ message: error.message });
//     }
// };

// export const deleteProfessor = async (req: Request, res: Response) => {
//     try {
//         const { id } = req.params;
//         const professor = await Professor.findByIdAndDelete(id, req.body);
//         // cannot find any Professor in database
//         if (!Professor) {
//             res.status(404).json({ message: `Can't find any product with ID ${id}` });
//         }
//         // to see the latest update in postman
//         const updatedProfessor = await Professor.findById(id);
//         res.status(200).json(updatedProfessor);
//     } catch (error: any) {
//         res.status(500).json({ message: error.message });
//     }
// };

// export const addProfessor = async (req: Request, res: Response) => {
//     try {
//         const professor = await Professor.create(req.body);
//         res.status(200).json(Professor);
//     } catch (error: any) {
//         res.status(500).json({ message: error.message });
//     }
// };

// THINGS THAT ONLY PROFESSOR CAN Create Update and Delete
// CLASS
export const getClass = async (id: string) => {
    try {
        const result: string[] = [];
        const professorsClass = await Professor.findOne({ _id: id }, 'professorHandledClass')
            .populate({
                path: 'professorHandledClass',
                populate: {
                    path: 'class',
                    populate: {
                        path: 'subject',
                    },
                },
            })
            .exec();
        for (const classObj of (professorsClass?.professorHandledClass[0] as any)?.class) {
            result.push(classObj);
        }
        return result;
    } catch (error) {
        return { 'message': ['No Class'] };
    }
};
export const getCoach = async (classID: string) => {
    try {
        const result = await Coach.find({ class: classID }).sort({ createdAt: -1 });
        return result;
    } catch (error) {
        return { 'message': 'No Coach' };
    }
};
export const getCheck = async (classID: string) => {
    try {
        const result = await Check.find({ class: classID }).sort({ createdAt: -1 });
        return result;
    } catch (error) {
        return { 'message': 'No Check' };
    }
};
export const getConnect = async (classID: string) => {
    try {
        const result = await Connect.find({ class: classID }).sort({ createdAt: -1 });
        return result;
    } catch (error) {
        return { 'message': 'No Connect' };
    }
};
export const getCoachTask = async (classID: string) => {
    try {
        const result = await Coach.findById(classID).populate('attachment').exec();
        return result;
    } catch (error) {
        return { 'message': 'No Coach' };
    }
};
export const getCheckTask = async (classID: string) => {
    try {
        const result = await Check.findById(classID).populate('attachment').exec();
        return result;
    } catch (error) {
        return { 'message': 'No Check' };
    }
};
export const getConnectTask = async (classID: string) => {
    try {
        const result = await Connect.findById(classID).populate('postChoices').populate('class').exec();
        return result;
    } catch (error) {
        return { 'message': 'No Connect' };
    }
};
export const editHighScoreConnect = async (taskID: string, editedScoreInt: number) => {
    try {
        const connectTask = await Connect.findOneAndUpdate({ _id: taskID }, { $set: { highestPossibleScore: editedScoreInt } }, { new: true });
        return { message: 'Task high score updated', httpCode: 200 };
    } catch (error: any) {
        return { message: error.message, httpCode: 500 };
    }
};
export const editHighScoreCheck = async (taskID: string, editedScoreInt: number) => {
    try {
        const connectTask = await Check.findOneAndUpdate({ _id: taskID }, { $set: { highestPossibleScore: editedScoreInt } }, { new: true });
        return { message: 'Task high score updated', httpCode: 200 };
    } catch (error: any) {
        return { message: error.message, httpCode: 500 };
    }
};

export const getCheckTaskSubmission = async (taskID: string) => {
    try {
        const studentTurnedIn = [],
            studentGraded = [],
            studentAssigned = [];
        const task = await Check.findById(taskID);
        if (!task) {
            return 'Class not found.';
        }
        const classID = task.class;
        const students = await Class.findById(classID, 'students').populate('students');
        for (const student of (students as any)?.students) {
            const studentSubmission = await StudentCheckSubmission.findOne({ student, task: taskID }).populate('attachment').populate('student');
            if (studentSubmission) {
                if (studentSubmission.score) {
                    studentGraded.push([student, studentSubmission]);
                } else {
                    studentTurnedIn.push([student, studentSubmission]);
                }
            } else {
                studentAssigned.push([student]);
            }
        }
        return { studentTurnedIn, studentGraded, studentAssigned };
    } catch (error) {
        return { 'message': 'No Check' };
    }
};
export const scoreStudentsConnect = async (data: object) => {
    try {
        Object.entries(data).forEach(async ([student, score]) => {
            await StudentConnectSubmission.findOneAndUpdate({ student }, { score }, { upsert: true, new: true });
        });
        return { message: 'Students score updated', httpCode: 200 };
    } catch (error: any) {
        return { message: error.message, httpCode: 500 };
    }
};
export const scoreStudentsCheck = async (data: object) => {
    try {
        Object.entries(data).forEach(async ([student, score]) => {
            await StudentCheckSubmission.findOneAndUpdate({ student }, { score }, { upsert: true, new: true });
        });
        return { message: 'Students score updated', httpCode: 200 };
    } catch (error: any) {
        return { message: error.message, httpCode: 500 };
    }
};
export const getConnectTaskSubmission = async (taskID: string) => {
    try {
        const studentTurnedIn = [],
            studentGraded = [],
            studentAssigned = [];
        const task = await Connect.findById(taskID);
        if (!task) {
            return 'Class not found.';
        }
        const classID = task.class;
        const students = await Class.findById(classID, 'students').populate('students');
        for (const student of (students as any)?.students) {
            const studentSubmission = await StudentConnectSubmission.findOne({ student, task: taskID }).populate('answer').populate('student');
            if (studentSubmission) {
                if (studentSubmission.score) {
                    studentGraded.push([student, studentSubmission]);
                } else {
                    studentTurnedIn.push([student, studentSubmission]);
                }
            } else {
                studentAssigned.push([student]);
            }
        }
        return { studentTurnedIn, studentGraded, studentAssigned };
    } catch (error) {
        return { 'message': 'No Connect' };
    }
};

// ANNOUNCEMENTS
export const addAnnouncement = async (header: string, announcement: string, professorID: string | undefined, classID: string) => {
    try {
        let newAnnouncement = await new Announcement({
            header,
            announcement,
            professor: professorID,
        }).save();
        if (classID.toLowerCase() !== 'public') {
            let classScheme = await Class.findById(classID);
            if (!classScheme) {
                return { message: 'Class not found', httpCode: 404 };
            }
            newAnnouncement.class = classScheme._id;
            classScheme.announcement.push(newAnnouncement._id);
            await classScheme.save();
        } else {
            await ProfessorHandledClass.findOneAndUpdate({ professor: professorID }, { $push: { announcement: newAnnouncement._id } });
        }
        await newAnnouncement.save();
        return { message: 'Announcement posted', httpCode: 200 };
    } catch (error: any) {
        return { message: error.message, httpCode: 500 };
    }
};
// TODO: temporary delete all announcement, add delete announcement that can be deleted by the professor that posted
export const deleteAnnouncement = async (req: Request, res: Response) => {
    try {
        const announcement = await Announcement.deleteMany({});

        res.status(200).json(announcement);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const addCheck = async (classID: string, postTitle: string, postDescription: string, dueDate: Date, typeOfCheck: string, files: UploadedFile[] | undefined) => {
    try {
        let newCheck = await new Check({
            postTitle,
            postDescription,
            dueDate,
            typeOfCheck,
        }).save();
        if (files) {
            for (const file of files) {
                const storageRef = ref(storage, `files/${file.originalname}${new Date()}`);

                const metadata = {
                    contentType: file.mimetype,
                };

                const snapshot = await uploadBytesResumable(storageRef, file.buffer, metadata);
                const downloadURL = await getDownloadURL(snapshot.ref);
                const fileType = file.mimetype.startsWith('image/') ? 'image' : 'docs';
                let newAttachment = await new Attachement({ url: downloadURL, type: fileType }).save();
                newCheck.attachment.push(newAttachment._id);
            }
            await newCheck.save();
        }
        let classScheme = await Class.findById(classID);
        if (!classScheme) {
            return { message: 'Class not found', httpCode: 404 };
        }

        newCheck.class = classScheme._id;
        classScheme.check.push(newCheck._id);
        await classScheme.save();
        await newCheck.save();
        addTaskNotification('Check', newCheck);
        return { message: 'Check posted', httpCode: 200 };
    } catch (error: any) {
        return { message: error.message, httpCode: 500 };
    }
};
export const deleteAllCheck = async (classID: string) => {
    try {
        const classClass = await Class.findById(classID);
        if (classClass) {
            await Promise.all(
                classClass.check.map(async (objID) => {
                    const result = await Check.deleteOne({ _id: objID._id });
                })
            );
            classClass.check = [];
            await classClass.save();
            return { message: 'Deleted all check', httpCode: 200 };
        }
        return { message: 'Deleted none', httpCode: 200 };
    } catch (error: any) {
        return { message: error.message, httpCode: 500 };
    }
};
export const deleteCheck = async (classID: string, checkID: string) => {
    try {
        const classClass = await Class.findById(classID);
        if (classClass) {
            await Check.deleteOne({ _id: checkID });
            classClass.check = classClass.check.filter((check) => check._id.toString() !== checkID);
            await classClass.save();
            return { message: 'Check deleted', httpCode: 200 };
        }
        return { message: 'Deleted none', httpCode: 200 };
    } catch (error: any) {
        return { message: error.message, httpCode: 500 };
    }
};
export const addCoach = async (classID: string, postTitle: string, postDescription: string, files: UploadedFile[] | undefined) => {
    try {
        let newCoach = await new Coach({
            postTitle,
            postDescription,
        }).save();
        if (files) {
            for (const file of files) {
                const storageRef = ref(storage, `files/${file.originalname}${new Date()}`);

                const metadata = {
                    contentType: file.mimetype,
                };

                const snapshot = await uploadBytesResumable(storageRef, file.buffer, metadata);
                const downloadURL = await getDownloadURL(snapshot.ref);
                const fileType = file.mimetype.startsWith('image/') ? 'image' : 'docs';
                let newAttachment = await new Attachement({ url: downloadURL, type: fileType }).save();
                newCoach.attachment.push(newAttachment._id);
            }
            await newCoach.save();
        }
        let classScheme = await Class.findById(classID);
        if (!classScheme) {
            return { message: 'Class not found', httpCode: 404 };
        }
        newCoach.class = classScheme._id;
        classScheme.coach.push(newCoach._id);
        await classScheme.save();
        await newCoach.save();
        addTaskNotification('Coach', newCoach);
        return { message: 'Coach posted', httpCode: 200 };
    } catch (error: any) {
        return { message: error.message, httpCode: 500 };
    }
};
export const deleteAllCoach = async (classID: string) => {
    try {
        const classClass = await Class.findById(classID);
        if (classClass) {
            await Promise.all(
                classClass.coach.map(async (objID) => {
                    const result = await Coach.deleteOne({ _id: objID._id });
                })
            );
            classClass.coach = [];
            await classClass.save();
            return { message: 'Deleted all coach', httpCode: 200 };
        }
        return { message: 'Deleted none', httpCode: 200 };
    } catch (error: any) {
        return { message: error.message, httpCode: 500 };
    }
};
export const deleteCoach = async (classID: string, coachID: string) => {
    try {
        const classClass = await Class.findById(classID);
        if (classClass) {
            await Coach.deleteOne({ _id: coachID });
            classClass.coach = classClass.coach.filter((coach) => coach._id.toString() !== coachID);
            await classClass.save();
            return { message: 'Coach deleted', httpCode: 200 };
        }
        return { message: 'Deleted none', httpCode: 200 };
    } catch (error: any) {
        return { message: error.message, httpCode: 500 };
    }
};
export const addConnect = async (classID: string, postTitle: string, postDescription: string, dueDate: Date, choices: string[]) => {
    try {
        let newConnect = await new Connect({
            postTitle,
            dueDate,
            postDescription,
        }).save();
        let classScheme = await Class.findById(classID);
        if (!classScheme) {
            return { message: 'Class not found', httpCode: 404 };
        }
        newConnect.class = classScheme._id;
        await Promise.all(
            choices.map(async (choice) => {
                const connectChoice = await new ConnectChoices({ choice }).save();
                newConnect.postChoices.push(connectChoice._id);
            })
        );
        classScheme.connect.push(newConnect._id);
        await classScheme.save();
        await newConnect.save();
        addTaskNotification('Connect', newConnect);
        return { message: 'Connect posted', httpCode: 200 };
    } catch (error: any) {
        return { message: error.message, httpCode: 500 };
    }
};

export const deleteAllConnect = async (classID: string) => {
    try {
        const classClass = await Class.findById(classID);
        if (classClass) {
            await Promise.all(
                classClass.connect.map(async (objID) => {
                    const result = await Connect.deleteOne({ _id: objID._id });
                })
            );
            classClass.connect = [];
            await classClass.save();
            return { message: 'Deleted all connect', httpCode: 200 };
        }
        return { message: 'Deleted none', httpCode: 200 };
    } catch (error: any) {
        return { message: error.message, httpCode: 500 };
    }
};
export const deleteConnect = async (classID: string, connectID: string) => {
    try {
        const classClass = await Class.findById(classID);
        if (classClass) {
            await Connect.deleteOne({ _id: connectID });
            classClass.connect = classClass.connect.filter((connect) => connect._id.toString() !== connectID);
            await classClass.save();
            return { message: 'Connect deleted', httpCode: 200 };
        }
        return { message: 'Deleted none', httpCode: 200 };
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
    buffer: Buffer;
}
