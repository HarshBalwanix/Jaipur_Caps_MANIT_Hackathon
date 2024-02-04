import React from "react";
import { Link } from "react-router-dom";

const MyClasses = () => {
  const subjects = [
    { id: 1, name: "Mathematics" },
    { id: 2, name: "Physics" },
    { id: 3, name: "English" },
  ];

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-9 rounded-lg bg-[#d9d9d9]">
        {subjects.map((subject) => (
          <Link to={`/subject/${subject.id}`} key={subject.id}>
            <div className="bg-white p-4 flex justify-between rounded-md  shadow-md cursor-pointer hover:shadow-lg">
              <h2 className="text-xl ml-0 font-semibold mb-2">
                {subject.name}
              </h2>
              <div className="text-2xl">👁</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MyClasses;
