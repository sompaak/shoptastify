




import React from "react";


export const SavedList = props => (
  
    
       <div className="card" style = {{width:"400px",height:"700px"}} >
          <a href = {props.url}>
             <img className="" style = {{height:"300px", width:"300px"}} src={props.image} alt="Card image cap">
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
         
        </div>
      </div>
      
  
 
);


