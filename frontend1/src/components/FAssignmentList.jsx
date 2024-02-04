import React from "react";

function FAssignmentsList() {
  const currentDate = new Date(); // Get current date

  const dummyAssignments = [
    { id: 1, title: "Math Assignment", dueDate: "2024-02-10" },
    { id: 2, title: "Physics Project", dueDate: "2024-02-15" },
    { id: 3, title: "Chemistry Lab Report", dueDate: "2024-02-20" },
    { id: 4, title: "Biology Research Paper", dueDate: "2024-02-25" },
    { id: 5, title: "History Essay", dueDate: "2024-02-28" },
    // ... add more assignments with due dates
  ];

  return (
    <div className="w-full bg-gray-200 p-4 rounded-lg h-[37vh] overflow-y-scroll">
      <h4 className="text-center mb-4">Assignments List</h4>
      <table className="w-full text-center">
        <thead>
          <tr>
            <th className="p-1 bg-gray-300">S Number</th>
            <th className="p-1 bg-gray-300">Title</th>
            <th className="p-1 bg-gray-300">Due Date</th>
            <th className="p-1 bg-gray-300">Status</th>
            <th className="p-1 bg-gray-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {dummyAssignments.map((assignment, index) => {
            const dueDate = new Date(assignment.dueDate);
            const isPastDue = currentDate > dueDate;

            return (
              <tr key={index}>
                <td className="p-1">{assignment.id}</td>
                <td className="p-1">{assignment.title}</td>
                <td className="p-1">{assignment.dueDate}</td>
                <td
                  className={`p-1 ${
                    isPastDue ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {isPastDue ? "Past" : "Ongoing"}
                </td>
                <td className="p-1">
                  <button className="text-blue-500">View</button>
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
