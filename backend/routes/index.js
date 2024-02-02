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
router.post('/listSubjectsFaculty', facultyActions.listSubjectsByTeacher);
router.post('/addStudent2Subject', facultyActions.addStudentToSubject);
router.post('/listSubjectEnrolled', facultyActions.listEnrolledStudents);
router.post('/createAssignment', facultyActions.createAssignmentForSubject);

module.exports = router;  
