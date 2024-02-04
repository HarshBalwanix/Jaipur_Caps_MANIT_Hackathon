// import React, { useState } from "react";

// function AssignmentSubmission({ assignments }) {
//   const [currentGradeInput, setCurrentGradeInput] = useState("");
//   const [isEditing, setIsEditing] = useState(false);

//   const handleEditClick = (index) => {
//     setCurrentGradeInput(assignments[index].predictedGrade);
//     setIsEditing(true);
//   };

//   const handleSaveClick = () => {
//     // Add logic to save the modified grade, e.g., through an API call
//     setIsEditing(false);
//   };

//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md mb-4">
//       <h2 className="text-2xl font-semibold mb-4">Assignment Table</h2>
//       <table className="w-full border-collapse">
//         <thead>
//           <tr>
//             <th className="p-2 border bg-gray-800 text-white">Student ID</th>
//             <th className="p-2 border bg-gray-800 text-white">Name</th>
//             <th className="p-2 border bg-gray-800 text-white">
//               Assignment Link
//             </th>
//             <th className="p-2 border bg-gray-800 text-white">
//               Predicted Grade
//             </th>
//             <th className="p-2 border bg-gray-800 text-white">Current Grade</th>
//             <th className="p-2 border bg-gray-800 text-white">
//               Plagiarism Percentage
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {assignments.map((assignment, index) => (
//             <tr key={index}>
//               <td className="p-2 border">{assignment.studentID}</td>
//               <td className="p-2 border">{assignment.name}</td>
//               <td className="p-2 border">
//                 <a
//                   href={assignment.assignmentLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   View Assignment
//                 </a>
//               </td>
//               <td className="p-2 border">{assignment.predictedGrade}</td>
//               <td className="p-2 border">
//                 {isEditing ? (
//                   <>
//                     <input
//                       type="text"
//                       className="w-full border p-1"
//                       value={currentGradeInput}
//                       onChange={(e) => setCurrentGradeInput(e.target.value)}
//                     />
//                     <button
//                       className="text-blue-500 ml-2"
//                       onClick={() => handleSaveClick(index)}
//                     >
//                       Save
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     {assignment.predictedGrade}
//                     <span
//                       className="ml-2 cursor-pointer"
//                       role="img"
//                       aria-label="Edit"
//                       onClick={() => handleEditClick(index)}
//                     >
//                       ✏️
//                     </span>
//                   </>
//                 )}
//               </td>
//               <td className="p-2 border">{assignment.plagiarismPercentage}%</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default AssignmentSubmission;

// import React, { useState } from "react";

// function AssignmentSubmission({ assignments }) {
//   const [currentGradeInput, setCurrentGradeInput] = useState("");
//   const [currentFeedbackInput, setCurrentFeedbackInput] = useState("");
//   const [isEditing, setIsEditing] = useState(false);

//   const handleEditClick = (index) => {
//     setCurrentGradeInput(assignments[index].predictedGrade);
//     setCurrentFeedbackInput(assignments[index].feedback);
//     setIsEditing(true);
//   };

//   const handleSaveClick = (index) => {
//     // Add logic to save the modified grade and feedback, e.g., through an API call
//     setIsEditing(false);
//   };

//   // Function to set default feedback based on current grade
//   const setDefaultFeedback = (currentGrade) => {
//     switch (currentGrade) {
//       case "A":
//         return "Excellent";
//       case "B":
//         return "Good";
//       case "C":
//         return "Need Improvement";
//       case "F":
//         return "Try Hard";
//       default:
//         return "Good luck";
//     }
//   };

//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md mb-4">
//       <h2 className="text-2xl font-semibold mb-4">Assignment Table</h2>
//       <table className="w-full border-collapse">
//         <thead>
//           <tr>
//             <th className="p-2 border bg-gray-800 text-white">Student ID</th>
//             <th className="p-2 border bg-gray-800 text-white">Name</th>
//             <th className="p-2 border bg-gray-800 text-white">
//               Assignment Link
//             </th>
//             <th className="p-2 border bg-gray-800 text-white">
//               Predicted Grade
//             </th>
//             <th className="p-2 border bg-gray-800 text-white">Current Grade</th>
//             <th className="p-2 border bg-gray-800 text-white">Feedback</th>
//             <th className="p-2 border bg-gray-800 text-white">
//               Plagiarism Percentage
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {assignments.map((assignment, index) => (
//             <tr key={index}>
//               <td className="p-2 border">{assignment.studentID}</td>
//               <td className="p-2 border">{assignment.name}</td>
//               <td className="p-2 border">
//                 <a
//                   href={assignment.assignmentLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   View Assignment
//                 </a>
//               </td>
//               <td className="p-2 border">{assignment.predictedGrade}</td>
//               <td className="p-2 border">
//                 {isEditing ? (
//                   <>
//                     <input
//                       type="text"
//                       className="w-full border p-1"
//                       value={currentGradeInput}
//                       onChange={(e) => setCurrentGradeInput(e.target.value)}
//                     />
//                     <button
//                       className="text-blue-500 ml-2"
//                       onClick={() => handleSaveClick(index)}
//                     >
//                       Save
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     {assignment.predictedGrade}
//                     <span
//                       className="ml-2 cursor-pointer"
//                       role="img"
//                       aria-label="Edit"
//                       onClick={() => handleEditClick(index)}
//                     >
//                       ✏️
//                     </span>
//                   </>
//                 )}
//               </td>
//               <td className="p-2 border">
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     className="w-full border p-1"
//                     value={currentFeedbackInput}
//                     onChange={(e) => setCurrentFeedbackInput(e.target.value)}
//                   />
//                 ) : (
//                   <>
//                     {setDefaultFeedback(currentGradeInput)}
//                     {isEditing && (
//                       <span
//                         className="ml-2 cursor-pointer"
//                         role="img"
//                         aria-label="Edit"
//                         onClick={() => handleEditClick(index)}
//                       >
//                         ✏️
//                       </span>
//                     )}
//                   </>
//                 )}
//               </td>
//               <td className="p-2 border">{assignment.plagiarismPercentage}%</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default AssignmentSubmission;

// import React, { useState } from "react";

// function AssignmentSubmission({ assignments }) {
//   const [currentGradeInput, setCurrentGradeInput] = useState("");
//   const [currentFeedbackInput, setCurrentFeedbackInput] = useState("");
//   const [isEditing, setIsEditing] = useState(false);
//   const [isFeedbackEditing, setIsFeedbackEditing] = useState(false);

//   const handleEditClick = (index) => {
//     setCurrentGradeInput(assignments[index].predictedGrade);
//     setCurrentFeedbackInput(assignments[index].feedback);
//     setIsEditing(true);
//   };

//   const handleSaveClick = (index) => {
//     // Add logic to save the modified grade and feedback, e.g., through an API call
//     setIsEditing(false);
//     setIsFeedbackEditing(false);
//   };

//   // Function to set default feedback based on current grade
//   const setDefaultFeedback = (currentGrade) => {
//     switch (currentGrade) {
//       case "A":
//         return "Excellent";
//       case "B":
//         return "Good";
//       case "C":
//         return "Need Improvement";
//       case "F":
//         return "Try Hard";
//       default:
//         return "Good luck";
//     }
//   };

//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md mb-4">
//       <h2 className="text-2xl font-semibold mb-4">Assignment Table</h2>
//       <table className="w-full border-collapse">
//         <thead>
//           <tr>
//             <th className="p-2 border bg-gray-800 text-white">Student ID</th>
//             <th className="p-2 border bg-gray-800 text-white">Name</th>
//             <th className="p-2 border bg-gray-800 text-white">
//               Assignment Link
//             </th>
//             <th className="p-2 border bg-gray-800 text-white">
//               Predicted Grade
//             </th>
//             <th className="p-2 border bg-gray-800 text-white">Current Grade</th>
//             <th className="p-2 border bg-gray-800 text-white">Feedback</th>
//             <th className="p-2 border bg-gray-800 text-white">
//               Plagiarism Percentage
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {assignments.map((assignment, index) => (
//             <tr key={index}>
//               <td className="p-2 border">{assignment.studentID}</td>
//               <td className="p-2 border">{assignment.name}</td>
//               <td className="p-2 border">
//                 <a
//                   href={assignment.assignmentLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   View Assignment
//                 </a>
//               </td>
//               <td className="p-2 border">{assignment.predictedGrade}</td>
//               <td className="p-2 border">
//                 {isEditing ? (
//                   <>
//                     <input
//                       type="text"
//                       className="w-full border p-1"
//                       value={currentGradeInput}
//                       onChange={(e) => setCurrentGradeInput(e.target.value)}
//                     />
//                     <button
//                       className="text-blue-500 ml-2"
//                       onClick={() => handleSaveClick(index)}
//                     >
//                       Save
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     {assignment.predictedGrade}
//                     <span
//                       className="ml-2 cursor-pointer"
//                       role="img"
//                       aria-label="Edit"
//                       onClick={() => handleEditClick(index)}
//                     >
//                       ✏️
//                     </span>
//                   </>
//                 )}
//               </td>
//               <td className="p-2 border">
//                 {isFeedbackEditing ? (
//                   <>
//                     <input
//                       type="text"
//                       className="w-full border p-1"
//                       value={currentFeedbackInput}
//                       onChange={(e) => setCurrentFeedbackInput(e.target.value)}
//                     />
//                     <button
//                       className="text-blue-500 ml-2"
//                       onClick={() => handleSaveClick(index)}
//                     >
//                       Save
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     {setDefaultFeedback(currentGradeInput)}
//                     {isFeedbackEditing && (
//                       <span
//                         className="ml-2 cursor-pointer"
//                         role="img"
//                         aria-label="Edit"
//                         onClick={() => setIsFeedbackEditing(false)}
//                       >
//                         ✏️
//                       </span>
//                     )}
//                   </>
//                 )}
//               </td>
//               <td className="p-2 border">{assignment.plagiarismPercentage}%</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default AssignmentSubmission;
// ****************************************************************************
// import React, { useState, useEffect } from "react";

// function AssignmentSubmission({ assignments }) {
//   const [currentGradeInput, setCurrentGradeInput] = useState("");
//   const [currentFeedbackInput, setCurrentFeedbackInput] = useState("");
//   const [isEditing, setIsEditing] = useState(false);
//   const [isFeedbackEditing, setIsFeedbackEditing] = useState(false);

//   useEffect(() => {
//     // Set initial values when component mounts
//     setCurrentGradeInput(assignments[0]?.predictedGrade || "");
//     setCurrentFeedbackInput(assignments[0]?.feedback || "");
//   }, [assignments]);

//   const handleEditClick = (index) => {
//     setCurrentGradeInput(assignments[index].predictedGrade);
//     setCurrentFeedbackInput(assignments[index].feedback);
//     setIsEditing(true);
//   };

//   const handleSaveClick = (index) => {
//     // Add logic to save the modified grade and feedback, e.g., through an API call
//     setIsEditing(false);
//     setIsFeedbackEditing(false);
//   };

//   // Function to set default feedback based on current grade
//   const setDefaultFeedback = (currentGrade) => {
//     switch (currentGrade) {
//       case "A":
//         return "Excellent";
//       case "B":
//         return "Good";
//       case "C":
//         return "Need Improvement";
//       case "F":
//         return "Try Hard";
//       default:
//         return "Good luck";
//     }
//   };

//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md mb-4">
//       <h2 className="text-2xl font-semibold mb-4">Assignment Table</h2>
//       <table className="w-full border-collapse">
//         <thead>
//           <tr>
//             <th className="p-2 border bg-gray-800 text-white">Student ID</th>
//             <th className="p-2 border bg-gray-800 text-white">Name</th>
//             <th className="p-2 border bg-gray-800 text-white">
//               Assignment Link
//             </th>
//             <th className="p-2 border bg-gray-800 text-white">
//               Predicted Grade
//             </th>
//             <th className="p-2 border bg-gray-800 text-white">Current Grade</th>
//             <th className="p-2 border bg-gray-800 text-white">Feedback</th>
//             <th className="p-2 border bg-gray-800 text-white">
//               Plagiarism Percentage
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {assignments.map((assignment, index) => (
//             <tr key={index}>
//               <td className="p-2 border">{assignment.studentID}</td>
//               <td className="p-2 border">{assignment.name}</td>
//               <td className="p-2 border">
//                 <a
//                   href={assignment.assignmentLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   View Assignment
//                 </a>
//               </td>
//               <td className="p-2 border">{assignment.predictedGrade}</td>
//               <td className="p-2 border">
//                 {isEditing ? (
//                   <>
//                     <input
//                       type="text"
//                       className="w-full border p-1"
//                       value={currentGradeInput}
//                       onChange={(e) => setCurrentGradeInput(e.target.value)}
//                     />
//                     <button
//                       className="text-blue-500 ml-2"
//                       onClick={() => handleSaveClick(index)}
//                     >
//                       Save
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     {assignment.predictedGrade}
//                     <span
//                       className="ml-2 cursor-pointer"
//                       role="img"
//                       aria-label="Edit"
//                       onClick={() => handleEditClick(index)}
//                     >
//                       ✏️
//                     </span>
//                   </>
//                 )}
//               </td>
//               <td className="p-2 border">
//                 {isFeedbackEditing ? (
//                   <>
//                     <input
//                       type="text"
//                       className="w-full border p-1"
//                       value={currentFeedbackInput}
//                       onChange={(e) => setCurrentFeedbackInput(e.target.value)}
//                     />
//                     <button
//                       className="text-blue-500 ml-2"
//                       onClick={() => handleSaveClick(index)}
//                     >
//                       Save
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     {setDefaultFeedback(currentGradeInput)}
//                     {isFeedbackEditing && (
//                       <span
//                         className="ml-2 cursor-pointer"
//                         role="img"
//                         aria-label="Edit"
//                         onClick={() => setIsFeedbackEditing(false)}
//                       >
//                         ✏️
//                       </span>
//                     )}
//                   </>
//                 )}
//               </td>
//               <td className="p-2 border">{assignment.plagiarismPercentage}%</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default AssignmentSubmission;
// *******************************************************

import React, { useState, useEffect } from "react";

function AssignmentSubmission({ assignments }) {
  const [currentGradeInput, setCurrentGradeInput] = useState("");
  const [currentFeedbackInput, setCurrentFeedbackInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isFeedbackEditing, setIsFeedbackEditing] = useState(false);

  useEffect(() => {
    // Set initial values when component mounts
    setCurrentGradeInput(assignments[0]?.predictedGrade || "");
    setCurrentFeedbackInput(assignments[0]?.feedback || "");
  }, [assignments]);

  const handleEditClick = (index) => {
    setCurrentGradeInput(assignments[index].predictedGrade);
    setCurrentFeedbackInput(assignments[index].feedback);
    setIsEditing(true);
  };

  const handleSaveClick = (index) => {
    // Add logic to save the modified grade and feedback, e.g., through an API call
    setIsEditing(false);
    setIsFeedbackEditing(false);
  };

  // Function to set default feedback based on current grade
  const setDefaultFeedback = (currentGrade) => {
    switch (currentGrade) {
      case "A":
        return "Excellent";
      case "B":
        return "Good";
      case "C":
        return "Need Improvement";
      case "F":
        return "Try Hard";
      default:
        return "Good luck";
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-2xl font-semibold mb-4">Assignment Table</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-2 border bg-gray-800 text-white">Student ID</th>
            <th className="p-2 border bg-gray-800 text-white">Name</th>
            <th className="p-2 border bg-gray-800 text-white">
              Assignment Link
            </th>
            <th className="p-2 border bg-gray-800 text-white">
              Predicted Grade
            </th>
            <th className="p-2 border bg-gray-800 text-white">Current Grade</th>
            <th className="p-2 border bg-gray-800 text-white">Feedback</th>
            <th className="p-2 border bg-gray-800 text-white">
              Plagiarism Percentage
            </th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment, index) => (
            <tr key={index}>
              <td className="p-2 border">{assignment.studentID}</td>
              <td className="p-2 border">{assignment.name}</td>
              <td className="p-2 border">
                <a
                  href={assignment.assignmentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Assignment
                </a>
              </td>
              <td className="p-2 border">{assignment.predictedGrade}</td>
              <td className="p-2 border">
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      className="w-full border p-1"
                      value={currentGradeInput}
                      onChange={(e) => setCurrentGradeInput(e.target.value)}
                    />
                    <button
                      className="text-blue-500 ml-2"
                      onClick={() => handleSaveClick(index)}
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    {assignment.predictedGrade}
                    <span
                      className="ml-2 cursor-pointer"
                      role="img"
                      aria-label="Edit"
                      onClick={() => handleEditClick(index)}
                    >
                      ✏️
                    </span>
                  </>
                )}
              </td>
              <td className="p-2 border">
                {isFeedbackEditing ? (
                  <>
                    <input
                      type="text"
                      className="w-full border p-1"
                      value={currentFeedbackInput}
                      onChange={(e) => setCurrentFeedbackInput(e.target.value)}
                    />
                    <button
                      className="text-blue-500 ml-2"
                      onClick={() => handleSaveClick(index)}
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    {setDefaultFeedback(currentGradeInput)}
                    <span
                      className="ml-2 cursor-pointer"
                      role="img"
                      aria-label="Edit"
                      onClick={() => setIsFeedbackEditing(true)}
                    >
                      ✏️
                    </span>
                  </>
                )}
              </td>
              <td className="p-2 border">{assignment.plagiarismPercentage}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AssignmentSubmission;
