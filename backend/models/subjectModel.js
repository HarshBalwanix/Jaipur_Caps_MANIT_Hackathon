const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }, // Example types could be "Lecture", "Lab", etc.
  studentsEnrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
  assignmentsList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Assignment' }]
});

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;
