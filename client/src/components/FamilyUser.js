
import React from 'react';
import ReactDOM from 'react-dom';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_FAMILY_USER } from '../utils/queries';
import Tasks from './Tasks';


function FamilyUserComponent() {
    const { id } = useParams();
    const { loading, data } = useQuery(GET_FAMILY_USER, {
        variables: { getFamilyUserById: id },
    });

    const familyUser = data?.getFamilyUserById || {};

    if (loading) {
        return <p>Loading User information...</p>;
    }


    // ReactDOM.render(<Tasks />, document.getElementById('root'));



    // const renderPage = () => {
    //     return (<Tasks />);


    // };


    return (
        <div>
            <div>
                <Tasks />
            </div>
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
                                <strong>Birthday:</strong> {familyUser.birthDay}
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
    );
}



export default FamilyUserComponent;
