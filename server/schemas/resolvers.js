const { AuthenticationError } = require("apollo-server-express");
const { Family, Task, FamilyUser } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return Family.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await Family.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    
    register: async (parent, { username, email, password }) => {
      const user = await Family.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    createTask: async (parent, { taskname, location },context) => {
      const task =await Task.create({taskname,location});
      return task;
    },
    createFamilyUser: async (parent, { familyuserId, birthDay,proNoun,religion },context) => {
      const familyUser = await FamilyUser.create({familyuserId,birthDay, proNoun,religion})
      return familyUser;
      // if (context.user) {
        
      // }
      // throw new AuthenticationError("You need to be logged in!");
    },
    // updateFamily: async (parent, { username, email }) => {},
    updateTask: async (parent, { taskToUpdate },context) => {
      const updatedTask = await Task.findByIdAndUpdate(
        {_id: taskToUpdate._id},
        {...taskToUpdate},
        {new:true}
      )
      // if (context.user) {
        
      // }
      // throw new AuthenticationError("You need to be logged in!");
    },
    updateFamilyUser: async (parent, { familyUserToUpdate },context) => {

    },
    // deleteFamily: async (parent, { username, email }) => {},
    deleteTask: async (parent, { username, email }) => {},
    deleteFamilyUser: async (parent, { username, email }) => {},
    // createFamily(username: String!, email: String!, password: String!, image: String): Family
    // createTask(taskname: String!, location: String!, taskId: String!): Task
    // createFamilyUser(familyuserId: String!, birthDay: String!, proNoun: String, religion: String): FamilyUser
    // updateFamily(id: ID!, username: String, email: String, password: String, image: String): Family
    // updateTask(id: ID!, taskname: String, location: String, Date: String, taskId: String): Task
    // updateFamilyUser(id: ID!, familyuserId: String, birthDay: String, proNoun: String, religion: String): FamilyUser
    // deleteFamily(id: ID!): Family
    // deleteTask(id: ID!): Task
    // deleteFamilyUser(id: ID!): FamilyUser
  },
};

module.exports = resolvers;
