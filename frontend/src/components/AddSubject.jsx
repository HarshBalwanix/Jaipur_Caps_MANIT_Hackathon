import React, { useState } from "react";

function AddSubject({ func, val, onClick }) {
  const [subjectName, setSubjectName] = useState("");
  const [subjectType, setSubjectType] = useState("");

  const handleSubjectNameChange = (e) => {
    setSubjectName(e.target.value);
  };

  const handleSubjectTypeChange = (e) => {
    setSubjectType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", subjectName, subjectType);
  };

  return (
    
    <div className="relative flex items-center justify-center h-4/5 bg-gradient-to-r from-purple-500 to-indigo-600">
      <button className="absolute top-0 left-0 m-4" onClick={(e) => onClick(e, func)}>Back</button>
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
