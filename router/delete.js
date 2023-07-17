var express = require('express');
var router = express.Router();
var user_model = require('../model/student');


router.get('/delete/:id',async function(req,res){

    var id = req.body.id;      

    var data = await user_model.findByIdAndDelete(id);
    console.log(data);  

    res.status(200).json({
        status:"record Delete Succesfully",
        data
    })
})

module.exports = router;