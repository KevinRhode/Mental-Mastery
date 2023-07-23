import React from "react";
import ReactDOM from "react-dom";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_FAMILY_USER, QUERY_ME } from "../utils/queries";
import Tasks from "./Tasks";
import ProfileIcon from "./ProfileIcon";

function FamilyUserComponent() {
  const { id } = useParams();
  const { loading: dataLoading, data: meData } = useQuery(QUERY_ME);
//   const { loading, data } = useQuery(GET_FAMILY_USER, {
//     variables: { getFamilyUserById: id },
//   });
//data?.getFamilyUserById ||
  const familyUser =  {};

//   if (loading) {
//     return <p>Loading User information...</p>;
//   }
  if (dataLoading) {
    
    return <p>Loading User information...</p>;
  }
  // ReactDOM.render(<Tasks />, document.getElementById('root'));

  // const renderPage = () => {
  //     return (<Tasks />);

  // };
  try {
    console.log(meData);
    const { _id: profileId } = meData.me.familyUsers[0];

    return (
      <div>
        {meData ? <>Loading Icons</> : <ProfileIcon props={{ profileId }} />}
  
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
  } catch (error) {

  }

  
}

export default FamilyUserComponent;
