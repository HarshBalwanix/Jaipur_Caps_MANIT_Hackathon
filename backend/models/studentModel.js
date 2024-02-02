const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  subjectsEnrolled: [{
    subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
    assignmentsGrades: [{
      assignmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Assignment', required: true },
      grade: { type: String, required: true }, 
      submissionPdf: { type: String, required: false }, //link
      feedback: { type: String, required: false },
      plagarism: { type: String, required: false }
    }]
  }]
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
