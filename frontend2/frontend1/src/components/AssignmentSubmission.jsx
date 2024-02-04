import React, { useState, useEffect } from "react";

function AssignmentSubmission() {
  const [currentGradeInput, setCurrentGradeInput] = useState("");
  const [currentFeedbackInput, setCurrentFeedbackInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isFeedbackEditing, setIsFeedbackEditing] = useState(false);
  const [assignments, setAssignments] = useState([]);

  const saveAssignmentData = async (index) => {
    if (index >= 0 && index < assignments.length) {
      const studentId = assignments[index].id;
      const subjectId = "65bce674f945893edee3d1fd";
      const assignmentId = "65bd2cb36589b2f87cbdbc0c";
      const grade = currentGradeInput;
      const feedback = currentFeedbackInput;
      const plagiarism = assignments[index].plagiarismPercentage;

      console.log(assignments)
      console.log(studentId)
      console.log(subjectId)

      const requestBody = {
        studentId: studentId,
        subjectId: subjectId,
        assignmentId: assignmentId,
        grade: grade,
        feedback: feedback,
        plagiarism: plagiarism,
      };

      try {
        const response = await fetch("http://localhost:3000/gradeAssignment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });

        if (response.ok) {
          // Handle success (e.g., display a success message)
          console.log("Assignment graded successfully.");
        } else {
          console.error("Error grading assignment:", response.statusText);
          // Handle errors gracefully (e.g., display an error message)
        }
      } catch (error) {
        console.error("Error grading assignment:", error);
        // Handle errors gracefully (e.g., display an error message)
      }
    }
  };

  useEffect(() => {
    const fetchAssignmentStudents = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/listStudentsOfAssignment1",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              assignmentId: "65bd2cb36589b2f87cbdbc0c", // Replace with the actual subjectId
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          const transformedAssignments = data.students.map((student, index) => ({
            studentID: index + 1,
            name: student.name,
            id: student.id,
            assignmentLink: student.pdfSolutionLink || "", // Replace with the actual link property
            predictedGrade: student.predictedMarks || "", // Replace with the actual predicted grade property
            plagiarismPercentage: student.feedback === "NA" ? 0 : parseInt(student.feedback), // Replace with the actual plagiarism percentage property
          }));
          setAssignments(transformedAssignments);
        } else {
          console.error("Error fetching student list:", response.statusText);
          // Handle errors gracefully (e.g., display an error message)
        }
      } catch (error) {
        console.error("Error fetching student list:", error);
        // Handle errors gracefully (e.g., display an error message)
      }
    };

    fetchAssignmentStudents();
  }, []);

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
    saveAssignmentData(index);
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
