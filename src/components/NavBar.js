import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
        <NavLink className="nav-link" exact to="/">Home</NavLink>
        <br />         
        <NavLink className="nav=link" exact to="/add">Add New</NavLink>
    </div>
  );
}
export default NavBar;
