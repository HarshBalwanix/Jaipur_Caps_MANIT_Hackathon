import React, { useState, useEffect } from "react";

const Fprofile = () => {
  const [facultyProfile, setFacultyProfile] = useState(null);

  useEffect(() => {
    // Make a fetch request to the API to get faculty profile data
    const fetchFacultyProfile = async () => {
      try {
        const response = await fetch('http://localhost:3000/getFaculty', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ teacherId: '65bce5ed3d243a022404daad' }) // Replace with the actual teacher ID
        });

        if (response.ok) {
          const data = await response.json();
          setFacultyProfile(data);
        } else {
          console.error('Error fetching faculty profile:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching faculty profile:', error);
      }
    };

    fetchFacultyProfile();
  }, []); // Empty dependency array to fetch data once on component mount

  return (
    <div className="rounded-lg bg-gradient-to-r from-neutral-500 via-neutral-600 to-neutral-700 max-w-md mx-auto p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-8">Faculty Profile</h2>
      {facultyProfile && (
        <>
          <div className="mb-4">
            <label className="block text-white font-bold mb-2">Name:</label>
            <div className="bg-white rounded-lg p-2 text-gray-800 font-semibold">
              {facultyProfile["Basic Details"].name}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-white font-bold mb-2">Faculty ID:</label>
            <div className="bg-white rounded-lg p-2 text-gray-800 font-semibold">
              {facultyProfile["Basic Details"].id}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-white font-bold mb-2">Email:</label>
            <div className="bg-white rounded-lg p-2 text-gray-800 font-semibold">
              {facultyProfile["Basic Details"].email}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-white font-bold mb-2">Subjects Enrolled:</label>
            <div className="flex flex-wrap">
              {facultyProfile.Subjects.map((subject) => (
                <div
                  key={subject._id}
                  className="bg-white rounded-lg p-2 text-gray-800 font-semibold mr-2 mb-2"
                >
                  {subject.name}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Fprofile;
