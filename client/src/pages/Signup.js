import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.firstName + ' ' + formState.lastName,
      },
    });
    const token = mutationResponse.data.register.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div
      className="container my-1"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ maxWidth: '400px', width: '100%' }}>
        <Link to="/login" style={{ display: 'block', marginBottom: '10px', textAlign: 'center' }}>
          ← Go to Login
        </Link>

        <h2 style={{ textAlign: 'center' }}>Signup</h2>
        <form onSubmit={handleFormSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="firstName" style={{ display: 'block', marginBottom: '5px' }}>
              First Name:
            </label>
            <input
              placeholder="First"
              name="firstName"
              type="text"
              id="firstName"
              style={{ width: '100%', padding: '5px' }}
              onChange={handleChange}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="lastName" style={{ display: 'block', marginBottom: '5px' }}>
              Last Name:
            </label>
            <input
              placeholder="Last"
              name="lastName"
              type="text"
              id="lastName"
              style={{ width: '100%', padding: '5px' }}
              onChange={handleChange}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
              Email:
            </label>
            <input
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              style={{ width: '100%', padding: '5px' }}
              onChange={handleChange}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="pwd" style={{ display: 'block', marginBottom: '5px' }}>
              Password:
            </label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              style={{ width: '100%', padding: '5px' }}
              onChange={handleChange}
            />
          </div>
          <div style={{ textAlign: 'right' }}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
