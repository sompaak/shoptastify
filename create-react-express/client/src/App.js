import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./components/MainPage"
import SavedItems from "./components/pages/SavedItems"
//import friends from "./friends.json";

class App extends React.Component {
  
  render(){
    return(
      <div>
      	<div>
	        <Router>	        	
	        	<Switch>
		        	<Route exact path="/" component= {MainPage} />
		        	<Route exact path="/saved" component= {SavedItems} />
	        	</Switch>
	        </Router>
	    </div>        


      </div>
      )
   }
}

export default App;
