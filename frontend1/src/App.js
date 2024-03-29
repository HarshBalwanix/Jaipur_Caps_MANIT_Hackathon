import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddSubject from "./components/AddSubject";
import CreatedSubjectList from "./components/Subjectlist";
import ViewAssignment from "./components/ViewAssignment";
import StudentEnrolled from "./components/StudentEnrolled";
import QuizComponent from "./components/QuizComponent";
import AddAssignment from "./components/AddAssignment";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Fprofile from "./components/Fprofile";
import SubjectDetails from "./components/SubjectDetails";
import StudentDashboard from "./components/StudentDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addSubject" element={<AddSubject />} />
        <Route path="/listSubject" element={<CreatedSubjectList />} />
        <Route path="/viewAssignment" element={<ViewAssignment />} />
        <Route path="/studentsEnrolled" element={<StudentEnrolled />} />
        <Route path="/createquiz" element={<QuizComponent />} />
        <Route path="/addAssignment" element={<AddAssignment />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/subdetails" element={<SubjectDetails />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />

        <Route path="/fdetails" element={<Fprofile />} />
      </Routes>
    </Router>
  );
}

export default App;
