import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email      
    }
  }
`;


export const GET_FAMILY_USER = gql`
query Query($getFamilyUserById: ID!) {
  getFamilyUserById(id: $getFamilyUserById) {
    _id
    birthDay
    proNoun
    religion
  }
}
`;