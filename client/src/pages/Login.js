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
    min-height: 100vh;
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
    padding: 20px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2), inset 0 0 10px rgba(0, 0, 0, 0.3);
    color: white;
    font-weight: 800;
    text-shadow: 0 0 10px rgba(0, 0, 100, 0.5);
    z-index: 1;
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

  .error-message {
    text-align: center;
    margin-top: 10px;
    font-weight: bold;
    text-shadow: 0 0 10px rgba(0, 0, 100, 0.5);
  }

  .error-text {
    color: Black;
    font-weight: bold;
    text-shadow: 0 0 10px rgba(0, 0, 100, 0.5);
  }

  .submit-button {
    width: 100%;
  }
`}</style>
    </div>
  );
}

export default Login;
