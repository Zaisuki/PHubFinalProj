import express, { Express, Request, Response } from 'express';
import { Professor } from '../models/user';
import { Announcement } from '../models/classModel/announcement';
import { Class } from '../models/classModel/class';
import { ProfessorHandledClass } from '../models/classModel/professorClass';

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

export const deleteAnnouncement = async (req: Request, res: Response) => {
    try {
        const announcement = await Announcement.deleteMany({});

        res.status(200).json(announcement);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
