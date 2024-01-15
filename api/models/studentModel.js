// requirements
const mongoose = require('mongoose')

//Student schema
const studentSchema = mongoose.Schema (
    {
        name: {
            type: String,
            required: [true, "Please enter your name"]
        },
        password: {
            type: String,
            required: [true, "Please enter your password"]
        }

    },
    {
    timestamps: true
    }
)

const student = mongoose.model('Student', studentSchema);

module.exports = student;