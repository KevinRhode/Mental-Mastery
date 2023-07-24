import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfileIcon from '../components/ProfileIcon';
import Task from '../components/Tasks'
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

const Dashboard = () => {
    const {loading,data}= useQuery(QUERY_ME);

    if (loading) {
      
      return(<>
        Loading Information
        </>);
      
    }
    console.log(data);
    console.log(data.me.familyUsers);
    
  return <div style={{display:'flex',flexDirection:'column' }}>
    <div style={{display:'flex'}}>
  {data.me.familyUsers.map((familyuser)=>(
    <ProfileIcon key={familyuser._id} props={familyuser}/>
  ))}</div>
  <div>
  <Task/>
  </div>
  
  </div>;
};

export default Dashboard;
