import React, { useState } from 'react';
import Auth from '../utils/auth';
import Header from './Header';
import Footer from './Footer';
import { useMutation } from '@apollo/client';
import { CREATE_FAMILY_USER } from '../utils/mutations';

const FamilyComponent = () => {
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [familyData, setFamilyData] = useState([]);
  const [createFamilyUser, { error }] = useMutation(CREATE_FAMILY_USER);
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  const authContext = {
    headers:{Authorization: `Bearer ${token}`}
  };
  

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
  const createFamily = ()=>{}

  const renderCards = () => {
    const cards = [];
    for (let i = 0; i < numberOfPeople; i++) {
      cards.push(
        <div key={i}>
          <h3>Person {i + 1}</h3>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={(event) => handleCardInputChange(i, event)}
            />
          </label>
          <label>
            Date of Birth:
            <input
              type="date"
              name="dateOfBirth"
              onChange={(event) => handleCardInputChange(i, event)}
            />
          </label>
          {/* Add more fields as needed */}
        </div>
      );
    }
    return cards;
  };

  return (
    <div>
         <Header /> {/* Render your Header component */}
      <label>
        How many people are in your family?
        <input
          type="number"
          min="0"
          value={numberOfPeople}
          onChange={handleInputChange}
        />
      </label>
      {renderCards()}
      <Footer /> {/* Render your Footer component */}
    </div>
  );
};

export default FamilyComponent;
