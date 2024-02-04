import React, { useEffect, useState } from 'react';

const GradeBook = () => {
  const [studentData, setStudentData] = useState();

  useEffect(() => {
    // Fetch student data from the API
    const fetchStudentData = async () => {
      try {
        const response = await fetch('http://localhost:3000/getStudent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            studentId: '65bd0a0834fe8a23f7bc64bd', // Replace with the actual studentId
            teacherId: '65bce5ed3d243a022404daad', // Replace with the actual teacherId
          }),
        });

        if (response.ok) {
          const data = await response.json();
          setStudentData(data);
        } else {
          console.error('Error fetching student data:', response.statusText);
          // Handle errors gracefully (e.g., display an error message)
        }
      } catch (error) {
        console.error('Error fetching student data:', error);
        // Handle errors gracefully (e.g., display an error message)
      }
    };

    fetchStudentData();
  }, []);

  return (
    <div className=" text-black p-8 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl mb-4 font-bold">Grade Book</h1>

      <table className=" mb-4">
        <thead>
          <tr className="bg-gray-300">
            <th className="py-2 bg-gray-300 px-4 border rounded-tl-lg">Name</th>
            <th className="py-2 bg-gray-300 px-4 border rounded-tr-lg">Roll No</th>
          </tr>
        </thead>
        <tbody>
          {studentData && (
            <tr>
              <td className="py-2 px-4 border">{studentData['Basic Details'].name}</td>
              <td className="py-2 px-4 border">{studentData['Basic Details'].id}</td>
            </tr>
          )}
        </tbody>
      </table>

      <table className="table-auto mb-4">
        <thead>
          <tr className="bg-gray-300">
            <th className="py-2 px-4 border rounded-tl-lg">Course Code</th>
            <th className="py-2 px-4 border">Title</th>
            <th className="py-2 px-4 border">Type</th>
            <th className="py-2 px-4 border rounded-tr-lg">Grade</th>
          </tr>
        </thead>
        <tbody>
          {studentData &&
            studentData['GradesDetails'].subjectsEnrolled.map((subject, index) => {
              // Get the subject details based on subjectId from the "Subject" object
              const subjectDetails = studentData['Subject'][subject.subjectId];

              return (
                <tr key={index}>
                  <td className="py-2 px-4 border">{subjectDetails?.type || 'N/A'}</td>
                  <td className="py-2 px-4 border">{subjectDetails?.name || 'N/A'}</td>
                  <td className="py-2 px-4 border">Core</td>
                  <td className="py-2 px-4 border">
                    {subject.assignmentsGrades.length > 0
                      ? subject.assignmentsGrades[0].grade
                      : 'N/A'}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <table className="border-none">
        <thead>
          <tr className="bg-gray-300">
            <th className="py-2 px-4 border rounded-tl-lg">Total Courses</th>
            <th className="py-2 px-4 border">Total A Grades</th>
            <th className="py-2 px-4 border">Total B Grades</th>
            <th className="py-2 px-4 border">Total C Grades</th>
            <th className="py-2 px-4 border rounded-tr-lg">Total F Grades</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border">
              {studentData && studentData['GradesDetails'].subjectsEnrolled.length}
            </td>
            <td className="py-2 px-4 border">
              {studentData && studentData['GradesDetails'].subjectsEnrolled.filter(
                (subject) => subject.assignmentsGrades[0]?.grade === 'A'
              ).length}
            </td>
            <td className="py-2 px-4 border">
              {studentData && studentData['GradesDetails'].subjectsEnrolled.filter(
                (subject) => subject.assignmentsGrades[0]?.grade === 'B'
              ).length}
            </td>
            <td className="py-2 px-4 border">
              {studentData && studentData['GradesDetails'].subjectsEnrolled.filter(
                (subject) => subject.assignmentsGrades[0]?.grade === 'C'
              ).length}
            </td>
            <td className="py-2 px-4 border">
              {studentData && studentData['GradesDetails'].subjectsEnrolled.filter(
                (subject) => subject.assignmentsGrades[0]?.grade === 'F'
              ).length}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GradeBook;
