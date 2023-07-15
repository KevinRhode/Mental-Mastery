import React from "react";
import { useQuery } from "@apollo/client";
import Header from '../components/Header'
import Footer from '../components/Footer'
const Home = () => {
  // const { loading, data } = useQuery();
  // const thoughts = data?.thoughts || [];
  // example
  return (
    <>
      <Header />
      <div className="a">
        <div className="a">This is Text</div>
      </div>
      <Footer/>
    </>
  );
};
export default Home;
