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
import project3background from './assets/Project3Background.svg';
import Footer from './components/Footer/index';
import FamilyUser from './components/FamilyUser';
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
    marginTop: '-90px',
  };

  const footerStyles = {
    padding: '10px',
    color: 'white',
    textAlign: 'center',
  };

  return (
    <ApolloProvider client={client}>
      <Router>       
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/family' element={<Family/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/task' element={<Tasks/>}/>
        </Routes>      
      </Router>
    </ApolloProvider>
  );
}

export default App;
