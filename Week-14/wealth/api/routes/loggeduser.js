const express = require('express');
const router = express.Router();
const Loggeduser = require('../model/loggeduser');
const mongoose = require('mongoose');

router.get('/',(req, res, next)=>{
   Loggeduser.find()
   .then(result=>{
    res.status(200).json({
        loggeduserData: result
    })
   })
   .catch(err => {
    console.log(err);
    res.status(500).json({
        error:err
    })
   })
})

router.get('/:id', (req, res, next) => {
    console.log(req.params.id);
    Loggeduser.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
            student: result
        })
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error:err
            })
        })

})


router.post('/',(req, res, next)=>{
    const loggeduser = new Loggeduser({
        _id:new mongoose.Types.ObjectId,
        year:req.body.year,
        month:req.body.month,
        income:req.body.income,
        expenses:req.body.expenses,
        savings:req.body.savings
    })
    loggeduser.save().then(result => {
        console.log(result);
        res.status(200).json({
            newLoggeduser:result
        })
    })

    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})


module.exports = router