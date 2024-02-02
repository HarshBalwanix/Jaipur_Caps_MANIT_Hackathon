const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const facultyActions = require('../methods/faculty_actions');

//Sanity checks ;)
router.get('/', (req, res) => {
    res.json({sanity_checks: 'Welcome To Grading system backend'});
})

//User Actions
router.post('/register', authController.registerUser);
router.post('/login', authController.login);

//Faculty Actions
router.post('/addSubject', facultyActions.createSubjectByTeacher);

module.exports = router;
