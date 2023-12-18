const express =require('express')
const mongoose = require('mongoose')
const app = express()
const url = 'mongodb://localhost/practicalIA'

mongoose.connect(url, {isNewUrlParser : true})
const db = mongoose.connection

db.on('open', () => {
    console.log("Database connected successfully")
})

app.use(express.json())

const patientRouter =require('./routes/patients')
app.use('./routes/patients', patientRouter)

app.listen(3001, () => {
    console.log("Check port 3001, your server is running")
})