// import React, { useState } from 'react';
// import Auth from '../utils/auth';
// import { useQuery } from '@apollo/client';
// import { GET_FAMILY_USER } from '../utils/queries';

// const FamilyUserComponent = () => {
//     //   const [familyUser, setFamilyUser] = useState(null);
//     // const token = Auth.loggedIn() ? Auth.getToken() : null;
//     // const authContext = {
//     //     headers: { Authorization: `Bearer ${token}` },
//     // };

//     const { loading, data } = useQuery(GET_FAMILY_USER);

//     const familyUser = data?.getFamilyUserById || {}


//     // useEffect(() => {
//     //     if (familyUser) {
//     //         createFamilyUser({ variables: familyUser })
//     //             .then(response => {
//     //                 // Handle the response if needed 
//     //                 console.log("User information")
//     //             })
//     //             .catch(error => {
//     //                 // Handle the error if needed
//     //                 console.log(" Refer console for log")
//     //             });
//     //     }
//     // }, [createFamilyUser, familyUser]);

//     if (loading) {
//         return <p>Loading User information...</p>;
//     }

//     // if (error) {
//     //     return <p>Error fetching User information</p>;
//     // }

//     return (
//         <div>
//             {familyUser && (
//                 <>
//                     <h3>Family User Information</h3>
//                     <p>
//                         <strong>Family User ID:</strong> {familyUser._id}
//                     </p>
//                     <p>
//                         <strong>Birthday:</strong> {familyUser.birthDay}
//                     </p>
//                     <p>
//                         <strong>Pronoun:</strong> {familyUser.proNoun}
//                     </p>
//                     <p>
//                         <strong>Religion:</strong> {familyUser.religion}
//                     </p>
//                 </>
//             )}
//         </div>
//     );
// };

// export default FamilyUserComponent;

// import React from 'react';
// import { useQuery } from '@apollo/client';
// import { GET_FAMILY_USER } from '../utils/queries';

// function FamilyUserComponent(props) {
//     const { loading, data } = useQuery(GET_FAMILY_USER);

//     const familyUser = data?.getFamilyUserById || {};

//     if (loading) {
//         return <p>Loading User information...</p>;
//     }

//     return (
//         <div>
//             {props.getFamilyUserById && <p>{props.getFamilyUserById}</p>}
//             {familyUser && (
//                 <>
//                     <h3>Family User Information</h3>
//                     <ul className="list-group">
//                         <li className="list-group-item">
//                             <p>
//                                 <strong>Family User ID:</strong> {familyUser._id}
//                             </p>
//                         </li>
//                         <li className="list-group-item">
//                             <p>
//                                 <strong>Birthday:</strong> {familyUser.birthDay}
//                             </p>
//                         </li>
//                         <li className="list-group-item">
//                             <p>
//                                 <strong>Pronoun:</strong> {familyUser.proNoun}
//                             </p>
//                         </li>
//                         <li className="list-group-item">
//                             <p>
//                                 <strong>Religion:</strong> {familyUser.religion}
//                             </p>
//                         </li>
//                     </ul>
//                 </>
//             )}
//         </div>
//     );
// }

// export default FamilyUserComponent;

import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_FAMILY_USER } from '../utils/queries';

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
