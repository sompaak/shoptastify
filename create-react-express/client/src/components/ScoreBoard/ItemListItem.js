import React from "react";


export const ItemListItem = props => (
  
    <li>
       <div className="card" >
          <a href = {props.url}>
             <img className="" style = {{height:"400px", width:"400px"}} src={props.image} alt="Card image cap">
            </img>
          </a>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">

            <p>{props.name}</p>
            
            <p style={{}}>{"price: " + "$" + props.price}</p>
            <a href = {props.site}>link</a>

            <p>{props.links}</p>

          </p>
          <button onClick={props.handleItemSubmit.bind(null,props.sem3id)} className="btn btn-primary">Go somewhere</button>
        </div>
      </div>
      
  </li>
 
);

