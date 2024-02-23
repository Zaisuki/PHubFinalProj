import multer from 'multer';
import path from 'path';
import express, { Express, Request, Response } from 'express';

const storage = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, cb) => {
        cb(null, './upload');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const fileFilter = (req: Request, file: Express.Multer.File, cb: any) => {
    const allowedFileTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf'];

    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only images (jpeg, jpg, png), documents (doc, docx, pdf) are allowed.'), false);
    }
};
export const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
});
