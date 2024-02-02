const Faculty = require('../models/facultyModel');
const Student = require('../models/studentModel');
const Subject = require('../models/subjectModel'); // Adjust path as necessary
const User = require('../models/User'); // Adjust path as necessary

const facultyActions = {
  

  createSubjectByTeacher: async (req, res) => {
    const { teacherId, subjectDetails } = req.body;
    try {
    
      const teacher = await User.findById(teacherId);
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
  
      
      const faculty = await Faculty.findOne({ userId: teacherId });
      if (!faculty) {
      
        console.log('Matching faculty for this teacher not found.');
       
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
  

  listSubjectsByTeacher: async (req, res) => {
    const { teacherId } = req.body;
    try {
    
      const teacher = await User.findById(teacherId);
      if (!teacher || teacher.role !== 'teacher') {
        console.log('Invalid teacher ID or the user is not a teacher.');
        return res.status(404).json({ error: 'Invalid teacher ID or the user is not a teacher.' });
      }
  
    
      const faculty = await Faculty.findOne({ userId: teacherId });
      if (!faculty) {
        console.log('Faculty not found for this teacher.');
        return res.status(404).json({ message: 'Faculty not found for this teacher.' });
      }
  
     
      const subjects = await Subject.find({
        '_id': { $in: faculty.subjects }
      }); 
  
      if (subjects.length === 0) {
        console.log('No subjects found for this teacher.');
        return res.status(404).json({ message: 'No subjects found for this teacher.', subjects: [] });
      }
  
      console.log('Subjects retrieved successfully for teacher:', teacherId);
      return res.json(subjects);
    } catch (error) {
      console.error('Error retrieving subjects for teacher:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },
   addStudentToSubject: async (req, res) =>  {
    const { studentId, subjectId } = req.body;

    try {
        const subject = await Subject.findById(subjectId);
        if (!subject) {
            return res.status(404).json({ message: 'Subject not found.' });
        }


        const studentAlreadyEnrolled = subject.studentsEnrolled.find(id => id.equals(studentId));
        if (studentAlreadyEnrolled) {
            return res.status(400).json({ message: 'Student is already enrolled in this subject.' });
        }

        subject.studentsEnrolled.push(studentId);
        await subject.save();

    
        const student = await Student.findOneAndUpdate(
            { _id: studentId },
            { $addToSet: { subjectsEnrolled: { subjectId: subject._id } } } 
            
        );
        if (!student) {
            return res.status(404).json({ message: 'Student not found.' });
        }

        return res.status(200).json({
            message: 'Student added to subject successfully.',
            subject: subject,
            student: student
        });
    } catch (error) {
        console.error('Error adding student to subject:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
},

listEnrolledStudents: async (req, res) => {
    const { subjectId } = req.body;

    try {
        const subjectWithStudents = await Subject.findById(subjectId);
        if (!subjectWithStudents) {
            return res.status(404).json({ message: 'Subject not found.' });
        }

        console.log(subjectWithStudents.studentsEnrolled); 

        const students = await User.find({
            '_id': { $in: subjectWithStudents.studentsEnrolled }
        })
        console.log(students); 

        const studentDetails = students.map(student => ({
            name: student.name,
            email: student.email,
            mobileNumber: student.mobileNumber,
            imgURL: student.imgURL,
            role: student.role,
        }));
        return res.status(200).json({
            message: `Students enrolled in ${subjectWithStudents.name}:`,
            students: studentDetails
        });
    } catch (error) {
        console.error('Error retrieving enrolled students:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
},

 createAssignmentForSubject: async (req, res) => {
    const { teacherId, subjectId, assignmentDetails } = req.body;
    
    try {
   
        const subject = await Subject.findById(subjectId);
        if (!subject) {
            return res.status(404).json({ message: 'Subject not found.' });
        }

       
        if (!subject.createdBy.equals(teacherId)) {
            return res.status(403).json({ message: 'Only the teacher who created the subject can add assignments.' });
        }


        const assignment = new Assignment({
            ...assignmentDetails,
            assignmentId: new mongoose.Types.ObjectId() 
        });
        await assignment.save();

     
        subject.assignmentsList.push(assignment._id);
        await subject.save();

        return res.status(201).json({
            message: 'Assignment created successfully and added to the subject.',
            assignment: assignment
        });
    } catch (error) {
        console.error('Error creating assignment for subject:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
},
  
  
};

module.exports = facultyActions;
