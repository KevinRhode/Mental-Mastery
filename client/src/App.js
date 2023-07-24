import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header'; // Make sure the import path is correct
import Home from './pages/Home';
import Family from './components/Family';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Tasks from './components/Tasks';
import TaskDash from './components/testDash';
import project3background from './assets/Project3Background.svg';
import Footer from './components/Footer/index';
import Nav from './components/Nav'

import FamilyUser from './components/FamilyUser';
import Dashboard from './pages/Dashboard';
// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const appStyles = {
    backgroundImage: `url(${project3background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    margin: 0,
    padding: 0,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  const headerStyles = {
    padding: '20px',
    color: 'white',
    textAlign: 'center',
    zIndex: 1,
    position: 'relative',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  };

  const navButtonsStyles = {
    display: 'flex',
    justifyContent: 'center',
  };

  const navButtonStyle = {
    margin: '0 40px',
    color: 'white',
    textDecoration: 'none',
  };

  const contentStyles = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: '-90px',
  };

  const footerStyles = {
    padding: '10px',
    color: 'white',
    textAlign: 'center',
  };

  return (
    
      <ApolloProvider client={client}>
        <div style={appStyles}>
        <Header /> {/* Render the Header component here */}
        <Nav/>
        {/* <div style={headerStyles}> */}
          {/* <div style={navButtonsStyles}> */}
            {/* <Link to="/login" style={navButtonStyle}>
              Login
            </Link>
            <Link to="/signup" style={navButtonStyle}>
              Sign Up
            </Link>
            <Link to="/" style={navButtonStyle}>
              Dashboard
            </Link>
            <Link to="/family" style={navButtonStyle}>
              Family Size
            </Link>
            <Link to="/familyuser" style={navButtonStyle}>
              FamilyUser
            </Link>
            <Link to="/task" style={navButtonStyle}>
              Tasks
            </Link>
            <Link to="/task" style={navButtonStyle}>
              Tasks
            </Link> */}
          {/* </div> */}
        {/* </div> */}
        <div style={contentStyles}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path="/family" element={<Family />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/task" element={<Tasks />} />
            <Route path='/taskDash' element={<TaskDash/>}/>
            <Route path="/familyuser" element={<FamilyUser />} />
            <Route path="/familyuser/:id" element={<FamilyUser />} />
          </Routes>
        </div>
        <Footer />
        </div>
      </ApolloProvider>
    
  );
}

export default App;
