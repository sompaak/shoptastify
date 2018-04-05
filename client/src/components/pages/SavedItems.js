import React from "react";
import Navpills from "../navpills"

import {ItemList} from "../MainPage/ItemList";
import {SavedList} from "./SavedItemsList" ; 

class SavedItems extends React.Component {

  constructor(){
    super();
    this.state = {
      savedItems:[]
    }
  }

  componentDidMount() {
   fetch("/getIds", {method: "GET"})
      .then(response => {
        response.text().then(responseText => {
           const data = JSON.parse(responseText)
           this.setState({savedItems:data})
           console.log(this.state.savedItems[0].results[0])

        })
      })
  }
 

  // below form create a wrapper component that allows iteration of state array
    // each item is passed to a component via props 
  render(){

    const { savedItems } = this.state,
        toDisplay = savedItems.length > 0 ? savedItems : "",
        viewable = savedItems[0] ? savedItems[0].results : "nothing yet"

        console.log("++++++++++++++++++",viewable)
    return(
      <div> 

      <Navpills/>
        <ItemList>

        {Array.isArray(toDisplay) ? savedItems.map(item =>{
        return(

          <SavedList
            key = {item.results[0].name}
            url = {item.results[0].sitedetails[0].url}
            image = {item.results[0].images[0]}
            name = {item.results[0].name}
            price = {item.results[0].price}
            site = {item.results[0].sitedetails[0].url}
            
          />
        )
        }) : toDisplay}

      </ItemList>



      </div> 
    )
  }
}

export default SavedItems;






































 