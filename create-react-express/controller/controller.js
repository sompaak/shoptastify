var express = require("express");
var router = express.Router();
var results= require("../api.js")
var db = require("../models");
var mongoose = require("mongoose");


router.post('/api', function(req, res) {
  //console.log("============",req.body)

  //  res.json(req.body)

  results(req.body.message).then(function(data){

    res.json(data)

    // console.log(data)

  })
})

router.post('/saveid', function(req, res){
  console.log("======", req.body.message)
  db.User.create({ semid: req.body.message }).then(function(data){
    console.log(data)
  })

})

// Export routes for server.js to use.
module.exports = router;
