const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
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

  Date: {
    type: Date,
    default: Date.now,
  },
  taskId: {
    type: String,
    required: true,
  },
});

const Task = model("Task", taskSchema);

module.exports = Task;
