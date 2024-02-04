import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate

function SubjectsList() {
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await fetch('http://localhost:3000/listSubjectsFaculty', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ teacherId: '65bce5ed3d243a022404daab' }) // Assuming teacher ID is stored in localStorage
       
          // You may need to include any required authentication headers here
        });

        if (response.ok) {
          const data = await response.json();
          setSubjects(data); // Update the state with the fetched subjects
        } else {
          console.error('Error fetching subjects:', response.statusText);
          // Handle errors gracefully (e.g., display an error message)
        }
      } catch (error) {
        console.error('Error fetching subjects:', error);
        // Handle errors gracefully (e.g., display an error message)
      }
    };

    fetchSubjects();
  }, []);

  return (
    <div className="w-full bg-gray-200 p-4 rounded-lg h-[37vh] overflow-y-scroll">
      <h4 className="text-left mb-4">Your Subjects</h4>
      <table className="w-full text-center">
        <thead>
          <tr>
            <th className="p-1 bg-gray-300">S.No</th>
            <th className="p-1 bg-gray-300">Course ID</th>
            <th className="p-1 bg-gray-300">Name</th>
            <th className="p-1 bg-gray-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr key={subject._id}>
              <td className="p-1">{index + 1}</td>
              <td className="p-1">{subject.type}</td>
              <td className="p-1">{subject.name}</td>
              <td className="p-1">
                {/* Use Link to navigate to SubjectDetails with the subject's ID as a parameter */}
                <Link to={`/subjectDetails/${subject._id}`} className="text-blue-500">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SubjectsList;
