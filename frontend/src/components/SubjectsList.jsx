import React from 'react';

function SubjectsList() {
  const dummyCourses = [
    { id: 1, name: 'Mathematics' },
    { id: 2, name: 'Physics' },
    { id: 3, name: 'Chemistry' },
    { id: 4, name: 'Biology' },
    { id: 5, name: 'History' },
    { id: 6, name: 'Geography' },
    { id: 7, name: 'Literature' },
    { id: 8, name: 'Computer Science' },
    { id: 9, name: 'Economics' },
    { id: 10, name: 'Psychology' }
  ];

  return (
    <div className="w-full bg-gray-200 p-4 rounded-lg h-[37vh] overflow-y-scroll">
      <h4 className="text-center mb-4">Due Assignments</h4>
      <table className="w-full text-center">
        <thead>
          <tr>
            <th className="p-1 bg-gray-300">Course ID</th>
            <th className="p-1 bg-gray-300">Name</th>
            <th className="p-1 bg-gray-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {dummyCourses.map((course, index) => (
            <tr key={index}>
              <td className="p-1">{course.id}</td>
              <td className="p-1">{course.name}</td>
              <td className="p-1"><button className="text-blue-500">View</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SubjectsList;
