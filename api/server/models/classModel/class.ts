import mongoose, { Schema, InferSchemaType } from 'mongoose';

const checkSchema = new Schema(
    {
        class: {
            type: Schema.Types.ObjectId,
            ref: 'ConnectChoices',
            default: null,
        },
        postTitle: {
            type: String,
            required: [true, 'Please enter the title.'],
        },
        postDescription: {
            type: String,
        },
        dueDate: {
            type: Date,
        },
        attachment: [
            {
                type: Buffer,
            },
        ],
        respondents: {
            type: Number,
            default: 0,
        },
        studentSubmission: [
            {
                type: Schema.Types.ObjectId,
                ref: 'StudentCheckSubmission',
                default: null,
            },
        ],
    },
    {
        timestamps: true,
    }
);

export const Check = mongoose.model('Check', checkSchema);

const coachSchema = new Schema(
    {
        class: {
            type: Schema.Types.ObjectId,
            ref: 'ConnectChoices',
            default: null,
        },
        postTitle: {
            type: String,
            required: [true, 'Please enter the title.'],
        },
        postDescription: {
            type: String,
        },
        attachment: [
            {
                type: Buffer,
            },
        ],
        view: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

export const Coach = mongoose.model('Coach', coachSchema);

const connectChoicesSchema = new Schema({
    choice: {
        type: String,
        required: [true, 'Please enter the choice.'],
    },
});

export const ConnectChoices = mongoose.model('ConnectChoices', connectChoicesSchema);

const connectSchema = new Schema(
    {
        class: {
            type: Schema.Types.ObjectId,
            ref: 'ConnectChoices',
            default: null,
        },
        postTitle: {
            type: String,
            required: [true, 'Please enter the title.'],
        },
        postDescription: {
            type: String,
        },
        dueDate: {
            type: Date,
        },
        respondents: {
            type: Number,
            default: 0,
        },
        postChoices: [
            {
                type: Schema.Types.ObjectId,
                ref: 'ConnectChoices',
                default: null,
            },
        ],
        studentSubmission: [
            {
                type: Schema.Types.ObjectId,
                ref: 'StudentConnectSubmission',
                default: null,
            },
        ],
    },
    {
        timestamps: true,
    }
);

export const Connect = mongoose.model('Connect', connectSchema);

const classSchema = new Schema({
    students: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Student',
            default: null,
        },
    ],
    professor: {
        type: Schema.Types.ObjectId,
        ref: 'Professor',
        required: [true, 'Please enter the professor.'],
        default: null,
    },
    block: {
        type: String,
        required: [true, 'Please enter the block.'],
    },
    subject: {
        type: Schema.Types.ObjectId,
        ref: 'Subject',
        required: [true, 'Please enter the subject.'],
    },
    connect: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Connect',
            default: null,
        },
    ],
    check: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Check',
            default: null,
        },
    ],
    coach: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Coach',
            default: null,
        },
    ],
});

export const Class = mongoose.model('Class', classSchema);
