import express, { Express, Request, Response } from 'express';
import { checkEmailAvailability, checkUsernameAvailability, getUserIDandType, loginUsertoDatabase, registerUsertoDatabase } from '../services/entry';
import { HttpResponse } from '../models/http-response';

import jwt from 'jsonwebtoken';
import {StreamChat} from 'stream-chat';


// Check Current User
export const checkCurrentUser = async (req: Request, res: Response) => {
    try {
        res.status(200).json({ 'message': 'valid' });
    } catch {
        res.status(500).json({ 'message': 'Internal Server Error' });
        return;
    }
};

// Logins
export const loginUserController = async (req: Request, res: Response) => {
    try {
        const userIdentifier: string = req.body.userIdentifier;
        const password: string = req.body.password;
        const userIdentifierType = await checkInputType(userIdentifier);
        const checkerForInput = await checkEveryInputForLogin(userIdentifier, password, userIdentifierType);
        let userID, userType, userFullName, username;
        if (checkerForInput.message['message'] === 'success') {
            const data = await loginUsertoDatabase(userIdentifier, password);
            let loginUpdate = data.message;
            if (loginUpdate['message'] === 'success') {
                const accessTokenSecret: any = process.env.ACCESS_TOKEN_SECRET;
                const userData = await getUserIDandType(userIdentifier);
                if (userData) {
                    [userID, userType, userFullName, username] = userData;
                    const user = { userID, userName: userIdentifier, userType };
                    const accessToken = jwt.sign(user, accessTokenSecret);
                    const serverClient = StreamChat.getInstance('2sgdxg7zqddx','c4vvskc6wjyduppj266hvhwfn7rqh7ctwhshzgr95n4qvw7q7mjkmsmzyd6826d4');
                    const chatToken = serverClient.createToken(username);
                    const userTypeHash = userType === 'admin' ? '3aDfR9oPq2sW5tZyX8vBu1mNc7LkIj6Hg4TfGhJdSe4RdFgBhNjVkLo0iUyHnJm' : userType === 'student' ? 'E2jF8sG5dH9tY3kL4zX7pQ6wR1oV0mCqB6nI8bT7yU5iA3gD2fS4hJ9uMlKoP1e' : 'r9LsT6kQ3jWfZ1pY4xN7hM2cV8gB5dI0eJ4uF2oD3iG5vX6mC1aS7tR9yU3lK8w';
                    loginUpdate = { ...loginUpdate, accessToken: accessToken, userType: userTypeHash, chatToken,  userFullName, username};
                } else {
                    data.code = 400;
                    loginUpdate = { message: 'User not found.' };
                }
            }

            res.status(data.code).json(loginUpdate);
            return;
        }
        res.status(checkerForInput.code).json(checkerForInput.message);
        return;
    } catch {
        res.status(500).json({ 'message': 'Internal Server Error' });
        return;
    }
};

const checkInputType = async (userIdentifier: string) => {
    return userIdentifier.includes('@') ? 'EmailAddress' : 'Username';
};

const checkEveryInputForLogin = async (userIdentifier: string, password: string, userIdentifierType: string) => {
    if (userIdentifierType === 'Username') {
        if (!checkUsernameValidity(userIdentifier)) {
            return new HttpResponse({ 'message': 'Invalid Username' }, 200);
        }
    } else {
        if (!checkEmailValidity(userIdentifier)) {
            return new HttpResponse({ 'message': 'Invalid Email.' }, 200);
        }
    }
    if (!checkPasswordValidity(password)) {
        return new HttpResponse({ 'message': 'Invalid Password.' }, 200);
    }
    return new HttpResponse({ 'message': 'success' }, 200);
};
// Registrations
export const registerUserController = async (req: Request, res: Response) => {
    const { firstName, middleName, lastName, personalEmail, schoolEmail, personalNumber, schoolNumber, address, birthday, studentID, course, section, enrolled, username, password, userType, active, department } = req.body;
    const checkerForInput = await checkEveryInputForSignup(username, personalEmail, schoolEmail, password);
    if (checkerForInput.message['message'] === 'success') {
        const data = await registerUsertoDatabase(firstName, middleName, lastName, username, personalEmail, schoolEmail, personalNumber, schoolNumber, address, birthday, password, userType, enrolled, course, section, studentID, department, active);
        res.status(data.httpCode).json({ message: data.message });
        return;
    }

    res.status(checkerForInput.code).json(checkerForInput.message);
    return;
};

const checkEveryInputForSignup = async (username: string, personalEmail: string, schoolEmail: string, password: string): Promise<HttpResponse> => {
    if (!checkUsernameValidity(username)) {
        return new HttpResponse({ 'message': 'Username must only contains letters and numbers.' }, 200);
    }
    if (!checkEmailValidity(personalEmail)) {
        return new HttpResponse({ 'message': 'Invalid personal email.' }, 200);
    }
    if (!checkEmailValidity(schoolEmail)) {
        return new HttpResponse({ 'message': 'Invalid school email.' }, 200);
    }
    if (!checkPasswordValidity(password)) {
        return new HttpResponse({ 'message': 'Password must have at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.' }, 200);
    }
    if (!(await checkUsernameAvailability(username))) {
        return new HttpResponse({ 'message': 'This username is being used.' }, 200);
    }
    if (!(await checkEmailAvailability(personalEmail))) {
        return new HttpResponse({ 'message': 'This personal email address is being used.' }, 200);
    }
    if (!(await checkEmailAvailability(schoolEmail))) {
        return new HttpResponse({ 'message': 'This school email address is being used.' }, 200);
    }
    return new HttpResponse({ 'message': 'success' }, 200);
};

const checkUsernameValidity = (username: string) => {
    // TODO: max 25 characters
    const regex = /^[a-zA-Z0-9]+$/;

    return regex.test(username);
};

const checkEmailValidity = (emailAddress: string) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return regex.test(emailAddress);
};

const checkPasswordValidity = (password: string) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s)./;
    // least one lowercase letter, one uppercase letter, one numeric digit, and one special character
    return regex.test(password);
};
