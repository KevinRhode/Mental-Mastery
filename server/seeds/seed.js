const connection = require('../config/connection');
const { Task, FamilyUser, Family } = require('../models');
const taskData = require('./taskData');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing tasks
  await Task.deleteMany({});

  // Drop existing family users
  await FamilyUser.deleteMany({});

  // Drop existing family family users
  await Family.deleteMany({});
 
  // Add tasks to the collection and await the results
  await Task.collection.insertMany(taskData);

  // Add courses to the collection and await the results
//   await Course.collection.insertOne({
//     courseName: 'UCLA',
//     inPerson: false,
//     students: [...students],
//   });

  // Log out the seed data to indicate what should appear in the database
  console.table(Task);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
