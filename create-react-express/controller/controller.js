var express = require("express");
var router = express.Router();
var { results, idResults } = require("../api.js")
var db = require("../models");
var mongoose = require("mongoose");


router.post('/api', function(req, res) {
  results(req.body.message).then(function(data){
    console.log(data)
    res.json(data)

  })
})

router.post('/saveid', function(req, res){
  db.User.create({ semid: req.body.message }).then(function(data){
    console.log(data)
  })

})

router.get("/getIds",function(req,res){
  db.User.find({}, function(err, data) {
    const promises = data.map(item => {
      return new Promise((resolve, reject) => idResults(item.semid, resolve, reject))
    })
    Promise.all(promises)
      .then(data => res.json(data.map(result => JSON.parse(JSON.parse(result)))))
  })
})
module.exports = router;
