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
    // backgroundSize: "90%", 
    backgroundPosition: "center center",
    // marginLeft: "75px",
    marginTop: "20px",
    minHeight: "150px", 
    backgroundColor: "rgba(0, 0, 0, 0) !important",
    // maxWidth:'700px',

  };

  return (
    <header
      style={headerStyles}      
    >
     
    </header>
  );
};

export default Header;
