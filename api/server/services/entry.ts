import { Types } from 'mongoose';
import { HttpResponse } from '../models/http-response';
import { Student, UserCredentials } from '../models/user';
import * as bcrypt from 'bcrypt';

export const loginUsertoDatabase = async (userIdentifier: string, password: string, userIdentifierType: string) => {
    try {
        let result: any = await Student.findOne({ userIdentifier });
        if (result) {
            if (await bcrypt.compare(password, result.password)) {
                return new HttpResponse({ 'message': 'success' }, 200);
            }
            return new HttpResponse({ 'message': 'Wrong Password.' }, 200);
        }
        return new HttpResponse({ 'message': 'User not Found.' }, 200);
    } catch {
        return new HttpResponse({ 'message': 'Internal Server Error.' }, 500);
    }
};
export const registerUsertoDatabase = async (username: string, emailAddress: string, password: string, userType: string) => {
    try {
        const saltRounds = await bcrypt.genSalt();
        password = await bcrypt.hash(password, saltRounds);
        const result = new UserCredentials({
            username: username,
            emailAddress: emailAddress,
            passwordHash: password,
            userType: userType,
            userInformation: null,
        })
            .save()
            .then((userCredentialResult) => {
                const studentData = {
                    firstName: 'John',
                    middleName: 'M',
                    lastName: 'Doe',
                    course: 'Computer Science',
                    section: 'A',
                    birthday: new Date('1990-01-01'),
                    enrolled: true,
                    userCredentials: null as Types.ObjectId | null,
                };
                studentData.userCredentials = userCredentialResult._id;

                // Insert Student using the updated studentData
                const student = new Student(studentData);
                return student.save();
            })
            .then((studentResult) => {
                console.log('Student inserted successfully:', studentResult);
            })
            .catch((error) => {
                return false;
            });
        return true;
    } catch {
        return false;
    }
};

export const checkUsernameAvailability = async (username: string): Promise<boolean> => {
    // const [result] : Array<any> = await pool.query(`SELECT * FROM user_login_data WHERE Username = ?;`, username)
    // return result.length == 0
    return false;
};

export const checkEmailAvailability = async (emailAddress: string): Promise<boolean> => {
    // const [result] : Array<any> = await pool.query(`SELECT * FROM user_login_data WHERE emailAddress = ?;`, emailAddress)

    // return result.length == 0
    return false;
};

export const getUserIDByUsername = async (username: string): Promise<boolean> => {
    // const [result] : Array<any> = await pool.query(`SELECT UserID FROM user_login_data WHERE Username = ?;`, username)

    // return result[0]["UserID"]
    return false;
};

export const getUserIDByEmailAddress = async (email: string): Promise<boolean> => {
    // const [result] : Array<any> = await pool.query(`SELECT UserID FROM user_login_data WHERE EmailAddress = ?;`, email)

    // return result[0]["UserID"]
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
