import React from "react";

function StudentsList() {
  const dummyStudents = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Bob Johnson" },
    { id: 4, name: "Alice Brown" },
    { id: 5, name: "Charlie Davis" },
    { id: 6, name: "Eva Miller" },
    { id: 7, name: "Frank Wilson" },
    { id: 8, name: "Grace Lee" },
    { id: 9, name: "Henry Robinson" },
    { id: 10, name: "Isabel Taylor" },
  ];

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
          {dummyStudents.map((student, index) => (
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

export default StudentsList;
