// requirements
import mongoose, { Schema, InferSchemaType } from 'mongoose';

// Login Schema
const userCredentialSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Please enter your username.'],
        unique: true,
    },
    personalEmail: {
        type: String,
        required: [true, 'Please enter your personal Email.'],
        unique: true,
    },
    schoolEmail: {
        type: String,
        required: [true, 'Please enter your school email address.'],
        unique: true,
    },
    passwordHash: {
        type: String,
        required: [true, 'Please enter your password.'],
    },
    userType: {
        type: String,
        required: [true, 'Please enter user type.'],
    },
    userInformation: {
        type: Schema.Types.ObjectId,
        default: null,
    },
});

export const UserCredentials = mongoose.model('UserCredentials', userCredentialSchema);

// User schema
export const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter your first name'],
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: [true, 'Please enter your last name'],
    },
    personalEmail: {
        type: String,
        required: [true, 'Please enter your personal email'],
        unique: true,
    },
    schoolEmail: {
        type: String,
        required: [true, 'Please enter your school email'],
        unique: true,
    },
    personalNumber: {
        type: String,
        required: [true, 'Please enter your personal number'],
        unique: true,
    },
    schoolNumber: {
        type: String,
        unique: true,
    },
    address: {
        type: String,
        required: [true, 'Please enter your address'],
    },
    birthday: {
        type: Date,
        required: [true, 'Please enter your Birthday'],
    },
});

//Student schema
const studentSchema = new Schema(
    {
        // ...userSchema,
        studentID: {
            type: String,
            required: [true, 'Please enter your student id number'],
            // unique: true,
        },
        course: {
            type: String,
            required: [true, 'Please enter your course'],
        },
        section: {
            type: String,
            required: [true, 'Please enter your section'],
        },
        enrolled: {
            type: Boolean,
            required: [true, 'Please enter your enrolled status'],
        },
        userCredentials: {
            type: Schema.Types.ObjectId,
            ref: 'UserCredentials',
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

//Professor schema
const professorSchema = new Schema(
    {
        // ...userSchema,
        studentID: {
            type: String,
        },
        course: {
            type: String,
        },
        section: {
            type: String,
        },
        enrolled: {
            type: Boolean,
            required: true,
        },
        userCredentials: {
            type: Schema.Types.ObjectId,
            ref: 'UserCredentials',
            default: null,
        },
    },
    {
        timestamps: true,
    }
);
export const Student = mongoose.model('Student', studentSchema);
export const Professor = mongoose.model('Professor', professorSchema);
