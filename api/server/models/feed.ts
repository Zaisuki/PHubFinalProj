// import mongoose, { Schema, InferSchemaType } from 'mongoose';

// // Login Schema
// const Schema = new Schema(
//     {
//         header: {
//             type: String,
//             required: [true, 'Please enter your header.'],
//             validate: {
//                 validator: function (input: string) {
//                     return input.length <= 15;
//                 },
//                 message: (props: any) => `${props.value} exceeds the maximum length of 15 characters.`,
//             },
//         },
//         announcement: {
//             type: String,
//             required: [true, 'Please enter the announcement.'],
//             unique: true,
//         },
//         subject: {
//             type: Schema.Types.ObjectId,
//             ref: 'Subject',
//             required: [true, 'Please enter the subject code.'],
//         },
//         professor: {
//             type: Schema.Types.ObjectId,
//             ref: 'Professor',
//             default: null,
//         },
//     },
//     { timestamps: true }
// );

// export const UserCredentials = mongoose.model('UserCredentials', userCredentialSchema);
