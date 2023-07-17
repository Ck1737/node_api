var express = require('express');
var router = express.Router();
var Student = require('../model/student');
var Class = require('../model/class');


router.post('/insert',async function(req,res){


  const {
    name,
    age,
    subject
  }=req.body
  
  var data = await Student.create(req.body);
    console.log(data);

    res.status(200).json({
        status:"Data Insert Successfully",
        data
    })
})

router.post('/inserta',async function(req,res){


  const {
    name
  }=req.body

  // console.log(req.body);

  // let cl = new Class();
  // cl.name = req.body.name;
  // cl.students =[];
  // cl.save((err) =>{
  //   if(err) res.json({"error":err});
  //   else res.json(cl);
  // })
  
  var data = await Class.create(req.body);
    console.log(data);

    res.status(200).json({
        status:"Data Insert Successfully",
        data
    })
})

module.exports = router;