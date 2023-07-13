import React from 'react';
import { useQuery } from '@apollo/client';

const Home = () => {
  const { loading, data } = useQuery();
  // const thoughts = data?.thoughts || [];
  // example

  return (
    <main>
      <div className="">
        <div
          className=""
          style={{ }}
        >
         
        </div>
      </div>
    </main>
  );
};

export default Home;
