const express = require('express');
const router = express.Router();

router.get('/',(req, res, next)=>{
    res.status(200).json({
        msg:"this faculty get req"
    })
})

router.post('/',(req, res, next)=>{
    res.status(200).json({
        msg:"this faculty post req"
    })
})

module.exports = router