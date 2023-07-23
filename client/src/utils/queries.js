import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      image
      savedTasks {
        _id
        taskname
        location
        date
      }
      familyUsers {
        _id
        dateOfBirth
        proNoun
        religion
      }
    }
  }
`;

export const QUERY_ALL_TASKS = gql`
  query GetAllTasks {
    getAllTasks {
      _id
      date
      location
      taskname
    }
  }
  `;

export const GET_FAMILY_USER = gql`
query Query($getFamilyUserById: ID!) {
  getFamilyUserById(id: $getFamilyUserById) {
    _id
    dateOfBirth
    proNoun
    religion
  }
}
`;
