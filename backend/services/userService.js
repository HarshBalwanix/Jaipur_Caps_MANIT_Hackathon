const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createUser = async (userData) => {
  try {
    const user = new User(userData);
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

const loginUser = async (email, password) => {
    const user = await User.findOne({ email });
  
    if (!user) {
      throw new Error('No user exist');
    }
    console.log(password)
    const passwordMatch = await bcrypt.compare(password, user.password);
  
    if (!passwordMatch) {
      throw new Error('Invalid username or password');
    }
  
    const token = jwt.sign({ user: user }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return {
      user,
      _id: user._id.toString(),
      token,
    };
  };

const getUserByUsername = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  getUserByUsername,
  loginUser
};
