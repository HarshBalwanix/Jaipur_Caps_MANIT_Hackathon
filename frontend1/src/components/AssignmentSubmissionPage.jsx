import React from "react";
import AssignmentSubmission from "./AssignmentSubmission";

const AssignmentPage = () => {
  const sampleAssignments = [
    {
      studentID: 1,
      name: "John Doe",
      assignmentLink: "https://example.com/assignment1",
      predictedGrade: "A",
      plagiarismPercentage: 5,
    },
    // Add more assignments as needed
  ];

  return (
    <div className="">
      <AssignmentSubmission assignments={sampleAssignments} />
    </div>
  );
};

export default AssignmentPage;
