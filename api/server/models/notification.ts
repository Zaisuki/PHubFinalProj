import mongoose, { Schema, InferSchemaType } from 'mongoose';

const notificationSchema = new Schema(
    {
        header: {
            type: String,
            required: [true, 'Please enter your header.'],
        },
        content: {
            type: String,
            required: [true, 'Please enter the content.'],
            unique: true,
        },
        link: {
            type: String,
            required: [true, 'Please enter the link.'],
            unique: true,
        },
        class: {
            type: Schema.Types.ObjectId,
            ref: 'Class',
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

export const Notification = mongoose.model('Notification', notificationSchema);
