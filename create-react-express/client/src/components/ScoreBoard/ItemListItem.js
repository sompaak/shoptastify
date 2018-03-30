import React from "react";


// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const ItemListItem = props => (
  
   <div className= "jumbotron">
    <li > 

        <div> 
         
          <img style={{height:"200px",width:"200px"}} src={props.image}/>
          <br/>
          <p style={{}}>{props.name}</p>
          
          <p style={{}}>{"price: " + "$" + props.price}</p>

          

      </div>
      
  </li>
 </div>
);