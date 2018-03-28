const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

var api_key = 'SEM3D3471CFBEE1D946B7A186B012CB94542';
var api_secret = 'OGY5NWZkOTNlZWI1OGNmZjY0MGMwODkxZWYzMjUyZDA';
var sem3 = require('semantics3-node')(api_key,api_secret);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

	

	function results(){

		sem3.products.products_field( "search", "iPhone" );

		sem3.products.get_products(
		   function(err, products) {
		      if (err) {
		         console.log("Couldn't execute request: get_products");
		         return;
		      }
		      console.log(JSON.parse(products).results) ;
		   }
		);
	}

	results()