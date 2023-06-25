import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <BrowserRouter>
        <NavLink className="nav-link" exact to="/">Home</NavLink>
        <br />         
        <NavLink className="nav=link" exact to="/add">Add New</NavLink>
      </BrowserRouter>
    </div>
  );
}
export default NavBar;
