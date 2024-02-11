import mongoose, { Schema, InferSchemaType } from 'mongoose';

const announcementSchema = new Schema(
    {
        header: {
            type: String,
            required: [true, 'Please enter your header.'],
            validate: {
                validator: function (input: string) {
                    return input.length <= 15;
                },
                message: (props: any) => `${props.value} exceeds the maximum length of 15 characters.`,
            },
        },
        announcement: {
            type: String,
            required: [true, 'Please enter the announcement.'],
            unique: true,
        },
        professor: {
            type: Schema.Types.ObjectId,
            ref: 'Professor',
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

export const Announcement = mongoose.model('Announcement', announcementSchema);
