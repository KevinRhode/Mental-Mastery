import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

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
        <Link to="/signup" style={{ display: 'block', marginBottom: '10px', textAlign: 'center' }}>
          ← Go to Signup
        </Link>

        <h2 style={{ textAlign: 'center' }}>Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
              Email address:
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
          {error ? (
            <div>
              <p className="error-text" style={{ textAlign: 'center' }}>
                you chose...poorly 🧙‍♂️
              </p>
            </div>
          ) : null}
          <div style={{ textAlign: 'right' }}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
