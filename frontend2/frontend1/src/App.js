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
import Fprofile from "./components/FProfile";
import SubjectListSelect from "./components/StudentListFull";
import SubjectDetails from "./components/SubjectDetails";
import GradeBook from "./components/GradeBook";
import AssignmentSubmission from "./components/AssignmentSubmission";
// import Signup from "./components/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/addSubject" element={<AddSubject />} />
        <Route path="/listSubject" element={<CreatedSubjectList />} />
        <Route path="/viewAssignment" element={<ViewAssignment />} />
        <Route path="/studentsEnrolled" element={<StudentEnrolled />} />
        <Route path="/createquiz" element={<QuizComponent />} />
        <Route path="/addAssignment" element={<AddAssignment />} />
        <Route path="/profile" element={<Fprofile />} />
        <Route path="/subjectDetails/:id" element={<SubjectDetails />} />
        <Route path="/GradeBook" element={<GradeBook />} />
        <Route path="/AssignmentGrading" element={<AssignmentSubmission />} />
      </Routes>
    </Router>
  );
}

export default App;
