import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import logoImage from './logowithcorrectcolor.png';
import goldLeafImage from '../assets/depositphotos_38252213-stock-photo-gold-leaf-on-buddha-sculpture.jpg';

const ProfileComponent = () => {
  // Replace this array with your family user data
  const familyUsers = [
    { id: 1, name: 'Family Member 1' },
    { id: 2, name: 'Family Member 2' },
    { id: 3, name: 'Family Member 3' },
    // Add more family members as needed
  ];

  const headerStyles = {
    backgroundImage: `url(${logoImage})`,
    backgroundRepeat: 'no-repeat', // Tile the image
    backgroundSize: '50%', // Adjust the size to your preference
    backgroundPosition: 'center center',
    marginLeft: '75px',
    marginTop: '20px',
    minHeight: '100px', // Set the minimum height here
    backgroundColor: 'rgba(0, 0, 0, 0) !important',
    position: 'relative', // Add position relative to the header container
  };

  const cardStyles = {
    border: '1px solid #1b5060',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundImage: `url(${goldLeafImage})`,
    backgroundRepeat: 'repeat', // Tile the image
    backgroundSize: '100%', // Adjust the size to your preference
    color: '#02151d !important',
    position: 'absolute', // Add position absolute to the card
    top: 0, // Position the card at the top of the header container
    left: 0, // Position the card at the left of the header container
    right: 0, // Position the card at the right of the header container
  };

  const labelStyles = {
    display: 'block',
    marginBottom: '6px',
  };

  const inputStyles = {
    width: '100%',
    padding: '6px 10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
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
      </div>
      {/* Display Family Users */}
      <div className="container">
        <h2>Family Users:</h2>
        {familyUsers.map((user) => (
          <div key={user.id} style={cardStyles}>
            <h3 style={{ color: '#02151d', backgroundColor: '#ffffffCC' }}>
              {user.name}
            </h3>
            <label style={labelStyles}>
              Name:
              <input
                type="text"
                name="name"
                style={inputStyles}
                value={user.name} // Set the value to the user's name
                readOnly // Make the input read-only so it displays the name without editing
              />
            </label>
            {/* Add more fields as needed */}
          </div>
        ))}
      </div>
    </header>
  );
};

export default ProfileComponent;
