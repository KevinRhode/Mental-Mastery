
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Family {
    _id: ID!
    username: String!
    email: String!
    password: String!
    image: String
    familyUsers: [FamilyUser]
    savedTasks: [Task]
  }

  type Task {
    _id: ID!
    taskname: String
    location: String
    date: String
  }

  type FamilyUser {
    _id: ID!
    dateOfBirth: String
    proNoun: String
    religion: String
  }

  type Query {
    me: Family
    getAllTasks: [Task]
    getFamilyUserById(id: ID!): FamilyUser
  }

  type Mutation {    
    createTask(taskname: String!, location: String!): Task
    createFamilyUser(dateOfBirth: String!, proNoun: String, religion: String): FamilyUser
   
    updateTask(taskId:ID,taskname: String, location: String, date: String): Task
    updateFamilyUser(familyUserId:ID, dateOfBirth: String, proNoun: String, religion: String): FamilyUser
   
    deleteTask(id: ID!): Task
    deleteFamilyUser(id: ID!): FamilyUser

    # New mutations for authentication
    register(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }

  type Auth {
    token: ID!
    user: Family
  }

`;

module.exports = typeDefs;
