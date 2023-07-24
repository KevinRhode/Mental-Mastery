import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

import backgroundImage from '../assets/ori_52043_51102fd328b18d2ccf3aaa0dd7232590303d15fe_golden-clock-on-turquoise-background-steampunk.jpg';

import cardBackgroundImage from '../assets/depositphotos_38252213-stock-photo-gold-leaf-on-buddha-sculpture.jpg';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
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
      <div className="container my-1">
        <div className="card">
          <Link to="/signup" className="signup-link">
            ← Go to Signup
          </Link>

          <h2 className="login-heading">Login</h2>

          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address:</label>
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
            {error && (
              <div className="error-message">
                <p className="error-text">you chose...poorly 🧙‍♂️</p>
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
          background-image: url(${backgroundImage});
          background-size: cover;
          background-position: center;
          filter: blur(15px);
          z-index: -1;
        }
  .login-background {
    position: relative;
    
    display: flex;
    justify-content: center;
  
    background-size: cover;
    background-position: center;
  }

  .container {
    max-width: 400px;
    width: 100%;
  }

  .card {
    background-image: url(${cardBackgroundImage});
    border-radius: 10px;
    top margin: 40px;
    padding: 20px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2), inset 0 0 10px rgba(0, 0, 0, 0.3);
    color: white ;
    font-weight: 800;
    text-shadow: 0 0 8px rgba(0,0,100, 100);
    
  }

  .signup-link {
    display: block;
    margin-bottom: 10px;
    text-align: center;
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
    padding: 8px 16px;
  }
`}</style>
    </div>
  );
}

export default Login;
