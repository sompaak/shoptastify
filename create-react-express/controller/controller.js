var express = require("express");
var router = express.Router();
var results= require("../api.js")

console.log("fa;sdhgan;skbfjnafsk", results)

router.post('/', function(req, res) {
  console.log("============",req.body)

  //  res.json(req.body)

  results(req.body.message).then(function(data){

    res.json(data)

    // console.log(data)

  })
})






// Export routes for server.js to use.
module.exports = router;
  


