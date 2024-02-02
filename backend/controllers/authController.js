const bcrypt = require('bcrypt');
const userService = require('../services/userService');
const Faculty = require('../models/facultyModel');
const Student = require('../models/studentModel');

const registerUser = async (req, res) => {
    const { email, password, role, name, id, imgURL, mobileNumber, collegeName } = req.body;

    try {
        const existingUser = await userService.getUserByUsername(email);

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userService.createUser({
            email,
            password: hashedPassword,
            role,
            name,
            id,
            imgURL,
            mobileNumber
        });

       
        if (role === 'teacher') {
            
            const newFaculty = new Faculty({
                userId: newUser._id, 
                subjects: [], 
                collegeName 
            });
            await newFaculty.save();
        } else if (role === 'student') {
           
            const newStudent = new Student({
                userId: newUser._id, 
                subjectsEnrolled: [] 
            });
            await newStudent.save();
        }

        res.json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
};


const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const token = await userService.loginUser(email, password);
      if (!token) return res.status(401).json({ message: 'Invalid credentials' });
      res.setHeader('Authorization', `Bearer ${token}`);
      res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };

module.exports = {
    registerUser,
    login
};
