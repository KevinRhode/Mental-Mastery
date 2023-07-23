import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import logoImage from "./logowithcorrectcolor.png";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  
  const navButtonStyle = {
    margin: "0 8px", 
    padding: "10px 20px",
    color: "white",
    textDecoration: "none",
    backgroundColor: "rgba(0, 0, 0, 0.7)", 
    borderRadius: "4px", 
  };

  const headerStyles = {
    backgroundImage: `url(${logoImage})`,
    backgroundRepeat: "no-repeat", 
    backgroundSize: "50%", 
    backgroundPosition: "center center",
    marginLeft: "75px",
    marginTop: "20px",
    minHeight: "100px", 
    backgroundColor: "rgba(0, 0, 0, 0) !important",
  };

  return (
    <header
      style={headerStyles}
      className="bg-primary text-light mb-4 py-3 flex-row align-center"
    >
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        {/* <div>         
          {Auth.loggedIn() ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link to="/" style={navButtonStyle}>
                Dashboard
              </Link>
              <Link to="/family" style={navButtonStyle}>
                Family Size
              </Link>
             
              <Link to="/task" style={navButtonStyle}>
                Tasks
              </Link>            
              <Link style={navButtonStyle} onClick={Auth.logout}>Logout</Link>
            </div>
          ) : (
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link to="/login" style={navButtonStyle}>
                Login
              </Link>
              <Link to="/signup" style={navButtonStyle}>
                Sign Up
              </Link>
            </div>
          )}

          <p className="m-0"></p>
        </div> */}
        {/* Add the navigation links here */}
        <div>{/* ... */}</div>
      </div>
    </header>
  );
};

export default Header;
