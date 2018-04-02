import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScoreBoard from "./components/ScoreBoard"
import Saved from "./components/pages/saved"
//import friends from "./friends.json";

class App extends React.Component {
  
  render(){
    return(

      <div>
      	<div>
	        <Router>	        	
	        	<Switch>
		        	<Route exact path="/" component= {ScoreBoard} />
		        	<Route exact path="/saved" component= {Saved} />
	        	</Switch>
	        </Router>
	    </div>        


      </div>
      )
   }
}

export default App;
