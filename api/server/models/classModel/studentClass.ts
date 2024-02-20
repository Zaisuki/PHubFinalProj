import mongoose, { Schema, InferSchemaType } from "mongoose";

const studentCheckSubmissionSchema = new Schema(
  {
    student: {
      type: Schema.Types.ObjectId,
      ref: "Student",
      default: null,
    },
    attachment: [
      {
        type: Buffer,
      },
    ],
    score: {
      type: Number,
      default: 0,
    },
    class: {
      type: Schema.Types.ObjectId,
      ref: "Class",
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
      ref: "Student",
      default: null,
    },
    answer: {
      type: Schema.Types.ObjectId,
      ref: "ConnectChoices",
      default: null,
    },
    score: {
      type: Number,
      default: 0,
    },
    class: {
      type: Schema.Types.ObjectId,
      ref: "Class",
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
      ref: "Student",
      default: null,
    },
    class: {
      type: Schema.Types.ObjectId,
      ref: "Class",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);
export const StudentConnectSubmission = mongoose.model(
  "StudentConnectSubmission",
  studentConnectSubmissionSchema
);
export const StudentCheckSubmission = mongoose.model(
  "StudentCheckSubmission",
  studentCheckSubmissionSchema
);
export const StudentCoachView = mongoose.model(
  "StudentCoachView",
  studentCoachViewSchema
);

const studentSubjectsSchema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: "Student",
    default: null,
  },
  class: [
    {
      type: Schema.Types.ObjectId,
      ref: "Class",
      default: null,
    },
  ],
  studentCheckSubmission: [
    {
      type: Schema.Types.ObjectId,
      ref: "StudentCheckSubmission",
      default: null,
    },
  ],
  studentConnectSubmission: [
    {
      type: Schema.Types.ObjectId,
      ref: "StudentConnectSubmission",
      default: null,
    },
  ],
  studentCoachView: [
    {
      type: Schema.Types.ObjectId,
      ref: "StudentCoachView",
      default: null,
    },
  ],
});

export const StudentSubjects = mongoose.model(
  "StudentSubjects",
  studentSubjectsSchema
);
