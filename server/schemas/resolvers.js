const { AuthenticationError } = require("apollo-server-express");
const { Family, Task, FamilyUser } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        try {
          // Ensure context.user._id exists and is valid
          const family = await Family.findOne({ _id: context.user._id })
            .populate("familyUsers")
            .populate("savedTasks");

          if (!family) {
            throw new Error("Family not found for the current user.");
          }

          return family;
        } catch (error) {
          throw new Error("Error while fetching data for the current user.");
        }
      } else {
        throw new AuthenticationError("You need to be logged in!");
      }
    },
    getFamilyUserById: async (parent, { id }) => {
      return FamilyUser.findOne({ _id: id });
    },
    getAllTasks: async (parent, args, context) => {
      // if (context.user) {
      return Task.find({});
      // }
      // throw new AuthenticationError("You need to be logged in!");
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
    createTask: async (parent, { taskname, location }, context) => {
      if (context.user) {
        try {
          // Ensure context.user._id exists and is valid
          const task = await Task.create({ taskname, location });
      

          if (!task) {
            throw new Error("Task was not created.");
          }

          return task;
          
        } catch (error) {
          throw new Error("Error while fetching data for the current user.");
        }
      }
      throw new AuthenticationError("You need to be logged in!");
      
    },
    createFamilyUser: async (
      parent,
      { dateOfBirth, proNoun, religion },
      context
    ) => {
      if (context.user) {
        const newFamilyUser = await FamilyUser.create({
          dateOfBirth,
          proNoun,
          religion,
        });
        // Update the Family document with the new familyUserId
        await Family.findByIdAndUpdate(context.user._id, {
          $push: { familyUsers: newFamilyUser._id },
        });

        return newFamilyUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // updateFamily: async (parent, { username, email }) => {},
    updateTask: async (
      parent,
      { taskId, taskname, location, date },
      context
    ) => {
      if (context.user) {
        const updatedTask = await Task.findByIdAndUpdate(
          { _id: taskId },
          { taskId, taskname, location, date },
          { new: true }
        );
        return updatedTask;
      }
      throw new AuthenticationError("You need to be logged in!");
      
      // if (context.user) {

      // }
      // throw new AuthenticationError("You need to be logged in!");
    },
    updateFamilyUser: async (
      parent,
      { familyUserId, dateOfBirth, proNoun, religion },
      context
    ) => {
      if (context.user) {
        const updatedFamilyUser = await FamilyUser.findByIdAndUpdate(
          { _id: familyUserId },
          { dateOfBirth, proNoun, religion },
          { new: true }
        );
        return updatedFamilyUser;
      }
      throw new AuthenticationError("You need to be logged in!");
     
    },
    // deleteFamily: async (parent, { username, email }) => {},
    deleteTask: async (parent, { id },context) => {
      if (context.user) {
        try {
          const deletedTask = await Task.deleteOne({_id:id})
          return deletedTask;
        } catch (error) {
          return "Error Deleting Task"
        }
        
      }
      throw new AuthenticationError("You need to be logged in!");
      //will add filter with auth is implemented
    },
    deleteFamilyUser: async (parent, { username, email },context) => {
      //will add filter with auth is implemented
      if (context.user) {
        
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
