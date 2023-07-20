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

export const QUERY_ALL_TASKS = gql