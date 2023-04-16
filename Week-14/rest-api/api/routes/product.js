const express = require('express');
const router = express.Router();
const Product = require('../model/product');
const mongoose = require('mongoose');

// router.get('/',(req, res, next)=>{
//     res.status(200).json({
//         msg:"this student get req"
//     })
// })
router.get('/',(req, res, next)=>{
   Product.find()
   .then(result=>{
    res.status(200).json({
        productData: result
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
    Product.findById(_id)
    .exec()
    .then(result=>{
        console.log(result);
        res.status(200).json({
            product: result
        })
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error:err
            })
        })

})

// router.post('/',(req, res, next)=>{
//     res.status(200).json({
//         msg:"this student post req"
//     })
// })

router.post('/',(req, res, next)=>{
    console.log(req.body);
    const product = new Product({
        _id:new mongoose.Types.ObjectId,
        code:req.body.code,
        title:req.body.title,
        description:req.body.description,
        mrp:req.body.mrp,
        sp:req.body.sp,
        discountPercent:req.body.discountPercent,
        imagePath:req.body.imagePath
    })
    product.save().then(result => {
        console.log(result);
        res.status(200).json({
            newProduct:result
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
    Product.remove({_id:req.params.id})
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
    Product.findOneAndUpdate({_id:req.params.id}, {
        $set:{
            code:req.body.code,
            title:req.body.title,
            description:req.body.description,
            mrp:req.body.mrp,
            sp:req.body.sp,
            discountPercent:req.body.discountPercent,
            imagePath:req.body.imagePath  
        }
    })
    .then(result => {
        res.status(200).json({
            updated_product:result
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