import React, { useState } from 'react';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { CREATE_FAMILY_USER } from '../utils/mutations';

const FamilyComponent = () => {
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [familyData, setFamilyData] = useState([]);
  const [createFamilyUser, { error }] = useMutation(CREATE_FAMILY_USER);
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  // const authContext = {
  //   headers:{Authorization: `Bearer ${token}`}
  // };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setNumberOfPeople(parseInt(value));
  };

  const handleCardInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedFamilyData = [...familyData];
    updatedFamilyData[index] = {
      ...updatedFamilyData[index],
      [name]: value,
    };
    setFamilyData(updatedFamilyData);
  };
  const createFamily = () => {};

  const renderCards = () => {
    const goldLeafImage = require('../assets/goldLeaf.jpg').default;
    const cardStyles = {
      border: '1px solid #1b5060',
      padding: '10px',
      margin: '10px',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      backgroundImage: `url(${goldLeafImage})`,
      backgroundRepeat: 'repeat', // Tile the image
      backgroundSize: '100%', // Adjust the size to your preference
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

    const cards = [];
    for (let i = 0; i < numberOfPeople; i++) {
      cards.push(
        <div key={i} style={cardStyles}>
          <h3>Person {i + 1}</h3>
          <label style={labelStyles}>
            Name:
            <input
              type="text"
              name="name"
              style={inputStyles}
              onChange={(event) => handleCardInputChange(i, event)}
            />
          </label>
          <label style={labelStyles}>
            Date of Birth:
            <input
              type="date"
              name="dateOfBirth"
              style={inputStyles}
              onChange={(event) => handleCardInputChange(i, event)}
            />
          </label>
          <label style={labelStyles}>
            Pronoun:
            <input
              type="text"
              name="name"
              style={inputStyles}
              onChange={(event) => handleCardInputChange(i, event)}
            />
          </label>
          <label style={labelStyles}>
            Religious Preference:
            <input
              type="text"
              name="name"
              style={inputStyles}
              onChange={(event) => handleCardInputChange(i, event)}
            />
          </label>
          {/* Add more fields as needed */}
        </div>
      );
    }
    return cards;
  };

  const labelContainerStyles = {
    backgroundColor: '#1b5060',
    padding: '10px',
    color: 'white',
    marginBottom: '10px',
    borderRadius: '5px',
  };

  return (
    <div>
      <div style={labelContainerStyles}>
        <label>
          How many people are in your family?
          <input
            type="number"
            min="0"
            value={numberOfPeople}
            onChange={handleInputChange}
          />
        </label>
      </div>
      {renderCards()}
    </div>
  );
};

export default FamilyComponent;
