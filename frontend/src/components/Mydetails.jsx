import React from "react";

const MyDetails = () => {
  return (
    <div className="bg-gray-200 w-2/3 mx-auto justify-center p-6 rounded-md shadow-md">
      <div className="flex flex-row mb-4 items-center">
        {/* <div className="mb-2 mr-2">
          <span className="font-bold pr-4 rounded-xl px-12 py-2 inline-block bg-gray-800 text-white ">
            Name:
          </span>
          <div className="bg-white p-2 rounded-md">John Doe</div>
        </div> */}
        <div className="mb-2 mr-4">
          <span className="font-bold pr-4 rounded-xl px-12 py-2 inline-block bg-gray-800 text-white">
            Name:
          </span>
        </div>
        <div className="bg-white p-2 rounded-md">John Doe</div>
      </div>

      <div className="flex flex-row mb-4 items-center">
        <div className="mb-2 mr-4">
          <span className="font-bold pr-4 rounded-xl px-12 py-2 inline-block bg-gray-800 text-white">
            Roll Number:
          </span>
        </div>
        <div className="bg-white p-2 rounded-md">123456</div>
      </div>

      <div className="flex flex-row mb-4 items-center">
        <div className="mb-2">
          <span className="font-bold pr-4 rounded-xl px-12 py-2 inline-block bg-gray-800 text-white">
            Class ID:
          </span>
        </div>
        <div className="bg-white p-2 rounded-md">A101</div>
      </div>

      <div className="flex flex-row mb-4 items-center">
        <div className="mb-2">
          <span className="font-bold pr-4 rounded-xl px-12 py-2 inline-block bg-gray-800 text-white">
            Phone Number:
          </span>
        </div>
        <div className="bg-white p-2 rounded-md">123-456-7890</div>
      </div>
    </div>
  );
};

export default MyDetails;
