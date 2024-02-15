import express, { Express, Request, Response } from 'express';
import { checkEmailAvailability, checkUsernameAvailability, getUserIDandType, loginUsertoDatabase, registerUsertoDatabase } from '../services/entry';
import { HttpResponse } from '../models/http-response';

import jwt from 'jsonwebtoken';

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
        let userID, userType;
        if (checkerForInput.message['message'] === 'success') {
            const data = await loginUsertoDatabase(userIdentifier, password);
            let loginUpdate = data.message;
            if (loginUpdate['message'] === 'success') {
                const accessTokenSecret: any = process.env.ACCESS_TOKEN_SECRET;
                const userData = await getUserIDandType(userIdentifier);
                if (userData) {
                    [userID, userType] = userData;
                    const user = { userID, userName: userIdentifier, userType };
                    const accessToken = jwt.sign(user, accessTokenSecret);

                    loginUpdate = { ...loginUpdate, accessToken: accessToken };
                } else {
                    data.code = 400;
                    loginUpdate = { message: 'User not found.' };
                }
            }

            console.log(loginUpdate);
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
