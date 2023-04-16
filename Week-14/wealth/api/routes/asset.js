const express = require('express');
const router = express.Router();
const Asset = require('../model/asset');
const mongoose = require('mongoose');

router.get('/',(req, res, next)=>{
   Asset.find()
   .then(result=>{
    res.status(200).json({
        assetData: result
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
    const _id = req.params.id;
    console.log(_id);
    Asset.findById(_id)
    .exec()
    .then(result=>{
        console.log(result);
        res.status(200).json({
            asset: result
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
    console.log(req.body);
    const asset = new Asset({
        _id:new mongoose.Types.ObjectId,
        assets:req.body.assets,
        equity:req.body.equity,
        fixedIncome:req.body.fixedIncome
    })
    asset.save().then(result => {
        console.log(result);
        res.status(200).json({
            newAsset:result
        })
    })

    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

router.delete('/:id', (req, res, next) => {
    Asset.remove({_id:req.params.id})
    .then(result => {
       res.status(200).json({
        message:'product deleted',
        result:result
       })
    })
    .catch(err => {
        res.status(500).json({
            error:err
        })
    })
})

router.put('/:id', (req, res, next) => {
    console.log(req.params.id);
    Asset.findOneAndUpdate({_id:req.params.id}, {
        $set:{
            assets:req.body.assets,
            equity:req.body.equity,
            fixedIncome:req.body.fixedIncome 
        }
    })
    .then(result => {
        res.status(200).json({
            updated_asset:result
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