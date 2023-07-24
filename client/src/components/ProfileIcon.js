import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom';
import logo from '../assets/profile-circle-svgrepo-com.svg';

    const tinyLogo={
      width: 50,
      height: 50,
      backgroundColor:'#DDB047',
      cursor:'pointer',
      borderRadius: '1rem'
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
   
    try {
      const {_id:profileId} = props.props;

      return (
        <>
          {/* <Link to='/familyuser'>
          <img src={logo} style={tinyLogo} className='profileIcon' alt='profileIcon'/>
          </Link> */}
          <div style={{margin:'0 0.25rem'}} onClick={linkToFamilyUser}>
              <img src={logo} style={tinyLogo} id={profileId} className='profileIcon' alt='profileIcon'/>
          </div>
          
        </>
      );
    } catch (error) {
      
      return (
        <>
          <div id={props} onClick={linkToFamilyUser}>
              <img src={logo} style={tinyLogo} className='profileIcon' alt='profileIcon'/>
          </div>
          
        </>
      );
    }

   

}

export default ProfileIcon;
