import React, { useEffect, useState } from "react";

function StudentsListFull({id}) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://localhost:3000/listSubjectEnrolled", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subjectId: id, // Replace with the actual subjectId
          }),
        });

        if (response.ok) {
          const data = await response.json();
          setStudents(data.students);
        } else {
          console.error("Error fetching student list:", response.statusText);
          // Handle errors gracefully (e.g., display an error message)
        }
      } catch (error) {
        console.error("Error fetching student list:", error);
        // Handle errors gracefully (e.g., display an error message)
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-[35vh] overflow-y-scroll">
      <h4 className="text-center text-2xl font-semibold mb-4 text-gray-800">
        Student List
      </h4>
      <table className="w-full text-center border-collapse">
        <thead>
          <tr>
            <th className="p-2 bg-gray-800 text-white">Reg ID</th>
            <th className="p-2 bg-gray-800 text-white">Name</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="p-2 border">{student.id}</td>
              <td className="p-2 border">{student.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentsListFull;
