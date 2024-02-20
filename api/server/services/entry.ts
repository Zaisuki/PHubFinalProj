import { ObjectId, Types } from 'mongoose';
import { HttpResponse } from '../models/http-response';
import { UserCredentials, Student, Professor, Admin } from '../models/user';
import * as bcrypt from 'bcrypt';
import { ProfessorHandledClass } from '../models/classModel/professorClass';
import { StudentSubjects } from '../models/classModel/studentClass';

export const loginUsertoDatabase = async (userIdentifier: string, password: string) => {
    try {
        let result = await UserCredentials.findOne({
            $or: [{ username: { $regex: new RegExp(`^${userIdentifier}$`, 'i') } }, { personalEmail: { $regex: new RegExp(`^${userIdentifier}$`, 'i') } }, { schoolEmail: { $regex: new RegExp(`^${userIdentifier}$`, 'i') } }],
        });
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

export const registerUsertoDatabase = async (firstName: string, middleName: string, lastName: string, username: string, personalEmail: string, schoolEmail: string, personalNumber: string, schoolNumber: string, address: string, birthday: string, password: string, userType: string, enrolled: boolean, course: string, section: string, studentID: string, department: string, active: boolean) => {
    try {
        const saltRounds = await bcrypt.genSalt();
        password = await bcrypt.hash(password, saltRounds);
        const userCredentialResult = await new UserCredentials({
            username,
            personalEmail,
            schoolEmail,
            passwordHash: password,
            userType,
            userInformation: null,
        }).save();
        let user, userTypeID = 0;
        if (userType.toLowerCase() === 'student') {
            userTypeID = 0;
            const studentSubjects = await new StudentSubjects({}).save();
            user = new Student({
                firstName,
                middleName,
                lastName,
                personalNumber,
                schoolNumber,
                address,
                birthday,
                studentID,
                course,
                section,
                enrolled,
                userCredentials: userCredentialResult._id,
                studentSubjects: studentSubjects._id,
            });
            studentSubjects.student = user._id;
            await studentSubjects.save();
        } else if (userType.toLowerCase() === 'professor') {
            userTypeID = 1;
            const professorClass = await new ProfessorHandledClass({}).save();
            user = new Professor({
                firstName,
                middleName,
                lastName,
                personalNumber,
                schoolNumber,
                address,
                birthday,
                department,
                active,
                userCredentials: userCredentialResult._id,
                professorHandledClass: professorClass._id,
            });
            professorClass.professor = user._id;
            await professorClass.save();
        } else if (userType.toLowerCase() === 'admin') {
            userTypeID = 2;
            user = new Admin({
                firstName,
                middleName,
                lastName,
                personalNumber,
                schoolNumber,
                address,
                birthday,
                active,
                department,
                userCredentials: userCredentialResult._id,
            });
        }
        if (user) {
            userCredentialResult.userInformation[userTypeID] = user._id;
            await userCredentialResult.save();
            await user.save();
            return { message: 'User saved to the database', httpCode: 200 };
        } else {
            await UserCredentials.deleteOne({ _id: userCredentialResult._id });
            return { message: 'Error on saving the user', httpCode: 500 };
        }
    } catch (error) {
        return { message: error, httpCode: 500 };
    }
};
export const checkUsernameAvailability = async (username: string): Promise<boolean> => {
    try {
        const result = (await UserCredentials.findOne({ username: { $regex: new RegExp(`^${username}$`, 'i') } })) === null;

        return result;
    } catch (error) {
        return false;
    }
};

export const checkEmailAvailability = async (emailAddress: string): Promise<boolean> => {
    try {
        const result: boolean = (await UserCredentials.findOne({ emailAddress: { $regex: new RegExp(`^${emailAddress}$`, 'i') } })) === null;
        return result;
    } catch (error) {
        return false;
    }
};

export const getUserIDandType = async (userIdentifier: string): Promise<String[] | null> => {
    const result = await UserCredentials.findOne({ $or: [{ username: { $regex: new RegExp(userIdentifier, 'i') } }, { personalEmail: { $regex: new RegExp(userIdentifier, 'i') } }, { schoolEmail: { $regex: new RegExp(userIdentifier, 'i') } }] });
    if (result) {
        const userID: unknown = result.userInformation;
        const userType: unknown = result.userType;
        return [userID as String, userType as String];
    }
    return null;
};

// export const getUserIDByUsername = async (username: String): Promise<boolean> => {
// const [result] : Array<any> = await pool.query(`SELECT UserID FROM user_login_data WHERE Username = ?;`, username)

// return result[0]["UserID"]
//     return false;
// };

// export const getUserIDByEmailAddress = async (email: String): Promise<boolean> => {
// const [result] : Array<any> = await pool.query(`SELECT UserID FROM user_login_data WHERE EmailAddress = ?;`, email)

// return result[0]["UserID"]
//     return false;
// };
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
