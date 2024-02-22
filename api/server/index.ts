import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import entryRoutes from './routes/entry';
import userRoutes from './routes/user';
import registrationRoutes from './routes/registration';
import professorRoutes from './routes/professor';
import studentRoutes from './routes/student';
import feedRoutes from './routes/feed';
import { UserCredentials } from './models/user';

const app = express();
const port = 3000;

const MONGODB_CONNECTION: any = process.env.MONGODB_CONNECTION;

mongoose
    .connect(MONGODB_CONNECTION)
    .then(() => {
        console.log('connected to MongoDB');
    })
    .catch((error) => {
        console.log(error);
    });

app.use(
    cors({
        origin: ["http://localhost:5173"],
        credentials: true,
    })
);
app.use(express.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
// TODO: delete before pushing
app.put('/update', async (req, res) => {
    const userID = req.body.userID;
    const change = req.body.change;

    const result = await UserCredentials.updateOne({ _id: userID }, { $unset: { userInformation: 1 } });
    console.log(result);
    return res.status(200).json(result);
});

app.use('/entry/', entryRoutes);
app.use('/user/', userRoutes);
app.use('/feed/', feedRoutes);
app.use('/registration/', registrationRoutes);
app.use('/professor/', professorRoutes);
app.use('/student/', studentRoutes);

app.get('/', (req, res) => {
    res.send('Hello from your Node.js Express server!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
