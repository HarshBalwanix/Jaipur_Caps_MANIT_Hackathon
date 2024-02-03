import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="" backgroundColor="#d9d9d9">
        <CDBSidebarHeader
          className="bg-[#AEA0A0]"
          prefix={<i className="fa fa-bars fa-large "></i>}
        >
          {/* <a href="/" className="text-decoration-none" >
            
          </a> */}
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content  ">
          <CDBSidebarMenu className="text-black">
            <NavLink
              exact
              to="/studentsEnrolled"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="users" className="text-black">
                Student Enrolled
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/addAssignment" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="plus" className="text-black">
                Add Assignment
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/viewAssignment" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line" className="text-black">
                View Assignment
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user" className="text-black">
                Faculty Profile
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
