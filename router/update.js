var express = require('express');
var router = express.Router();
var user_model = require('../model/student');


router.post('/update/:id',async function(req,res){

    var id = req.params.id;
    var fname = req.body.fname;
    
    var data = await user_model.findByIdAndUpdate(id,{fname:fname});
    var data = await user_model.findById(id);
    console.log(data);  

    res.status(200).json({
        status:"data update Succesfully",
        data
    })
})

module.exports = router;