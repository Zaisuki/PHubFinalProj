import express, { Express, Request, Response } from 'express';
import { HttpResponse } from '../models/http-response';
import { Professor } from '../models/user';

export const findAllProfessor = async (req: Request, res: Response) => {
    try {
        const professors = await Professor.find({});
        res.status(200).json(professors);
    } catch (error) {
        res.status(500).json('No Professors found');
    }
};

export const findProfessor = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const professor = await Professor.findById(id);
        res.status(200).json(professor);
    } catch (error) {
        res.status(500).json("Professor can't be found");
    }
};

export const updateProfessor = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const professor = await Professor.findByIdAndUpdate(id, req.body);
        // cannot find any Professor in database
        if (!professor) {
            res.status(404).json({ message: `Can't find any product with ID ${id}` });
        }
        // to see the latest update in postman
        const updatedProfessor = await Professor.findById(id);
        res.status(200).json(updatedProfessor);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteProfessor = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const professor = await Professor.findByIdAndDelete(id, req.body);
        // cannot find any Professor in database
        if (!Professor) {
            res.status(404).json({ message: `Can't find any product with ID ${id}` });
        }
        // to see the latest update in postman
        const updatedProfessor = await Professor.findById(id);
        res.status(200).json(updatedProfessor);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const addProfessor = async (req: Request, res: Response) => {
    try {
        const professor = await Professor.create(req.body);
        res.status(200).json(Professor);
    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};
