import React, { useState } from "react";
// import { faUsers } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
// import Card from "./Card";
import AddSubject from "./AddSubject";
import AddAssignment from "./AddAssignment";
import DueAssignment from "./DueAssignment";
import SubjectsList from "./SubjectsList";
import PassFailChart from "./PassFailChart";
// import MyDetails from "./Mydetails";

function Dashboard() {
  const [addSubject, toggleAddSubject] = useState(false);
  const [createAssignement, toggleCreateAssignment] = useState(false);
  const [menu, toggleMenu] = useState(true);

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
        <Navbar />
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
          <div className="flex flex-wrap gap-4 m-4 ">
            <DueAssignment />
            <PassFailChart />
            <SubjectsList />
          </div>
        ) : null}
        {/* <div>
          <MyDetails />
        </div> */}
      </div>
    </div>
  );
}

export default Dashboard;
