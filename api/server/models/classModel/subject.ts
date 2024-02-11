import mongoose, { Schema, InferSchemaType } from 'mongoose';

const subjectSchema = new Schema({
    subjectCode: {
        type: String,
        required: [true, 'Please enter the subject code.'],
        unique: true,
    },
    subjectDescription: {
        type: String,
        required: [true, 'Please enter the subject description.'],
        unique: true,
    },
});

export const Subject = mongoose.model('Subject', subjectSchema);
