import React from "react";
import {OfferDetails} from "./OfferDetails"

export default class Offer extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			details: this.props.details || "nothing yet"
		}
	}

	render(){
		const { details } = this.state
		// console.log("sabn;akn;ardsbna;sfjkl",details[0].id)
		return (
			<div>
				<a href={this.props.offerUrl}>{this.props.offerName}</a>
				<p>{Array.isArray(details) && details.length > 0 ? details[0].price : details}</p>		
			</div>
		)
	}
}
// export const Offer = props => (


	
// )
// <Wrapper>

// 			{props.details.map(deal => {

// 			    <OfferDetails
// 			      name={deal.currency}
// 			      price={deal.price}
// 			    />
// 			})}
// 		</Wrapper>