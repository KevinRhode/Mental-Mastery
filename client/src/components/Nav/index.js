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
    display: 'flex',
    justifyContent:'center'  

    
  };
  const liStyle = {
    margin: "1rem 0rem",
    textAlign: 'center',
    
  }

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul  style={{ listStyleType: "none", paddingInlineStart:'0' }}>
          <li style={liStyle}>
            <Link to="/" style={navButtonStyle}>
              Home
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/dashboard" style={navButtonStyle}>
              Dashboard
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/family" style={navButtonStyle}>
              Family Size
            </Link>
          </li>
          <li style={liStyle}>
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
        <ul className="flex-row" style={{ listStyleType: "none",paddingInlineStart:'0'  }}>
          <li style={liStyle}>
            <Link to="/signup" style={navButtonStyle}>
              Signup
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/login" style={navButtonStyle}>
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return <nav>{showNavigation()}</nav>;
}

export default Nav;
