import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function ProfileIcon(props){
    const navigate = useNavigate();
    const linkToFamilyUser = (id) =>{
        navigate(`/familyuser/${id}`);
    }

}

export default ProfileIcon;
