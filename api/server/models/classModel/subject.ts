import mongoose, { Schema, InferSchemaType } from 'mongoose';

const subjectSchema = new Schema({
    subjectCode: {
        type: String,
        required: [true, 'Please enter your username.'],
        unique: true,
    },
    subjectDescription: {
        type: String,
        required: [true, 'Please enter your personal Email.'],
        unique: true,
    },
});

export const Subject = mongoose.model('Subject', subjectSchema);
