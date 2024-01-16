import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

import entryRoutes from './routes/entry';
import userRoutes from './routes/user';

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

app.use(express.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use('/entry/', entryRoutes);
app.use('/user/', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello from your Node.js Express server!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
