import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddSubject from "./components/AddSubject";
import CreatedSubjectList from "./components/Subjectlist";
import ViewAssignment from "./components/ViewAssignment";
import StudentEnrolled from "./components/StudentEnrolled";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/addSubject" element={<AddSubject />} />
        <Route path="/listSubject" element={<CreatedSubjectList />} />
        <Route path="/viewAssignment" element={<ViewAssignment />} />
        <Route path="/studentsEnrolled" element={<StudentEnrolled />} />
      </Routes>
    </Router>
  );
}

export default App;
