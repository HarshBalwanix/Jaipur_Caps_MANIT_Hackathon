import React from 'react';

function DueAssignment() {
  // Sample data representing assignment names and due dates
  const assignments = [
    { name: 'Math Assignment', dueDate: '2024-02-10' },
    { name: 'Science Project', dueDate: '2024-02-15' },
    { name: 'History Essay', dueDate: '2024-02-20' },
    { name: 'Literature Reading', dueDate: '2024-02-25' },
  ];

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
          {assignments.map((assignment, index) => (
            <tr key={index}>
              <td className="p-1">{assignment.name}</td>
              <td className="p-1">{assignment.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DueAssignment;
