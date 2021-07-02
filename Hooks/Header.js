import React from "react";
import logo from "../../iti.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container d-flex justify-content-between">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="logo" className="" />
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/Students/StudentList">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/Students/Add">
              Add Student
            </NavLink>
          </div>
        </div>
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
