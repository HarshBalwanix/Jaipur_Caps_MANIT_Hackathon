import React, {useEffect, useState} from "react";

const AddAssignment = ({onClick, func}) => {
  const [assignmentName, setAssignmentName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [dueTime, setDueTime] = useState("");
  const [assignmentFile, setAssignmentFile] = useState(null);
  const [answerFile, setAnswerFile] = useState(null);

  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
  }, [])

  const handleAssignmentNameChange = (e) => {
    setAssignmentName(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleDueTimeChange = (e) => {
    setDueTime(e.target.value);
  };

  const handleAssignmentFileChange = (e) => {
    const file = e.target.files[0];
    setAssignmentFile(file);
  };

  const handleAnswerFileChange = (e) => {
    const file = e.target.files[0];
    setAnswerFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform further actions with the assignment details and files
    console.log("Assignment Name:", assignmentName);
    console.log("Due Date:", dueDate);
    console.log("Due Time:", dueTime);
    console.log("Assignment File:", assignmentFile);
    console.log("Answer File:", answerFile);


    // Take items from user variable.
    fetch("http://localhost:3000/createAssignment", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'  // Set the content type to application/json
      },
      body: JSON.stringify({
        name: assignmentName,
        due: dueDate,
      })
    }).then(data => {
      data.json().then(data => {
        // Se
      })
    })


    // You can now send this data to your backend for further processing
  };

  return (
      <div className="relative h-[77%] overflow-y-scroll">
        <button className="absolute top-0 left-0 m-4" onClick={(e) => onClick(e, func)}>Back</button>
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Create Assignment
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                  htmlFor="assignmentName"
                  className="block text-sm font-semibold text-gray-600"
              >
                Assignment Name:
              </label>
              <input
                  type="text"
                  id="assignmentName"
                  name="assignmentName"
                  value={assignmentName}
                  onChange={handleAssignmentNameChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
              />
            </div>

            <div>
              <label
                  htmlFor="dueDate"
                  className="block text-sm font-semibold text-gray-600"
              >
                Due Date:
              </label>
              <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  value={dueDate}
                  onChange={handleDueDateChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
              />
            </div>

            <div>
              <label
                  htmlFor="dueTime"
                  className="block text-sm font-semibold text-gray-600"
              >
                Due Time:
              </label>
              <input
                  type="time"
                  id="dueTime"
                  name="dueTime"
                  value={dueTime}
                  onChange={handleDueTimeChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
              />
            </div>

            <div>
              <label
                  htmlFor="assignmentFile"
                  className="block text-sm font-semibold text-gray-600"
              >
                Assignment File (PDF):
              </label>
              <input
                  type="file"
                  id="assignmentFile"
                  name="assignmentFile"
                  accept=".pdf"
                  onChange={handleAssignmentFileChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
              />
            </div>

            <div>
              <label
                  htmlFor="answerFile"
                  className="block text-sm font-semibold text-gray-600"
              >
                Answer File (PDF):
              </label>
              <input
                  type="file"
                  id="answerFile"
                  name="answerFile"
                  accept=".pdf"
                  onChange={handleAnswerFileChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
              />
            </div>

            <div>
              <button
                  type="submit"
                  className="w-full px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Create Assignment
              </button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default AddAssignment;