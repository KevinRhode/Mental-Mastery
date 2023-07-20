import React, { useState } from 'react';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { CREATE_FAMILY_USER } from '../utils/mutations';
import goldLeafImage from '../assets/depositphotos_38252213-stock-photo-gold-leaf-on-buddha-sculpture.jpg';
import { v4 as uuidv4 } from 'uuid';

const FamilyComponent = () => {
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [familyData, setFamilyData] = useState([]);
  const [createFamilyUser, { error }] = useMutation(CREATE_FAMILY_USER);
  const token = Auth.loggedIn() ? Auth.getToken() : null;

  const handleInputChange = (event) => {
    const { value } = event.target;
    setNumberOfPeople(parseInt(value));
  };

  const handleCardInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedFamilyData = [...familyData];
    const personId = updatedFamilyData[index]?.id || uuidv4(); // Get the person's existing ID or generate a new one
    updatedFamilyData[index] = {
      ...updatedFamilyData[index],
      id: personId,
      [name]: value,
    };
    setFamilyData(updatedFamilyData);
  };

  const handleSubmit = () => {
    for (const personData of familyData) {
      const { id, name, dateOfBirth, pronoun, religiousPreference } = personData;

      // Call the createFamilyUser mutation for each person in the family
      createFamilyUser({
        variables: {
          input: {
            id,
            name,
            dateOfBirth,
            pronoun,
            religiousPreference,
          },
        },
      })
        .then((response) => {
          // Handle the response if needed
          console.log('Family member created:', response.data.createFamilyUser);
        })
        .catch((error) => {
          // Handle any errors from the mutation
          console.error('Error creating family member:', error);
        });
    }
  };

  const goldLeafImageStyles = {
    backgroundImage: `url(${goldLeafImage})`,
    backgroundRepeat: 'repeat',
    backgroundSize: '100%',
  };

  const cardStyles = {
    border: '1px solid #1b5060',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    ...goldLeafImageStyles,
    color: '#02151d !important',
  };

  const labelStyles = {
    display: 'block',
    marginBottom: '6px',
    color: '#02151d',
  };

  const inputStyles = {
    width: '100%',
    padding: '6px 10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  };

  const labelContainerStyles = {
    backgroundColor: '#1b5060',
    padding: '10px',
    color: 'white',
    marginBottom: '10px',
    borderRadius: '5px',
  };

  const submitButtonStyles = {
    marginTop: '10px',
    padding: '8px 16px',
    backgroundColor: '#1b5060',
    color: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const renderCards = () => {
    const cards = [];
    for (let i = 0; i < numberOfPeople; i++) {
      const personId = uuidv4();
      const cardData = {
        id: personId,
        name: '',
        dateOfBirth: '',
        pronoun: '',
        religiousPreference: '',
      };
      cards.push(
        <div key={i} style={cardStyles}>
          <h3 style={{ color: '#02151d', backgroundColor: '#ffffffCC' }}>Person {i + 1}</h3>
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
              name="pronoun"
              style={inputStyles}
              onChange={(event) => handleCardInputChange(i, event)}
            />
          </label>
          <label style={labelStyles}>
            Religious Preference:
            <input
              type="text"
              name="religiousPreference"
              style={inputStyles}
              onChange={(event) => handleCardInputChange(i, event)}
            />
          </label>
        </div>
      );
    }
    return cards;
  };

  const containerStyles = {
    marginTop: '100px',
    ...goldLeafImageStyles,
  };

  return (
    <div style={containerStyles}>
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
      <button style={submitButtonStyles} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default FamilyComponent;
