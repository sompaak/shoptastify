import React from "react";
import {DetailList} from "./DetailList";
import Offer from "./Offer"
export default class ProductListItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      latestOffers: []
    }
  }
  componentDidMount(){
    const { productOffers } = this.props
    this.setState({latestOffers: productOffers})
  }
  render() {
    console.log("===============da latest=============",this.state.latestOffers)
    const { url, image, name, price, site, links, semid, handleItemSubmit } = this.props
    //iterate through this.state.latestOffers
      // pass each set of offer details to each new child component called offerDetails
    return (
      <div className="card" style = {{width:"400px",height:"700px"}} >
          <a href = {url}>
             <img className="" style = {{height:"300px", width:"300px"}} src={image} alt="Card image cap">
            </img>
          </a>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <div className="card-text">

            <p>{name}</p>
            
            <p style={{}}>{"price: " + "$" + price}</p>
            <a href = {site}>link</a>
      <DetailList>
          {this.state.latestOffers.map(offer => <Offer offerName={offer.name} offerUrl={offer.url} details={offer.latestoffers}/>)
        }
      </DetailList>
          </div>
          <button onClick={handleItemSubmit.bind(null,semid)} className="btn btn-primary">Go somewhere</button>
        </div>
      </div>
    )
  }
}