import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

import backgroundImage from '../assets/ori_52043_51102fd328b18d2ccf3aaa0dd7232590303d15fe_golden-clock-on-turquoise-background-steampunk.jpg';

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
            {signupError && (
              <div className="error-message">
                <p className="error-text">{signupError}</p>
              </div>
            )}
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
          </form>
        </div>
      </div>
      <style jsx>{`
        .login-background {
          position: relative;
          min-height: 100vh;
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
          background-image: url(${backgroundImage});
          background-size: cover;
          background-position: center;
          filter: blur(8px);
          z-index: -1;
        }

        .container {
          max-width: 400px;
          width: 100%;
        }

        .card {
          background-image: url(${cardBackgroundImage});
          border-radius: 10px;
          padding: 20px;
          box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2), inset 0 0 10px rgba(0, 0, 0, 0.3);
          color: white;
          font-weight: 800; /* Increase the font-weight value for a bolder appearance */
          text-shadow: 0 0 8px rgba(0,0,100, 100);
        }
        .signup-link {
          display: block;
          margin-bottom: 10px;
          text-align: center;
        }

        .login-heading {
          text-align: center;
        }

        .form-group {
          margin-bottom: 10px;
        }

        .form-input {
          width: 100%;
          padding: 5px;
        }

        .submit-button {
          width: 100%;
        }
      `}</style>
    </div>
  );
}

export default Signup;
