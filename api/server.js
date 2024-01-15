// requirements
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Student = require('./models/studentModel')

// To understand different forms
app.use(express.json())
app.use(express.urlencoded({extended: false}));

// routes
app.get('/', (req, res) => {
    res.send("Wassup nodabells")
})

// find and get data
app.get('/student', async(req, res) => {
    try {
        const students = await Student.find({});
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json(students);
    }
})

app.get('/student/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const student = await Student.findById(id);
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json(student);
    }
})

// update data for student

app.put('/student/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const student = await Student.findByIdAndUpdate(id, req.body);
        // cannot find any student in database
        if(!student) {
            res.status(404).json({message: "cannot find any product with ID ${id}"})
        }
        // to see the latest update in postman
        const updatedStudent = await Student.findById(id);
        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// delete data for student

app.put('/student/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const student = await Student.findByIdAndDelete(id, req.body);
        // cannot find any student in database
        if(!student) {
            res.status(404).json({message: "cannot find any product with ID ${id}"})
        }
        // to see the latest update in postman
        const updatedStudent = await Student.findById(id);
        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.listen(3000, ()=> {
    console.log("Node API is running on port 3000")
})

app.post('/student', async(req, res) => {
   try{
    const student = await Student.create(req.body)
    res.status(200).json(student);

   } catch(error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
    
   }
})


// Database Connection
mongoose.connect('mongodb+srv://PHubMember:wassupphub@phubapi.bvd7f2w.mongodb.net/PHub-API?retryWrites=true&w=majority')
.then(() => {
    console.log("connected to MongoDB")
}) .catch((error) => {
    console.log(error)
})