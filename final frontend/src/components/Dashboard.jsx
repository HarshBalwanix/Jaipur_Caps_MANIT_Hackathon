import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import AddSubject from "./AddSubject";
import AddAssignment from "./AddAssignment";
import DueAssignment from "./DueAssignment";
import SubjectsList from "./SubjectsList";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { passFail } from "../passFdata";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {
  const [addSubject, toggleAddSubject] = useState(false);
  const [createAssignment, toggleCreateAssignment] = useState(false);
  const [menu, toggleMenu] = useState(true);
  const [userName, setUserName] = useState("");
  const [assignments, setAssignments] = useState([]);
  const [userID, setUserID] = useState("");

  useEffect(() => {
    const storedUserID = localStorage.getItem('user_id');
    if (storedUserID) {
      setUserID(storedUserID);
      fetchAssignments(storedUserID);
    } else {
      // Handle the case where user ID is not available (e.g., redirect to login)
      console.log('User ID not found in localStorage. Redirecting to login...');
      // Redirect or show a login modal here
    }
    
    const storedUserName = localStorage.getItem('user_name');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const fetchAssignments = async (userID) => {
    try {
      const response = await fetch('http://localhost:3000/viewAssignmentsForAllSubjects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ teacherId: userID })
      });

      if (response.ok) {
        const data = await response.json();
        const dueAssignments = data.assignments.due;

        const desiredAssignments = dueAssignments.map(assignment => ({
          name: assignment.name,
          dueDate: assignment.due
        }));

        setAssignments(desiredAssignments);
      } else {
        console.error('Error fetching assignments:', response.statusText);
        // Handle errors gracefully (e.g., display an error message)
      }
    } catch (error) {
      console.error('Error fetching assignments:', error);
      // Handle errors gracefully (e.g., display an error message)
    }
  };

  const handleCardClick = (e, func) => {
    func((prevValue) => !prevValue); // Toggling a local state
    toggleMenu((prevMenu) => !prevMenu); // Toggling the menu state
  };

  return (
    <div className="flex">
      <div className="">
        {/* Sidebar */}
        <Sidebar createAssignment={toggleCreateAssignment} onClick={handleCardClick} />
      </div>
      <div className="w-full">
        {/* Header */}
        <Navbar userName={userName} />
        {/* Main Content */}
        {addSubject ? (
          <AddSubject func={toggleAddSubject} val={addSubject} onClick={handleCardClick} />
        ) : null}
        {createAssignment ? (
          <AddAssignment func={toggleCreateAssignment} onClick={handleCardClick} />
        ) : null}
        {menu ? (
          <div className="flex flex-wrap gap-4 m-4 justify-between ">
         <div className="ml-20">
         <DueAssignment assignments={assignments}  />
          </div>
          
          
            <Doughnut data={passFail} className="max-h-64 max-w-96 mr-20"/>
            <SubjectsList />
           
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Dashboard;
