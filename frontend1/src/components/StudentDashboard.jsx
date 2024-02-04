// ... (previous imports)

import { useEffect } from "react";
import AddAssignment from "./AddAssignment";
import AddSubject from "./AddSubject";
import Navbar from "./Navbar";
import StudentSidebar from "./StudentSidebar";
import StudentTabs from "./StudentTabs";
import { useState } from "react";

function StudentDashboard() {
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
    <div className="flex overflow-hidden">
      <div className="">
        {/* Sidebar */}
        <StudentSidebar
          createAssignement={toggleCreateAssignment}
          onClick={handleCardClick}
        />
      </div>
      <div className="w-full overflow-hidden">
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
          <div className="flex flex-wrap gap-4 m-4 justify-center ">
            <StudentTabs />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default StudentDashboard;
