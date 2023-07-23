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
    margin: "0 40px",
    color: "white",
    textDecoration: "none",
  };
  const headerStyles = {
    backgroundImage: `url(${logoImage})`,
    backgroundRepeat: "no-repeat", // Tile the image
    backgroundSize: "50%", // Adjust the size to your preference
    backgroundPosition: "center center",
    marginLeft: "75px",
    marginTop: "20px",
    minHeight: "100px", // Set the minimum height here
    backgroundColor: "rgba(0, 0, 0, 0) !important",
  };

  return (
    <header
      style={headerStyles}
      className="bg-primary text-light mb-4 py-3 flex-row align-center"
    >
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>         
          {Auth.loggedIn() ? (
            <>
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
            </>
          ) : (
            <>
              <Link to="/login" style={navButtonStyle}>
                Login
              </Link>
              <Link to="/signup" style={navButtonStyle}>
                Sign Up
              </Link>
            </>
          )}

          <p className="m-0"></p>
        </div>
        {/* Add the navigation links here */}
        <div>{/* ... */}</div>
      </div>
    </header>
  );
};

export default Header;
