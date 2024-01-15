const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Wassup NODE")
})

app.listen(3000, ()=> {
    console.log("Node API is running on port 3000")
})