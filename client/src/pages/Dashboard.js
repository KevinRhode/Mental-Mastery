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
    
  return <>
  {data.me.familyUsers.map((familyuser)=>(
    <ProfileIcon key={familyuser._id} props={familyuser}/>
  ))}
  
  <Task/>
  </>;
};

export default Dashboard;
