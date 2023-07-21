import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  // const { loading, data } = useQuery();
  // const thoughts = data?.thoughts || [];
  // example
  return (
    <>
     
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', paddingTop: '50px' }}> {/* Add paddingTop to create space */}
        <div style={{ fontSize: '4rem', color: '#02151d', textAlign: 'center', marginTop: '-20px', padding: '20px', marginBottom: '50px' }}>  
          Welcome to Mental Mastery! <br/>Unlock Your Mind. Master Your Tasks.
        </div>
      </div>
    </>
  );
};

export default Home;
