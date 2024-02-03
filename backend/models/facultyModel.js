const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }],
  collegeName: { type: String, required: true }
});

const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;
