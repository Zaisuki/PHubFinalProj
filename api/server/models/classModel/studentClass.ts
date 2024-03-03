import mongoose, { Schema, InferSchemaType } from 'mongoose';

const studentCheckSubmissionSchema = new Schema(
    {
        student: {
            type: Schema.Types.ObjectId,
            ref: 'Student',
            default: null,
        },
        attachment: [
            {
                type: String,
            },
        ],
        score: {
            type: Number,
            default: null,
        },
        task: {
            type: Schema.Types.ObjectId,
            ref: 'Check',
            default: null,
        },
    },
    {
        timestamps: true,
    }
);
const studentConnectSubmissionSchema = new Schema(
    {
        student: {
            type: Schema.Types.ObjectId,
            ref: 'Student',
            default: null,
        },
        answer: {
            type: Schema.Types.ObjectId,
            ref: 'ConnectChoices',
            default: null,
        },
        score: {
            type: Number,
            default: null,
        },
        task: {
            type: Schema.Types.ObjectId,
            ref: 'Connect',
            default: null,
        },
    },
    {
        timestamps: true,
    }
);
const studentCoachViewSchema = new Schema(
    {
        student: {
            type: Schema.Types.ObjectId,
            ref: 'Student',
            default: null,
        },
        task: {
            type: Schema.Types.ObjectId,
            ref: 'Coach',
            default: null,
        },
    },
    {
        timestamps: true,
    }
);
export const StudentConnectSubmission = mongoose.model('StudentConnectSubmission', studentConnectSubmissionSchema);
export const StudentCheckSubmission = mongoose.model('StudentCheckSubmission', studentCheckSubmissionSchema);
export const StudentCoachView = mongoose.model('StudentCoachView', studentCoachViewSchema);

const studentSubjectsSchema = new Schema(
    {
        student: {
            type: Schema.Types.ObjectId,
            ref: 'Student',
            default: null,
        },
        schoolYear: {
            type: String,
            required: [true, 'Please enter the school year.'],
            default: '',
        },
        class: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Class',
                default: null,
            },
        ],
        studentCheckSubmission: [
            {
                type: Schema.Types.ObjectId,
                ref: 'StudentCheckSubmission',
                default: null,
            },
        ],
        studentConnectSubmission: [
            {
                type: Schema.Types.ObjectId,
                ref: 'StudentConnectSubmission',
                default: null,
            },
        ],
        studentCoachView: [
            {
                type: Schema.Types.ObjectId,
                ref: 'StudentCoachView',
                default: null,
            },
        ],
    },
    {
        timestamps: true,
    }
);

export const StudentSubjects = mongoose.model('StudentSubjects', studentSubjectsSchema);
