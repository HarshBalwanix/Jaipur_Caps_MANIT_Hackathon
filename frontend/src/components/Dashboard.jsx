import React from "react";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Card from "./Card";
// import MyDetails from "./Mydetails";

function Dashboard() {
  return (
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
          <Card icon={faUsers} title="Add Subject" link="/addSubject" />
          <Card icon={faUsers} title="Card Title" />
          <Card icon={faUsers} title="Card Title" />
        </div>
        {/* <div>
          <MyDetails />
        </div> */}
      </div>
    </div>
  );
}

export default Dashboard;
