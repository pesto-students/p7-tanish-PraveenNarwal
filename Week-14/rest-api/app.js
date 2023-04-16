const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
// const cors = require('cors');
// const morgan = require('morgan');
const studentRoute = require('./api/routes/students');
const facultyRoute = require('./api/routes/faculty');
const productRoute = require('./api/routes/product')
const userRoute = require('./api/routes/user')

mongoose.connect('mongodb+srv://sbs:sbs123@cluster0.xzye9.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.on('error', err =>{
    console.log('connection failed')
})
mongoose.connection.on('connected', connected=>{
    console.log('connected with databases...');
})

// app.use(cors());

// app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



app.use('/student', studentRoute);
app.use('/faculty', facultyRoute);
app.use('/product', productRoute);
app.use('/user', userRoute);

// app.use((req, res, next) => {
//     res.status(200).json({
//         message:'app is running on localhost'
//     })
// })

app.use((req, res, next) => {
    res.status(404).json({
        error:'bad request'
    })
})

module.exports = app