const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const familySchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },

  image: {

    type: String,

  },

  familyId: [familyuserId],

  savedtask: [taskSchema],


});

familySchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

familySchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Family = model('Family', familySchema);

module.exports = Family;