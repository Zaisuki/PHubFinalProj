import mongoose, { Schema, InferSchemaType } from 'mongoose';

const attachmentSchema = new Schema({
    url: { type: String },
    type: { type: String },
});

export const Attachement = mongoose.model('Attachement', attachmentSchema);

const checkSchema = new Schema(
    {
        class: {
            type: Schema.Types.ObjectId,
            ref: 'Class',
            default: null,
        },
        typeOfCheck: {
            type: String,
            // TODO: remove this
            // required: [true, 'Please enter the type.'],
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
                type: Schema.Types.ObjectId,
                ref: 'Attachement',
                default: null,
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
        highestPossibleScore: {
            type: Number,
            default: 0,
        },
        lateSubmission: {
            type: Boolean,
            default: false,
        },
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
            ref: 'Class',
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
                type: Schema.Types.ObjectId,
                ref: 'Attachement',
                default: null,
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
    respondents: {
        type: Number,
        default: 0,
    },
    students: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Student',
            default: null,
        },
    ],
});

export const ConnectChoices = mongoose.model('ConnectChoices', connectChoicesSchema);

const connectSchema = new Schema(
    {
        class: {
            type: Schema.Types.ObjectId,
            ref: 'Class',
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
        highestPossibleScore: {
            type: Number,
            default: 0,
        },
        lateSubmission: {
            type: Boolean,
            default: false,
        },
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
    totalStudents: {
        type: Number,
        required: [true, 'Please enter total students.'],
        default: 0,
    },
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
    announcement: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Announcement',
            default: null,
        },
    ],
});

export const Class = mongoose.model('Class', classSchema);
