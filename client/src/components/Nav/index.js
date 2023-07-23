import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  const navButtonStyle = {
    margin: "0 8px", 
    padding: "10px 20px",
    color: "white",
    textDecoration: "none",
    backgroundColor: "rgba(0, 0, 0, 0.7)", 
    borderRadius: "4px", 
  };

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row" style={{listStyleType:'none'}}>
          <li className="mx-1">
            <Link to="/" style={navButtonStyle}>
                Home
              </Link>
             <Link to="/dashboard" style={navButtonStyle}>
                Dashboard
              </Link>
              <Link to="/family" style={navButtonStyle}>
                Family Size
              </Link>
             
              {/* <Link to="/task" style={navButtonStyle}>
                Tasks
              </Link>      */}
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()} style={navButtonStyle}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row" style={{listStyleType:'none'}} >
          <li className="mx-1">
            <Link to="/signup" style={navButtonStyle}>
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login" style={navButtonStyle}>
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (    
      <nav >
        {showNavigation()}
      </nav>
  );
}

export default Nav;
