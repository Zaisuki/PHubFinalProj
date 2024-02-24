import mongoose, { Schema, InferSchemaType } from 'mongoose';

const notificationHolderSchema = new Schema(
    {
        header: {
            type: String,
            // required: [true, 'Please enter your header.'],
            default: null,
        },
        description: {
            type: String,
            // required: [true, 'Please enter the description.'],
            default: null,
        },
        link: {
            type: String,
            // required: [true, 'Please enter the link.'],
            default: null,
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

export const NotificationHolder = mongoose.model('NotificationHolder', notificationHolderSchema);
