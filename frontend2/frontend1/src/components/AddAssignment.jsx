import React, { useEffect, useState } from "react";

const AddAssignment = ({ onClick, func }) => {
  const [assignmentName, setAssignmentName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [dueTime, setDueTime] = useState("");
  const [assignmentFile, setAssignmentFile] = useState(null);
  const [answerFile, setAnswerFile] = useState(null);
  const [selectedSubjectId, setSelectedSubjectId] = useState(""); // State for selected subject ID
  const [subjects, setSubjects] = useState([]); // State for storing the list of subjects

  useEffect(() => {
    // Fetch the list of subjects from your API when the component mounts
    const fetchSubjects = async () => {
      try {
        // Replace '65bce5ed3d243a022404daab' with the actual teacherId (user_id)
        const teacherId = localStorage.getItem("user_id");
        const response = await fetch(
          "http://localhost:3000/listSubjectsFaculty",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ teacherId }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          setSubjects(data); // Set the list of subjects in state
        } else {
          console.error("Error fetching subjects:", response.statusText);
          // Handle errors gracefully (e.g., display an error message)
        }
      } catch (error) {
        console.error("Error fetching subjects:", error);
        // Handle errors gracefully (e.g., display an error message)
      }
    };

    fetchSubjects();
  }, []);

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

  const handleSubjectChange = (e) => {
    setSelectedSubjectId(e.target.value); // Update the selected subject ID in state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedDueDate = new Date(`${dueDate}T${dueTime}`).toLocaleString(
      "en-GB",
      {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }
    );
    // Perform further actions with the assignment details and files
    console.log("Assignment Name:", assignmentName);
    console.log("Due Date:", dueDate);
    console.log("Due Time:", dueTime);
    console.log("Assignment File:", assignmentFile);
    console.log("Answer File:", answerFile);
    console.log("Selected Subject ID:", selectedSubjectId); // Include selected subject ID in your data

    // Send this data to your backend for further processing
    fetch("http://localhost:3000/createAssignment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subjectId: selectedSubjectId,
        teacherId: localStorage.getItem("user_id"),
        assignmentDetails: {
          name: assignmentName,
          due: formattedDueDate,
          problemStatement: "problemStatement",
          answerpdf: "answer",
        },
      }),
    }).then((data) => {
      data.json().then((data) => {
        // Handle the response from the server
      });
    });
  };

  return (
    <div className="h-screen add-assignment-container ">
      <div className="relative overflow-y-hidden">
        <button
          className="absolute top-0 left-0 m-4"
          onClick={(e) => onClick(e, func)}
        >
          Back
        </button>
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

            {/* Subject Dropdown */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-gray-600"
              >
                Select Subject:
              </label>
              <select
                id="subject"
                name="subject"
                value={selectedSubjectId}
                onChange={handleSubjectChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              >
                <option value="">Select a Subject</option>
                {subjects.map((subject) => (
                  <option key={subject._id} value={subject._id}>
                    {subject.name}
                  </option>
                ))}
              </select>
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
    </div>
  );
};

export default AddAssignment;
