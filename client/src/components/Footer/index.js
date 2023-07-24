import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../utils/auth';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navButtonStyle = {
    margin: "0 8px",
    padding: "10px 20px",
    color: "white",
    textDecoration: "none",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: "4px",
    display: 'flex',
    justifyContent:'center',
    maxWidth:'400px',
    margin:"auto"


    
  };

  return (
    <footer className="w-100 p-4">
      <div className="container text-center">
        {location.pathname !== '/' && (
          <Link style={navButtonStyle} onClick={() => navigate(-1)}> Go Back </Link>         // <button
            
        )}
        <h4>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          {' '}
          </span>{' '}
          by the Anuja Lawankar, Courtney Thibodeau, Griffin Wojtowicz, Kevin Rhode, and Laura Strait
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
