import React, { useState } from "react";
import Auth from "../utils/auth";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_FAMILY_USER } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries";
import goldLeafImage from "../assets/depositphotos_38252213-stock-photo-gold-leaf-on-buddha-sculpture.jpg";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router";

const FamilyComponent = () => {
  const navigate = useNavigate();
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [familyData, setFamilyData] = useState([]);
  const [createFamilyUser, { error }] = useMutation(CREATE_FAMILY_USER);
  const { loading, err, data } = useQuery(QUERY_ME);
  const token = Auth.loggedIn() ? Auth.getToken() : null;

  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);

    // refresh
    navigate(0);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setNumberOfPeople(parseInt(value));
  };

  const handleCardInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedFamilyData = [...familyData];
    const personId = updatedFamilyData[index]?.id || uuidv4();
    updatedFamilyData[index] = {
      ...updatedFamilyData[index],
      id: personId,
      [name]: value,
    };
    setFamilyData(updatedFamilyData);
  };

  const handleSubmit = async () => {
    try {
      await Promise.all(
        familyData.map(async (personData) => {
          const {
            id,
            name,
            dateOfBirth,
            proNoun,
            religiousPreference: religion,
          } = personData;

          // Call the createFamilyUser mutation for each person in the family
          const response = await createFamilyUser({
            variables: {
              id,
              name,
              dateOfBirth,
              proNoun,
              religion,
            },
          });

          // Handle the response if needed
          console.log("Family member created:", response.data.createFamilyUser);
          setShowModal(true);
        })
      );
    } catch (error) {
      // Handle any errors from the mutation
      console.error("Error creating family member:", error);
    }
  };
  const modalStyles = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  };

  const modalBackdropStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };

  const goldLeafImageStyles = {
    backgroundImage: `url(${goldLeafImage})`,
    backgroundRepeat: "repeat",
    backgroundSize: "100%",
  };

  const cardStyles = {
    border: "1px solid #1b5060",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    ...goldLeafImageStyles,
    color: "#02151d !important",
  };

  const labelStyles = {
    display: "block",
    padding: "10px",
    boxShadow:
      "1px 2px 4px rgba(0, 0, 0, 0.5), inset 0 0 10px rgba(0, 0, 0, 0.3)",
    color: "white",
    fontWeight: "800",
    textShadow: "0 0 10px rgba(0, 0, 100, 0.5)",
    zIndex: "1",
  };

  const inputStyles = {
    width: "100%",
    padding: "6px 10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
  };

  const labelContainerStyles = {
    backgroundColor: "#1b5060",
    padding: "10px",
    color: "white",
  };

  const submitButtonStyles = {
    marginTop: "10px",
    padding: "8px 16px",
    backgroundColor: "#1b5060",
    color: "white",
    borderRadius: "4px",
    cursor: "pointer",
    float: "right",
  };

  const backgroundBlur = {
    filter: " blur(15px)",
    zIndex: "-1",
  };

  const renderCards = () => {
    const cards = [];
    for (let i = 0; i < numberOfPeople; i++) {
      const personId = uuidv4();
      const cardData = {
        id: personId,
        name: "",
        dateOfBirth: "",
        pronoun: "",
        religiousPreference: "",
      };
      cards.push(
        <div key={i} style={cardStyles}>
          <h3
            style={{ color: "#02151d", backgroundColor: "#ffffffCC" }}
            className="backgroundBlur"
          >
            Person {i + 1}
          </h3>
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
              name="proNoun"
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
    marginTop: "100px",
    ...goldLeafImageStyles,
  };
  if (loading) {
    return <>Checking Family</>;
  }
  try {
    const { me } = data;
    console.log(me);
    if (me.familyUsers.length > 0) {
      return <>You have created some family users.</>;
    }
  } catch (error) {}

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
      {numberOfPeople > 0 && (
        <button style={submitButtonStyles} onClick={handleSubmit}>
          Submit
        </button>
      )}
      {showModal && (
        <div style={modalBackdropStyles} onClick={handleModalClose}>
          <div style={modalStyles}>
            <h3>Your family members were added!</h3>
            {/* Add any additional content for the modal here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default FamilyComponent;
