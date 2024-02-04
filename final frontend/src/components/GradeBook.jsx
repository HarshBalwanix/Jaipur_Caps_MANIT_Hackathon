import React from "react";

const GradeBook = () => {
  const students = [{ name: "John Doe", rollNo: "001" }];

  const courses = [
    {
      courseCode: "CS101",
      title: "Introduction to Computer Science",
      type: "Core",
      grade: "A",
    },
    { courseCode: "MATH202", title: "Calculus II", type: "Core", grade: "B" },
    {
      courseCode: "ENG101",
      title: "English Composition",
      type: "General Education",
      grade: "C",
    },
    { courseCode: "PHYS201", title: "Physics I", type: "Core", grade: "A" },
  ];

  const totalCourses = courses.length;
  const gradeCounts = {
    A: 0,
    B: 0,
    C: 0,
    F: 0,
  };

  courses.forEach((course) => {
    const { grade } = course;
    if (gradeCounts.hasOwnProperty(grade)) {
      gradeCounts[grade]++;
    }
  });

  return (
    <div className=" text-black  flex flex-col items-center justify-center ">
      <table className=" mb-4 ">
        <thead>
          <tr className="bg-gray-300">
            <th className="py-2 bg-gray-300 px-4 border rounded-tl-lg ">
              Name
            </th>
            <th className="py-2 bg-gray-300 px-4 border rounded-tr-lg">
              Roll No
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border">{student.name}</td>
              <td className="py-2 px-4 border">{student.rollNo}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className="table-auto mb-4">
        <thead>
          <tr className="bg-gray-300">
            <th className="py-2 px-4 border rounded-tl-lg">Course Code</th>
            <th className="py-2 px-4 border">Title</th>
            <th className="py-2 px-4 border">Type</th>
            <th className="py-2 px-4 border rounded-tr-lg">Grade</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border">{course.courseCode}</td>
              <td className="py-2 px-4 border">{course.title}</td>
              <td className="py-2 px-4 border">{course.type}</td>
              <td className="py-2 px-4 border">{course.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className="border-none">
        <thead>
          <tr className="bg-gray-300">
            <th className="py-2 px-4 border rounded-tl-lg">Total Courses</th>
            <th className="py-2 px-4 border">Total A Grades</th>
            <th className="py-2 px-4 border">Total B Grades</th>
            <th className="py-2 px-4 border">Total C Grades</th>
            <th className="py-2 px-4 border rounded-tr-lg">Total F Grades</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border">{totalCourses}</td>
            <td className="py-2 px-4 border">{gradeCounts.A}</td>
            <td className="py-2 px-4 border">{gradeCounts.B}</td>
            <td className="py-2 px-4 border">{gradeCounts.C}</td>
            <td className="py-2 px-4 border">{gradeCounts.F}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GradeBook;
