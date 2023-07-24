
import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_FAMILY_USER,QUERY_ALL_TASKS } from '../utils/queries';
import Tasks from './Tasks';


import cardBackgroundImage from '../assets/depositphotos_38252213-stock-photo-gold-leaf-on-buddha-sculpture.jpg';

function FamilyUserComponent() {
    const card = {
        backgroundImage: `url(${cardBackgroundImage})`,
        borderRadius: '10px',
        topMargin: '40px',
        padding: '20px',
        boxShadow: '1px 2px 4px rgba(0, 0, 0, 0.2), inset 0 0 10px rgba(0, 0, 0, 0.3)',
        color: '#02151d',
        fontWeight: '800',
        // textShadow: '0 0 8px rgba(0,0,100, 100)'
    }
        const whiteBG = {
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            
            
        }
    const { id } = useParams();
    const { loading, data } = useQuery(GET_FAMILY_USER, {
        variables: { getFamilyUserById: id },
    });
    const { loading: taskloading, err, data:taskData } = useQuery(QUERY_ALL_TASKS);


    const familyUser = data?.getFamilyUserById || {};

    if (loading) {
        return <p>Loading User information...</p>;
    }
    if (taskloading){
        return (<p>Loading Task Information...</p>);
    }

    return (
        <div>
            <div>
                {taskData && (<Tasks tasks={taskData.getAllTasks} />)}
            </div>
            <div className="login-background">
                <div className="background-blur" />
                <div className="container my-1">
                    <div className="card" style={card}>
                        {familyUser && (
                            <div style={whiteBG}>
                                <h3 style={{textShadow: '1px 3px 4px rgba(0,0,80, 100)'}}>Family User Information</h3>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <p>
                                            <strong>Family User ID:</strong> {familyUser._id}
                                        </p>
                                    </li>
                                    <li className="list-group-item">
                                        <p>
                                            <strong>Birthday:</strong> {familyUser.dateOfBirth}
                                        </p>
                                    </li>
                                    <li className="list-group-item">
                                        <p>
                                            <strong>Pronoun:</strong> {familyUser.proNoun}
                                        </p>
                                    </li>
                                    <li className="list-group-item">
                                        <p>
                                            <strong>Religion:</strong> {familyUser.religion}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
           

        </div>
    );
}



export default FamilyUserComponent;
