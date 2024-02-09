import mongoose, { Schema, InferSchemaType } from 'mongoose';

const inboxSchema = new Schema({
    userCredentials1: {
        type: Schema.Types.ObjectId,
        ref: 'UserCredentials',
        default: null,
    },
    userCredentials2: {
        type: Schema.Types.ObjectId,
        ref: 'UserCredentials',
        default: null,
    },
    chatRoom: {
        type: String,
        required: [true, 'Please enter your personal Email.'],
        unique: true,
    },
    messages: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Message',
            default: null,
        },
    ],
});

export const Inbox = mongoose.model('Inbox', inboxSchema);
