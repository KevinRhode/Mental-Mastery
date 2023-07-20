import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import logoImage from './logowithcorrectcolor.png';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const headerStyles = {
    backgroundImage: `url(${logoImage})`,
    backgroundRepeat: 'no-repeat', // Tile the image
    backgroundSize: '50%', // Adjust the size to your preference
    backgroundPosition: 'center center',
    marginLeft: '75px',
    marginTop: '20px',
    minHeight: '100px', // Set the minimum height here
    backgroundColor: 'rgba(0, 0, 0, 0) !important',
  };

  return (
    <header style={headerStyles} className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0"></h1>
          </Link>
          <p className="m-0"></p>
        </div>
        {/* Add the navigation links here */}
        <div>
          {/* ... */}
        </div>
        {/* Rest of the Header component code */}
        {/* ... */}
      </div>
    </header>
  );
};

export default Header;
