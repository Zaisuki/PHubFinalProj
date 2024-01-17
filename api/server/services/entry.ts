import { ObjectId, Types } from 'mongoose';
import { HttpResponse } from '../models/http-response';
import { Student, UserCredentials } from '../models/user';
import * as bcrypt from 'bcrypt';

export const loginUsertoDatabase = async (userIdentifier: string, password: string, userIdentifierType: string) => {
    try {
        let result = await UserCredentials.findOne({ $or: [{ username: { $regex: new RegExp(userIdentifier, 'i') } }, { email: { $regex: new RegExp(userIdentifier, 'i') } }] });
        if (result) {
            if (await bcrypt.compare(password, result.passwordHash)) {
                return new HttpResponse({ 'message': 'success' }, 200);
            }
            return new HttpResponse({ 'message': 'Wrong Password.' }, 200);
        }
        return new HttpResponse({ 'message': 'User not Found.' }, 200);
    } catch {
        return new HttpResponse({ 'message': 'Internal Server Error.' }, 500);
    }
};
export const registerUsertoDatabase = async (firstName: string, middleName: string, lastName: string, course: string, section: string, birthday: string, enrolled: boolean, username: string, emailAddress: string, password: string, userType: string) => {
    try {
        const saltRounds = await bcrypt.genSalt();
        password = await bcrypt.hash(password, saltRounds);

        const userCredentialResult = await new UserCredentials({
            username,
            emailAddress,
            passwordHash: password,
            userType,
            userInformation: null,
        }).save();

        const studentData = {
            firstName,
            middleName,
            lastName,
            course,
            section,
            birthday: new Date(birthday),
            enrolled,
            userCredentials: userCredentialResult._id,
        };

        const student = new Student(studentData);
        userCredentialResult.userInformation = student._id;

        await student.save();
        console.log('Saved');
        return true;
    } catch (error) {
        console.log('Error:', error);
        return false;
    }
};
export const checkUsernameAvailability = async (username: string): Promise<boolean> => {
    try {
        const result: boolean = (await Student.findOne({ username })) === null;
        return result;
    } catch (error) {
        return false;
    }
};

export const checkEmailAvailability = async (emailAddress: string): Promise<boolean> => {
    try {
        const result: boolean = (await Student.findOne({ emailAddress })) === null;
        return result;
    } catch (error) {
        return false;
    }
};

export const getUserID = async (userIdentifier: string): Promise<ObjectId | boolean> => {
    const result = await UserCredentials.findOne({ $or: [{ username: { $regex: new RegExp(userIdentifier, 'i') } }, { email: { $regex: new RegExp(userIdentifier, 'i') } }] });
    if (result) {
        const userID: unknown = result._id;
        return userID as ObjectId;
    }
    return false;
};

// export const addRefreshToken = async (refreshToken : string) => {
//     try{
//         const [result] : Array<any> = await pool.query(`INSERT INTO refresh_token (token) VALUES (?)`, refreshToken)
//         return true
//     } catch {
//         return false
//     }

// }
// export const checkRefreshToken = async (refreshToken : string) => {
//     const [result] : Array<any> = await pool.query(`SELECT * FROM refresh_token WHERE token = ?;`, refreshToken)

//     return result.length == 0
// }
// export const deleteRefreshToken = async (refreshToken : string) => {
//     // TODO: Delete token from db
//     try{
//         const [result] : Array<any> = await pool.query(`INSERT INTO refresh_token (token) VALUES (?)`, refreshToken)
//         return true
//     } catch {
//         return false
//     }
// }
