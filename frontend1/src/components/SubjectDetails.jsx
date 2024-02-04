import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import AddSubject from "./AddSubject";
import AddAssignment from "./AddAssignment";
import StudentsList from "./StudentList";
import FAssignmentsList from "./FAssignmentList";
import AssignmentPage from "./AssignmentSubmissionPage";

function SubjectDetails() {
  const [addSubject, toggleAddSubject] = useState(false);
  const [createAssignement, toggleCreateAssignment] = useState(false);
  const [menu, toggleMenu] = useState(true);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(localStorage.getItem("user_name"));
  }, []);

  const handleCardClick = (e, func) => {
    func((prevValue) => !prevValue); // Toggling a local state
    toggleMenu((prevMenu) => !prevMenu); // Toggling the menu state
  };

  return (
    <div className="flex">
      <div className="">
        {/* Sidebar */}
        <Sidebar
          createAssignement={toggleCreateAssignment}
          onClick={handleCardClick}
        />
      </div>
      <div className="w-full">
        {/* Header */}
        <Navbar userName={userName} />
        {/* Main Content */}
        {addSubject ? (
          <AddSubject
            func={toggleAddSubject}
            val={addSubject}
            onClick={handleCardClick}
          />
        ) : null}
        {createAssignement ? (
          <AddAssignment
            func={toggleCreateAssignment}
            onClick={handleCardClick}
          />
        ) : null}
        {menu ? (
          <div className="flex flex-wrap gap-16 m-4 justify-end  ">
            <StudentsList />
            <FAssignmentsList />
            {/* <SubmittedAssignments /> */}
            <AssignmentPage />
          </div>
        ) : null}
        {/* <div>
          <MyDetails />
        </div> */}
      </div>
    </div>
  );
}

export default SubjectDetails;
