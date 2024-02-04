import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FAssignmentsList({id}) {
  const currentDate = new Date(); // Get current date

  const [dueAssignments, setDueAssignments] = useState([]);
  const [pastAssignments, setPastAssignments] = useState([]);

  useEffect(() => {
    // Fetch assignments data from your API here
    const fetchAssignments = async () => {
      try {
        // Replace '65bce5ed3d243a022404daab' with the actual teacherId (user_id)
        const teacherId = localStorage.getItem("user_id");
        const response = await fetch("http://localhost:3000/viewAssignmentList", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ teacherId, subjectId: id }), // Replace subjectId with the actual subjectId
        });

        if (response.ok) {
          const data = await response.json();
          setDueAssignments(data.dueAssignments);
          setPastAssignments(data.pastAssignments);
        } else {
          console.error("Error fetching assignments:", response.statusText);
          // Handle errors gracefully (e.g., display an error message)
        }
      } catch (error) {
        console.error("Error fetching assignments:", error);
        // Handle errors gracefully (e.g., display an error message)
      }
    };

    fetchAssignments();
  }, []);

  return (
    <div className="w-full bg-gray-200 p-4 rounded-lg h-[37vh] overflow-y-scroll">
      <h4 className="text-center mb-4">Assignments List</h4>
      <table className="w-full text-center">
        <thead>
          <tr>
        
            <th className="p-1 bg-gray-300">Name</th>
            <th className="p-1 bg-gray-300">Due Date</th>
            <th className="p-1 bg-gray-300">Status</th>
            <th className="p-1 bg-gray-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {dueAssignments.map((assignment) => {
            const dueDate = new Date(assignment.due);

            return (
              <tr key={assignment._id}>
               
                <td className="p-1">{assignment.name}</td>
                <td className="p-1">
                  {dueDate.toLocaleString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
                <td className="p-1 text-green-500">Ongoing</td>
                <td className="p-1">
                <Link to={`/AssignmentGrading`} className="text-blue-500">View</Link>
                </td>
              </tr>
            );
          })}

          {pastAssignments.map((assignment) => {
            const dueDate = new Date(assignment.due);

            return (
              <tr key={assignment._id}>
          
                <td className="p-1">{assignment.name}</td>
                <td className="p-1">
                  {dueDate.toLocaleString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
                <td className="p-1 text-red-500">Past</td>
                <td className="p-1">
                <Link to={`/AssignmentGrading`} className="text-blue-500">View</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default FAssignmentsList;
