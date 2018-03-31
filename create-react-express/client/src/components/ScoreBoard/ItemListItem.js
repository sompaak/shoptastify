import React from "react";


// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const ItemListItem = props => (
  
   
    <li> 

     <div class="card" >
        <a href = {props.url}>
         <img class="" style = {{height:"400px"}} src={props.image} alt="Card image cap">
        </img>
        </a>

      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">

          <p>{props.name}</p>
          
          <p style={{}}>{"price: " + "$" + props.price}</p>
          <a href = {props.site}>link</a>

          <p>{props.links}</p>


        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
      
  </li>
 
);