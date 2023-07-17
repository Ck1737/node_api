var express = require('express');
var router = express.Router();
var user_model = require('../model/student');


router.get('/find',async function(req,res){

    var id = req.body.id;
    var fname = req.body.fname;   

    var data = await user_model.find({_id:id,fname:fname});
    console.log(data);  

    res.status(200).json({
        status:"data Find Succesfully",
        data
    })
})

module.exports = router;