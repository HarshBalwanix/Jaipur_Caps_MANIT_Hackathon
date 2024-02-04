import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to access URL parameters
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import AddSubject from "./AddSubject";
import AddAssignment from "./AddAssignment";
import FAssignmentsList from "./FAssignmentsList";
import StudentsListFull from "./StudentListFull";

function SubjectDetails() {
  const { id } = useParams(); // Access the subject ID from URL parameters
  const [addSubject, toggleAddSubject] = useState(false);
  const [createAssignment, toggleCreateAssignment] = useState(false);
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
          createAssignment={toggleCreateAssignment}
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
        {createAssignment ? (
          <AddAssignment
            func={toggleCreateAssignment}
            onClick={handleCardClick}
          />
        ) : null}
        {menu ? (
          <div className="flex flex-wrap gap-16 m-4 justify-end  ">
            <div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
                onClick={() => toggleCreateAssignment((prevValue) => !prevValue)}
              >
                Create Assignment
              </button>
              <FAssignmentsList id={id} />
            </div>
            <StudentsListFull id={id} />
          </div>
        ) : null}
        {/* You can use the 'id' variable here to reference the subject ID */}
       
      </div>
    </div>
  );
}

export default SubjectDetails;
