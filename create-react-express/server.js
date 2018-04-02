const express = require("express");
const path = require("path");
var bodyParser = require("body-parser"); 
const PORT = process.env.PORT || 3001;
var cont = require("./controller/controller.js")
const app = express();
var db = require("./models");
var mongoose = require("mongoose");
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/shoptastify");
// Send every request to the React app
// Define any API routes before this runs

app.use(bodyParser.json())
app.use("/",cont)
// app.use("/api",cont)
// app.use("/saveid",cont)

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});










	

