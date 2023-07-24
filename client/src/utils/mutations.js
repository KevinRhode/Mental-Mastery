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
    $dateOfBirth: String!
    $proNoun: String
    $religion: String
  ) {
    createFamilyUser(
      dateOfBirth: $dateOfBirth
      proNoun: $proNoun
      religion: $religion
    ) {
      _id
      dateOfBirth
      proNoun
      religion
    }
  }
`;
export const UPDATE_FAMILY_USER = gql`
  mutation UpdateFamilyUser(
    $familyUserId: ID
    $dateOfBirth: String
    $proNoun: String
    $religion: String
  ) {
    updateFamilyUser(
      familyUserId: $familyUserId
      dateOfBirth: $dateOfBirth
      proNoun: $proNoun
      religion: $religion
    ) {
      _id
      dateOfBirth
      proNoun
      religion
    }
  }
`;

export const DELETE_TASK = gql`
mutation DeleteTask($deleteTaskId: ID!) {
  deleteTask(id: $deleteTaskId) {
    _id
    date
    location
    taskname
  }
}`;
