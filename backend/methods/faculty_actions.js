const Faculty = require('../models/facultyModel');
const Subject = require('../models/subjectModel'); // Adjust path as necessary
const User = require('../models/User'); // Adjust path as necessary

const facultyActions = {
  
  // Create a new subject by a teacher
  createSubjectByTeacher: async (req, res) => {
    const { teacherId, subjectDetails } = req.body;
    try {
      // Ensure the teacherId belongs to a user with a teacher role
      const teacher = await User.findById(teacherId);
  
      // Explicitly handle the case where the teacher is not found
      if (!teacher) {
        console.log('Teacher not found.');
        return res.status(404).send({ message: 'Teacher not found.' });
      }
  
      if (teacher.role !== 'teacher') {
        console.log('Only teachers can create subjects.');
        return res.status(403).send({ message: 'Only teachers can create subjects.' });
      }
  
      const subject = new Subject({ ...subjectDetails, createdBy: teacherId });
      await subject.save();
  
      // Now, link this subject with the corresponding faculty entry
      const faculty = await Faculty.findOne({ userId: teacherId });
      if (!faculty) {
        // Handle case where no matching faculty is found
        console.log('Matching faculty for this teacher not found.');
        // Optionally delete the just-created subject since no corresponding faculty was found
        await Subject.findByIdAndDelete(subject._id);
        return res.status(404).send({ message: 'Matching faculty for this teacher not found.' });
      }
  
      faculty.subjects.push(subject._id);
      await faculty.save();
  
      console.log('Subject created successfully by teacher and added to faculty:', teacherId);
      return res.status(201).send(subject);
    } catch (error) {
      console.error('Error creating subject by teacher:', error);
      return res.status(500).send({ message: "ERROR, teacher not found" });
    }
  },
  

  // List all subjects created by a specific teacher
  listSubjectsByTeacher: async (teacherId) => {
    try {
      const subjects = await Subject.find({ createdBy: teacherId });
      console.log('Subjects retrieved successfully for teacher:', teacherId);
      return subjects;
    } catch (error) {
      console.error('Error retrieving subjects for teacher:', error);
      throw error;
    }
  },

  // Existing methods (addStudentToSubject, etc.) can remain unchanged
};

module.exports = facultyActions;
