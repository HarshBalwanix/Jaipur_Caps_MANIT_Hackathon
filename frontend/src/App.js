import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddSubject from "./components/AddSubject";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/addSubject" element={<AddSubject />} />
      </Routes>
    </Router>
  );
}

export default App;
