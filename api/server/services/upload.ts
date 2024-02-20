import multer from 'multer'
import path from 'path'
import express, { Express, Request, Response } from 'express';


const storage = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, cb) => {
        cb(null, './Images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
export const upload = multer({storage: storage})
