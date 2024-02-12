import mongoose, { Schema, InferSchemaType } from 'mongoose';

const messageSchema = new Schema(
    {
        inbox: {
            type: Schema.Types.ObjectId,
            ref: 'Inbox',
            default: null,
        },
        sender: {
            type: Schema.Types.ObjectId,
            ref: 'UserCredentials',
            default: null,
        },
        reply: {
            type: String,
            required: [true, 'Please enter your personal Email.'],
            unique: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Message = mongoose.model('Message', messageSchema);
