import React, {useEffect, useState} from "react";

function AddSubject() {
  const [subjectName, setSubjectName] = useState("");
  const [subjectType, setSubjectType] = useState("");
  const [studentId, setStudentId] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
  }, [])

  const handleSubjectNameChange = (e) => {
    setSubjectName(e.target.value);
  };
  const handleStudentIdChange = (e) => {
    setStudentId(e.target.value);
  };

  const handleSubjectTypeChange = (e) => {
    setSubjectType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", subjectName, subjectType);

    fetch("http://localhost:3000/addStudent2Subject", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'  // Set the content type to application/json
      },
      body: JSON.stringify({
        studentId: studentId,
        subjectId: subjectName,
      })
    }).then(data => {
      data.json().then(data => {

      })
    })
  };

  return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-indigo-600">
        <form
            onSubmit={handleSubmit}
            className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Add Subject</h2>

          <div className="mb-6">
            <label
                htmlFor="subjectName"
                className="block text-sm font-semibold text-gray-600"
            >
              Subject Name:
            </label>
            <input
                type="text"
                id="subjectName"
                name="subjectName"
                value={subjectName}
                onChange={handleSubjectNameChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                required
            />
          </div>

          <div className="mb-6">
            <label
                htmlFor="subjectType"
                className="block text-sm font-semibold text-gray-600"
            >
              Subject Type:
            </label>
            <select
                id="subjectType"
                name="subjectType"
                value={subjectType}
                onChange={handleSubjectTypeChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                required
            >
              <option value="">Select Subject Type</option>
              <option value="Math">LT</option>
              <option value="Science">LP</option>
              <option value="History">LTP</option>
            </select>
          </div>

          <div className="mb-6">
            <label
                htmlFor="studentId"
                className="block text-sm font-semibold text-gray-600"
            >
              Student Id:
            </label>
            <input
                id="subjectType"
                name="Student ID"
                value={subjectType}
                onChange={handleStudentIdChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                required
            >
            </input>
          </div>

          <div className="text-center">
            <button
                type="submit"
                className="bg-[#AEA0A0] text-white px-6 py-3 rounded-md hover:bg-neutral-600 hover:font-bold transition duration-300"
            >
              Create
            </button>
          </div>
        </form>
      </div>
  );
}

export default AddSubject;
