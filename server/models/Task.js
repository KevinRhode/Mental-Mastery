const { Schema, model } = require("mongoose");

const { formatedCreatedAt } = require("../utils/helpers");

const taskSchema = new Schema(
  {
    // TaskName
    // Location
    // Date
    // TaskId

    taskname: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      default: Date.now,
      get: formatedCreatedAt,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Task = model("Task", taskSchema);

module.exports = Task;
