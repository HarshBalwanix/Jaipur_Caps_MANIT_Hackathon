import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const StudentSidebar = () => {
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
                My Profile
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/addAssignment" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="plus" className="text-black">
                All Assignment
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/viewAssignment"
              activeClassName="activeClicked"
            ></NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default StudentSidebar;
