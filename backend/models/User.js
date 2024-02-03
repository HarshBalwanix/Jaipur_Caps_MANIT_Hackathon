const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'teacher'], required: true },
  name: { type: String, required: true },
  imgURL: { type: String, required: false },
  mobileNumber: { type: String, required: false },
  id: {type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
