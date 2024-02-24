import express, { Express, Request, Response } from 'express';
import { Professor } from '../models/user';
import { Announcement } from '../models/classModel/announcement';
import { Check, Class, Coach, Connect, ConnectChoices } from '../models/classModel/class';
import { ProfessorHandledClass } from '../models/classModel/professorClass';
import { addTaskNotification } from './notification';

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

export const addCheck = async (classID: string, postTitle: string, postDescription: string, dueDate: Date, files: UploadedFile[] | undefined) => {
    try {
        let newCheck = await new Check({
            postTitle,
            postDescription,
            dueDate,
        }).save();
        if (files) {
            for (const file of files) {
                const imagePath = file.path;
                newCheck.attachment.push(imagePath);
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
        let newCoach = await new Check({
            postTitle,
            postDescription,
        }).save();
        if (files) {
            for (const file of files) {
                const imagePath = file.path;
                newCoach.attachment.push(imagePath);
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
export const addConnect = async (classID: string, postTitle: string, postDescription: string, dueDate: Date, attachment: string[], choices: string[]) => {
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
            choices.map((choice) => {
                const connectChoice = new ConnectChoices({ choice });
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
}
