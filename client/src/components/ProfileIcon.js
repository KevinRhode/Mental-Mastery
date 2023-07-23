import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom';
import logo from '../assets/profile-circle-svgrepo-com.svg';

    const tinyLogo={
      width: 50,
      height: 50,
    };
    const reglogo= {
      width: 66,
      height: 58,
    };


function ProfileIcon(props){

    const navigate = useNavigate();

    const linkToFamilyUser = (e) =>{
        const {id} = e.target;
        navigate(`/familyuser/${id}`);
    }
    // useEffect(() => {
      // Call the navigate function inside the useEffect hook
      // const linkToFamilyUser = (id) => {
      //   navigate(`/familyuser/${id}`);
      // };
  
      // Call the function when the component mounts
    //   linkToFamilyUser(props.profileId);
    // }, [props.profileId, navigate]);
    try {
      const {profileId} = props.props;

      return (
        <>
          <div style={{backgroundColor:"#FFF"}} id={profileId} onClick={linkToFamilyUser}>
              <img src={logo} style={tinyLogo} className='profileIcon' alt='profileIcon'/>
          </div>
          
        </>
      );
    } catch (error) {
      
      return (
        <>
          <div style={{backgroundColor:"#FFF"}} id={props} onClick={linkToFamilyUser}>
              <img src={logo} style={tinyLogo} className='profileIcon' alt='profileIcon'/>
          </div>
          
        </>
      );
    }

   

}

export default ProfileIcon;
