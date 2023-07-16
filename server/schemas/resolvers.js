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
    createFamilyUser: async (parent, { birthDay,proNoun,religion },context) => {
      const familyUser = await FamilyUser.create({birthDay, proNoun,religion})
      return familyUser;
      // if (context.user) {
        
      // }
      // throw new AuthenticationError("You need to be logged in!");
    },
    // updateFamily: async (parent, { username, email }) => {},
    updateTask: async (parent, { taskId,taskname,location,date },context) => {
      const updatedTask = await Task.findByIdAndUpdate(
        {_id: taskId},
        {taskId,taskname,location,date },
        {new:true}
      )
      return updatedTask;
      // if (context.user) {
        
      // }
      // throw new AuthenticationError("You need to be logged in!");
    },
    updateFamilyUser: async (parent, { familyUserId,birthDay,proNoun,religion  },context) => {
      const updatedFamilyUser = await FamilyUser.findByIdAndUpdate(
        {_id:familyUserId},
        {birthDay,proNoun,religion },
        {new:true}
      )
      return updatedFamilyUser;
    },
    // deleteFamily: async (parent, { username, email }) => {},
    deleteTask: async (parent, { _id }) => {
      //will add filter with auth is implemented
    },
    deleteFamilyUser: async (parent, { username, email }) => {
      //will add filter with auth is implemented
    },   
  },
};

module.exports = resolvers;
