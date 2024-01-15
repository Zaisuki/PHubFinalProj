// requirements
import mongoose, { Schema, InferSchemaType } from 'mongoose';

//Student schema
const studentSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter your name'],
        },
        password: {
            type: String,
            required: [true, 'Please enter your password'],
        },
    },
    {
        timestamps: true,
    }
);
type User = InferSchemaType<typeof studentSchema>;

const Student = mongoose.model('Student', studentSchema);

export default Student;
