import mongoose, { Schema, InferSchemaType } from 'mongoose';

const professorHandledClassSchema = new Schema({
    professor: {
        type: Schema.Types.ObjectId,
        ref: 'Professor',
        default: null,
    },
    class: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Class',
            default: null,
        },
    ],
    announcement: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Announcement',
            default: null,
        },
    ],
});

export const ProfessorHandledClass = mongoose.model('ProfessorHandledClass', professorHandledClassSchema);
