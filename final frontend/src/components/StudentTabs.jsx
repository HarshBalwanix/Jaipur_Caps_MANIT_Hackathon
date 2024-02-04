import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MyDetails from "./Mydetails";
import GradeBook from "./GradeBook";
import MyClasses from "./MyClasses";

const StudentTabs = ({studentData}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const CustomTabPanel = ({ value, index, children }) => (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );

  return (
    <div
      className=""
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: "600px",
          height: "700px",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="My Details" {...a11yProps(0)} />
          <Tab label="My Classes" {...a11yProps(1)} />
          <Tab label="Gradebook" {...a11yProps(2)} />
        </Tabs>

        <CustomTabPanel value={value} index={0}>
          <MyDetails />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {/* <SubjectsList /> */}
          <MyClasses />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <GradeBook />
        </CustomTabPanel>
      </Box>
    </div>
  );
};

export default StudentTabs;
