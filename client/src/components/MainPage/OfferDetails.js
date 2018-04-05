// take an offer as props
// render each prop detail


import React from "react";


export const OfferDetails = props => (
    <li>
       <p>{props.name}</p>
       <p>{props.price}</p>
    </li>
);