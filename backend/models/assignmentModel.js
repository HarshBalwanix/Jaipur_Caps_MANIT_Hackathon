const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  assignmentId: { type: String, required: true },
  problemStatement: { type: String, required: true },
  pdfAttachment: { type: String, required: true },
  idealSolutionPdfAttachment: { type: String, required: true }
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;
