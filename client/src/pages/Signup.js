import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

import cardBackgroundImage from '../assets/depositphotos_38252213-stock-photo-gold-leaf-on-buddha-sculpture.jpg';

function Signup(props) {
  const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);
  const [signupError, setSignupError] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
          username: formState.firstName + ' ' + formState.lastName,
        },
      });
      const token = mutationResponse.data.register.token;
      Auth.login(token);
    } catch (e) {
      setSignupError('hey....try again.');
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  // const handleButtonClick = () => {
  //   clickSound.play();
  //   handleFormSubmit();
  // };
  return (
    <div className="login-background">
      <div className="background-blur" />
      {/* ... */}
      <div className="container my-1">
        <div className="card">
          <Link to="/login" className="signup-link">
            ← Go to Login
          </Link>

          <h2 className="login-heading">Signup</h2>
          <form onSubmit={handleFormSubmit}>
            {/* ... */}
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                placeholder="Last"
                name="lastName"
                type="text"
                id="lastName"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                placeholder="youremail@test.com"
                name="email"
                type="email"
                id="email"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password:</label>
              <input
                placeholder="******"
                name="password"
                type="password"
                id="pwd"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="submit-button">Submit</button>
            </div>
            {signupError && (
              <div className="error-message">
                <p className="error-text">{signupError}</p>
              </div>
            )}
          </form>
        </div>
      </div>
      <style jsx>{`
        .login-background {
          position: relative;
          
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .background-blur {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          filter: blur(15px);
          z-index: -1;
        }

        .container {
          max-width: 400px;
          width: 100%;
          top margin: 40px;
        }

        .card {
          background-image: url(${cardBackgroundImage});
          border-radius: 10px;
          padding: 20px;
          top margin: 40px;
          box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2), inset 0 0 10px rgba(0, 0, 0, 0.3);
          color: white;
          font-weight: 800; /* Increase the font-weight value for a bolder appearance */
          text-shadow: 0 0 8px rgba(0,0,100, 100);
        }
        .signup-link {
          display: block;
          margin-bottom: 10px;
          text-align: center;
          text-size: 10px;
        }

        .login-heading {
          text-align: center;
          color: #02151d !important;

        }

        .form-group {
          margin-bottom: 10px;
        }

        .form-input {
          width: 100%;
          padding: 5px;
        }
        .error-message {
          highlight: red
          text-align: center;
          margin-top: 10px;
          font-weight: bold;
          text-shadow: 0 0 10px rgba(0, 0, 100, 0.5);
        }
        .error-text {
          color: black;
          text-align: center;
          font-size: 3rem;
          font-weight: bold;
          text-shadow: 3px 3px 8px rgba(255, 215, 0, 0.5); /* Adjust the shadow color and blur for gold effect */
        }
      
        .submit-button {
          width: 100%;
          background-color: #1b5060 !important;
          color: white;
          padding: 8px 16px;        }
      `}</style>
    </div>
  );
}

export default Signup;
