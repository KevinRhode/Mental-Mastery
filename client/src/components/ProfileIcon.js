import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });

function ProfileIcon(props){

    const navigate = useNavigate();

    const linkToFamilyUser = (id) =>{
        navigate(`/familyuser/${id}`);
    }

    return (
        <div onClick={linkToFamilyUser(props.id)}>
            <img src={logo} style={styles.tinyLogo} className='profileIcon' alt='profileIcon'/>
        </div>
    );

}

export default ProfileIcon;
