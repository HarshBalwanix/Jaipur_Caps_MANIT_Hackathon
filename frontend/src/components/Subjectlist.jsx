// import React from "react";
// import { useNavigate } from "react-router-dom";

// const CreatedSubjectList = ({ subjects }) => {
//   const navigate = useNavigate();

//   const handleView = (subjectId) => {
//     navigate.push(`/view-subject/${subjectId}`);
//   };

//   return (
//     <div>
//       <h2 className="text-3xl font-bold mb-6 text-gray-800">
//         Created Subjects List
//       </h2>
//       {subjects.length === 0 ? (
//         <p className="text-gray-600">No subjects created yet.</p>
//       ) : (
//         <ul className="space-y-4">
//           {subjects.map((subject) => (
//             <li key={subject.id} className="p-6 border rounded-md shadow-md">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <h3 className="text-xl font-semibold text-blue-600 mb-2">
//                     {subject.name}
//                   </h3>
//                   <p className="text-sm text-gray-600">
//                     Students Enrolled: {subject.studentsEnrolled}
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     Created Date: {subject.createdDate}
//                   </p>
//                 </div>
//                 <button
//                   className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
//                   onClick={() => handleView(subject.id)}
//                 >
//                   View
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default CreatedSubjectList;
import React from "react";
import { useNavigate } from "react-router-dom";

const CreatedSubjectList = () => {
  const navigate = useNavigate();

  const subjects = [
    {
      id: 1,
      name: "Mathematics",
      studentsEnrolled: 25,
      createdDate: "2022-03-01",
    },
    {
      id: 2,
      name: "Science",
      studentsEnrolled: 20,
      createdDate: "2022-03-05",
    },
    {
      id: 3,
      name: "History",
      studentsEnrolled: 18,
      createdDate: "2022-03-10",
    },
  ];

  const handleView = (subjectId) => {
    navigate(`/view-subject/${subjectId}`);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Created Subjects List
      </h2>
      {subjects.length === 0 ? (
        <p className="text-gray-600">No subjects created yet.</p>
      ) : (
        <ul className="space-y-4">
          {subjects.map((subject) => (
            <li key={subject.id} className="p-6 border rounded-md shadow-md">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    {subject.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Students Enrolled: {subject.studentsEnrolled}
                  </p>
                  <p className="text-sm text-gray-600">
                    Created Date: {subject.createdDate}
                  </p>
                </div>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                  onClick={() => handleView(subject.id)}
                >
                  View
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CreatedSubjectList;
