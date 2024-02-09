import mongoose, { Schema, InferSchemaType } from 'mongoose';

const announcementSchema = new Schema(
    {
        professor: {
            type: Schema.Types.ObjectId,
            ref: 'Professor',
            default: null,
        },
        announcement: {
            type: String,
            required: [true, 'Please enter the announcement.'],
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

export const Announcement = mongoose.model('Announcement', announcementSchema);
