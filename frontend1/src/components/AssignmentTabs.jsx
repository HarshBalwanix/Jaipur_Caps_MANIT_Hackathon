// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import TableContainer from "@mui/material/TableContainer";
// import Table from "@mui/material/Table";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import TableCell from "@mui/material/TableCell";
// import TableBody from "@mui/material/TableBody";
// import Paper from "@mui/material/Paper";
// const AssignmentTabs = () => {
//   const [value, setValue] = useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const a11yProps = (index) => {
//     return {
//       id: `assignment - tab -${index}`,
//       "aria-controls": `assignment - tabpanel - ${index}`,
//     };
//   };

//   const CustomTabPanel = ({ value, index, children }) => (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`assignment - tabpanel - ${index}`}
//       aria-labelledby={`assignment - tab - ${index}`}
//     >
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </div>
//   );

//   return (
//     <Box sx={{ width: "900px", margin: "auto", marginTop: "50px" }}>
//       <Tabs value={value} onChange={handleChange} aria-label="assignment tabs">
//         <Tab label="Due Assignments" {...a11yProps(0)} />
//         <Tab label="Completed Assignments" {...a11yProps(1)} />
//         <Tab label="Pending Grading" {...a11yProps(2)} />
//         <Tab label="Graded Assignments" {...a11yProps(3)} />
//       </Tabs>

//       <CustomTabPanel value={value} index={0}>
//         <p>Content for Due Assignments tab</p>
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Assignment Name</TableCell>
//                 <TableCell>Due Date</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {DueAssignments.map((assignment) => (
//                 <TableRow key={assignment.id}>
//                   <TableCell>{assignment.name}</TableCell>
//                   <TableCell>{assignment.dueDate}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={1}>
//         <p>Content for Completed Assignments tab</p>
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Assignment Name</TableCell>
//                 <TableCell>Completion Date</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {completedAssignments.map((assignment) => (
//                 <TableRow key={assignment.id}>
//                   <TableCell>{assignment.name}</TableCell>
//                   <TableCell>{assignment.completionDate}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={2}>
//         <p>Content for Pending Grading tab</p>
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Assignment Name</TableCell>
//                 {/* Add more columns as needed */}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {pendingGradingAssignments.map((assignment) => (
//                 <TableRow key={assignment.id}>
//                   <TableCell>{assignment.name}</TableCell>
//                   {/* Add more cells as needed */}
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={3}>
//         <p>Content for Graded Assignments tab</p>
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Assignment Name</TableCell>
//                 {/* Add more columns as needed */}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {gradedAssignments.map((assignment) => (
//                 <TableRow key={assignment.id}>
//                   <TableCell>{assignment.name}</TableCell>
//                   {/* Add more cells as needed */}
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </CustomTabPanel>
//     </Box>
//   );
// };

// export default AssignmentTabs;
