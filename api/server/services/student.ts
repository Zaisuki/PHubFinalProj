import express, { Express, Request, Response } from 'express';
import { Student } from '../models/user';
import { User } from '../middleware/authentication';
import { populate } from 'dotenv';

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
