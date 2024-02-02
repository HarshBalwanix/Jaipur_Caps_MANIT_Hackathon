import React from 'react';
import './App.css';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  return (
    <Router>
      <div className="flex">
        <div className="">
          {/* Sidebar */}
          <Sidebar />
        </div>
        <div className="w-full">
          {/* Header */}
          <Navbar />
          {/* Main Content */}
          <div className="flex flex-wrap gap-4 m-4 ">
            {/* Adjust margin here */}
            <Card icon={faUsers} title="Card Title" />
            <Card icon={faUsers} title="Card Title" />
            <Card icon={faUsers} title="Card Title" />
            {/* Add more content as needed */}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
