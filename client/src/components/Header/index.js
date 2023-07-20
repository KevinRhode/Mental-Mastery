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
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
