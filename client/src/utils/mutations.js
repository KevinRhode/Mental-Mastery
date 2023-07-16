import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation Register($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      user {
        _id
        email
        username
      }
      token
    }
  }
`;
export const CREATE_TASK = gql`
  mutation CreateTask($taskname: String!, $location: String!) {
    createTask(taskname: $taskname, location: $location) {
      _id
      date
      location
      taskname
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation UpdateTask(
    $taskId: ID
    $taskname: String
    $location: String
    $date: String
  ) {
    updateTask(
      taskId: $taskId
      taskname: $taskname
      location: $location
      date: $date
    ) {
      _id
      date
      location
      taskname
    }
  }
`;

export const CREATE_FAMILY_USER = gql`
  mutation CreateFamilyUser(
    $birthDay: String!
    $proNoun: String
    $religion: String
  ) {
    createFamilyUser(
      birthDay: $birthDay
      proNoun: $proNoun
      religion: $religion
    ) {
      _id
      birthDay
      proNoun
      religion
    }
  }
`;
export const UPDATE_FAMILY_USER = gql`
  mutation UpdateFamilyUser(
    $familyUserId: ID
    $birthDay: String
    $proNoun: String
    $religion: String
  ) {
    updateFamilyUser(
      familyUserId: $familyUserId
      birthDay: $birthDay
      proNoun: $proNoun
      religion: $religion
    ) {
      _id
      birthDay
      proNoun
      religion
    }
  }
`;
