import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleDashboardClick = () => {
    setShowWelcome(false);
  };

  return (
    <>
      {/* <Header /> */}
      {showWelcome && ( // Conditional rendering based on showWelcome state
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            paddingTop: "50px",
          }}
        >
          <div
            style={{

              fontSize: "2rem",
              color: "#FFFFFF",
              textAlign: "center",
              marginTop: "-20px",
              padding: "20px",
              marginBottom: "50px",
              cursor: "pointer", // Add cursor pointer to indicate the message is clickable
            }}
            onClick={handleDashboardClick} // Call handleDashboardClick on click
          >
            Welcome to Mental Mastery! <br /> Unlock Your Mind. Master Your
            Tasks. <br />

            Click to Begin
          </div>
        </div>
      )}
      {/* <Link to="/family-dashboard">Go to Family Dashboard</Link> */}
      {/* <Footer /> */}
    </>
  );
};

export default Home;
