import React from "react";
import {ItemList} from "./ItemList";
import ProductListItem from "./ProductListItem" ; 
import "./score.css";
import { Link } from 'react-router-dom'

var api_key = 'SEM3D3471CFBEE1D946B7A186B012CB94542';
var api_secret = 'OGY5NWZkOTNlZWI1OGNmZjY0MGMwODkxZWYzMjUyZDA';
var sem3 = require('semantics3-node')(api_key,api_secret);

class MainPage extends React.Component {

	constructor(){
		super();
		this.state = {
			queryString:"",
			items:[]
		}
	}

	handleInputChange = event => {
		// Destructure the name and value properties off of event.target
		// Update the appropriate state
		console.log(this.state.queryString)
		const { name, value } = event.target;
		this.setState({
		  [name]: value
		});
	};

	handleFormSubmit = event => {
		// When the form is submitted, prevent its default behavior, get recipes update the recipes state
		event.preventDefault();
		fetch("/api", {
			method:"POST", 
			body: JSON.stringify({message: this.state.queryString}),
			headers: new Headers({'Content-Type': 'application/json'})
		})
			.then(response => {
				response.text().then(responseText => {
					var data = JSON.parse(responseText)
					console.log("===========data============",data)
					this.setState({items:data})
				})
			})
	};

	itemSubmit = itemId => {
		console.log(itemId)
		fetch('/saveid', {
			method:"POST", 
			body: JSON.stringify({message: itemId}),
			headers: new Headers({'Content-Type': 'application/json'})
		})
	}

	// below form create a wrapper component that allows iteration of state array
		// each item is passed to a component via props 
	render(){

		const { items } = this.state,
			  toDisplay = items.length > 0 ? items : ""
		
		return(

		<div>	
		<div id="jumbo" className="jumbotron">
		  <h2 style={{textAlign:"center"}}>SHOPTASTIFY</h2>
		  <p style={{textAlign:"center"}}>Find the best deals!!</p>
		  <button className="btn btn-danger"><Link to="/saved">saved</Link></button>
		</div>

		<div className = "row">
			<div className = "col-md-4"></div>
			<div className="col-lg-5">
				<form>
				    <div className="input-group">
				      <input name = "queryString" value = {this.state.queryString} onChange = {this.handleInputChange} type="text" className="form-control" placeholder="Search for..."></input>
				      <span className="input-group-btn">
				        <button onClick = {this.handleFormSubmit} className="btn btn-default" type="submit">Go!</button>
				      </span>
					</div>
				</form>
			</div>
		</div>
		<br/>
		<div className = "data">
			<ItemList>

				{Array.isArray(toDisplay) ? items.map(item =>{
				return(
					<ProductListItem
						url = {item.sitedetails[0].url}
						key = {item.name}
						image = {item.images[0]}
						name = {item.name}
						price = {item.price}
						site = {item.sitedetails[0].url}
						semid = {item.sem3_id}
						productOffers = {item.sitedetails}
						handleItemSubmit = {this.itemSubmit}
					/>
				)
				}) : toDisplay}

			</ItemList>
		</div>		
	</div>
		)
	}
}

export default MainPage; 