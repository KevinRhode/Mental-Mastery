
import React from 'react';
import ReactDOM from 'react-dom';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_FAMILY_USER } from '../utils/queries';
import Tasks from './Tasks';


import cardBackgroundImage from '../assets/depositphotos_38252213-stock-photo-gold-leaf-on-buddha-sculpture.jpg';

function FamilyUserComponent() {
    const { id } = useParams();
    const { loading, data } = useQuery(GET_FAMILY_USER, {
        variables: { getFamilyUserById: id },
    });

    const familyUser = data?.getFamilyUserById || {};

    if (loading) {
        return <p>Loading User information...</p>;
    }

    return (
        <div>
            <div>
                <Tasks />
            </div>
            <div className="login-background">
                <div className="background-blur" />
                <div className="container my-1">
                    <div className="card">
                        {familyUser && (
                            <>
                                <h3>Family User Information</h3>
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
                            </>
                        )}
                    </div>
                </div>
            </div>
            <style jsx>{
                `
                .card {
                    background-image: url(${cardBackgroundImage});
                    border-radius: 10px;
                    top margin: 40px;
                    padding: 20px;
                    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2), inset 0 0 10px rgba(0, 0, 0, 0.3);
                    color: #02151d;
                    font-weight: 800;
                    text-shadow: 0 0 8px rgba(0,0,100, 100);
                    
            }
                
                `
            }

            </style>

        </div>
    );
}



export default FamilyUserComponent;
