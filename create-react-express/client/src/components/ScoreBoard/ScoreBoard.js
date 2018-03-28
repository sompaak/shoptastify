import React from "react";
import "./score.css";
const scoreboard = props => (


<div>
		
	<div id="jumbo" className="jumbotron">
	  <h2 style={{textAlign:"center"}}>SHOPTASTIFY</h2>
	  <p style={{textAlign:"center"}}>Find the best deals!!</p>
	</div>


		<div className = "row">
			<div className = "col-md-4"></div>
			<div class="col-lg-5">
			    <div class="input-group">
			      <input type="text" class="form-control" placeholder="Search for..."></input>
			      <span class="input-group-btn">
			        <button class="btn btn-default" type="button">Go!</button>
			      </span>
				</div>
			</div>
		</div>
</div>

	

	


    
);

export default scoreboard; 