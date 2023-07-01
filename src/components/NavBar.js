import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  //display HTML for navigation between "Home" and "Add New" pages
  return (
    <div className="navbar">
        <NavLink className="nav-link" exact to="/">Home</NavLink>
        <br />
        <NavLink className="nav=link" exact to="/add">Add New</NavLink>
        <br />
        <NavLink className="nav=link" exact to="/about">About</NavLink>
    </div>
  );
}
export default NavBar;
