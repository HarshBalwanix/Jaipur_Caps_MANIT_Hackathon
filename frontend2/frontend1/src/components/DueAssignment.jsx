import React from 'react';

function DueAssignment({ assignments }) {
  console.log("Assignments: ", assignments);

  return (
    <div className="bg-gray-200 p-4 rounded-lg h-[35vh] overflow-y-scroll">
      <h4 className="text-center mb-4">Due Assignments</h4>
      <table className="w-full text-center">
        <thead>
          <tr>
            <th className="p-1 bg-gray-300">Assignment Name</th>
            <th className="p-1 bg-gray-300">Due Date</th>
          </tr>
        </thead>
        <tbody>
          {assignments ? (
            assignments.map((assignment, index) => (
              <tr key={index}>
                <td className="p-1">{assignment.name}</td>
                <td className="p-1">{assignment.dueDate}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">Loading assignments...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DueAssignment;
