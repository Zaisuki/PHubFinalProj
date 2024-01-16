// requirements
import mongoose, { Schema, InferSchemaType } from 'mongoose';

// Login Schema
const userCredentialSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, 'Please enter your username.'],
        },
        emailAddress: {
            type: String,
            required: [true, 'Please enter your email address.'],
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
            required: true,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

//Student schema
const studentSchema = new Schema({
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
    course: {
        type: String,
    },
    section: {
        type: String,
    },
    birthday: {
        type: Date,
        required: [true, 'Please enter your Birthday'],
    },
    enrolled: {
        type: Boolean,
        required: true,
    },
    userCredentials: {
        type: Schema.Types.ObjectId,
        ref: 'userCredentialSchema',
        required: true,
        default: null,
    },
});

export const UserCredentials = mongoose.model('UserCredentials', userCredentialSchema);
export const Student = mongoose.model('Student', studentSchema);
