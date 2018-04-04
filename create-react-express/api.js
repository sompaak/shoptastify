var api_key = 'SEM3D3471CFBEE1D946B7A186B012CB94542';
var api_secret = 'OGY5NWZkOTNlZWI1OGNmZjY0MGMwODkxZWYzMjUyZDA';
var sem3 = require('semantics3-node')(api_key,api_secret);

const productResults = (userInput) => {

	return new Promise((resolve, reject) => {

		sem3.products.products_field( "search", userInput);

		sem3.products.get_products(
		   function(err, products) {
		      if (err) {
		         console.log("Couldn't execute request: get_products");
		         return;
		      }

		      //console.log(JSON.parse(products).results);
		      // format data with only relevant info
		      resolve(JSON.parse(products).results)
		   }
		)
	})
}


const idResults = (productId, resolve, reject) =>{
	sem3.products.products_field( "sem3_id", productId);
	sem3.products.get_products(
	   function(err, offers) {
	      if (err) {
	         console.log("Couldn't execute request: get_offers");
	         reject(err);
	      }
	    // console.log( "Results of request:\n", JSON.stringify(offers));
	    resolve(JSON.stringify(offers))
	   }
	);
	sem3.products.remove( "products", "sem3_id");
}

module.exports = {productResults, idResults}