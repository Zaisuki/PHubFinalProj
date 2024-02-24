import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import schedule from 'node-schedule';
import dotenv from 'dotenv';
dotenv.config();

import entryRoutes from './routes/entry';
import userRoutes from './routes/user';
import registrationRoutes from './routes/registration';
import professorRoutes from './routes/professor';
import studentRoutes from './routes/student';
import feedRoutes from './routes/feed';
import { addReminderNotification } from './services/notification';

const app = express();
const port = 3000;

const MONGODB_CONNECTION: any = process.env.MONGODB_CONNECTION;

mongoose
    .connect(MONGODB_CONNECTION)
    .then(() => {
        console.log('connected to MongoDB');
    })
    .catch((error) => {
        console.log('Internal Server Error');
    });

app.use(
    cors({
        origin: ['http://127.0.0.1:5173'],
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
// app.put('/update', async (req, res) => {
//     const result = await Notification.deleteMany();
//     return res.status(200).json(result);
// });

app.use('/entry/', entryRoutes);
app.use('/user/', userRoutes);
app.use('/feed/', feedRoutes);
app.use('/registration/', registrationRoutes);
app.use('/professor/', professorRoutes);
app.use('/student/', studentRoutes);

schedule.scheduleJob('*/1 * * * *', () => {
    addReminderNotification();
});

app.get('/', (req, res) => {
    res.send('Hello from your Node.js Express server!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
