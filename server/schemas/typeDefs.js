// const { gql } = require('apollo-server-express');

// const typeDefs = gql`
//   type User {
//     _id: ID
//     username: String
//     email: String
//     password: String   
//   }

//   type Auth {
//     token: ID!
//     user: User
//   }

//   type Query {    
//     me: User
//   }

//   type Mutation {    
//     login(email: String!, password: String!): Auth
//   }
// `;

// module.exports = typeDefs;

const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Family {
    _id: ID!
    username: String!
    email: String!
    password: String!
    image: String
    familyId: [FamilyUser!]!
    savedtask: [Task!]!
  }

  type Task {
    _id: ID!
    taskname: String!
    location: String!
    Date: String!
    taskId: String!
  }

  type FamilyUser {
    _id: ID!
    familyuserId: String!
    birthDay: String!
    proNoun: String
    religion: String
  }

  type Query {
    getFamilyById(id: ID!): Family
    getAllTasks: [Task!]!
    getFamilyUserById(id: ID!): FamilyUser
  }

  type Mutation {
    createFamily(username: String!, email: String!, password: String!, image: String): Family
    createTask(taskname: String!, location: String!, taskId: String!): Task
    createFamilyUser(familyuserId: String!, birthDay: String!, proNoun: String, religion: String): FamilyUser
    updateFamily(id: ID!, username: String, email: String, password: String, image: String): Family
    updateTask(id: ID!, taskname: String, location: String, Date: String, taskId: String): Task
    updateFamilyUser(id: ID!, familyuserId: String, birthDay: String, proNoun: String, religion: String): FamilyUser
    deleteFamily(id: ID!): Family
    deleteTask(id: ID!): Task
    deleteFamilyUser(id: ID!): FamilyUser

    # New mutations for authentication
    register(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Token
  }

  type Auth {
    token: ID!
  }

  type Token {
    token: ID!
  }
`;

module.exports = typeDefs;
