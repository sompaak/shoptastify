import React from "react";
import "./score.css";
const scoreboard = props => (


	<div>
		<nav id="heading" className="navbar navbar-inverse">

			<div className = "row">

				<div className= "col-md-1"></div>	

				<div className= "col-md-3">		 
				   <h2 id="title">CLICKY GAME</h2>
				</div>

				<div className= "col-md-1"></div>

				<div className= "col-md-3">		
				   <h2 id = "intro">Click an image to begin</h2>
				</div>

				<div className= "col-md-1"></div>

				<div className= "col-md-3">		
				   <h2 id = "props">{props.score} {props.topScore} </h2>
			</div>

		</div>
	</nav>

	<div id="jumbo" className="jumbotron">
	  <h2 style={{textAlign:"center"}}>CLICKY GAME</h2>
	  <p style={{textAlign:"center"}}>Click on an image to earn points, but don't click on any more than once!</p>
	</div>

</div>

    
);

export default scoreboard; 