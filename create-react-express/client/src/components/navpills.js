import React from "react";
import { Link } from "react-router-dom";

const Navpills = () => (
  <ul className="nav nav-tabs">
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">saved</Link>
    </li>
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">home</Link>
    </li>
    
  </ul>
);

export default Navpills;