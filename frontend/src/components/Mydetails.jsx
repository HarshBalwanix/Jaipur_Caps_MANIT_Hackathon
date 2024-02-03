import React from "react";

const MyDetails = () => {
  return (
    <div className="rounded-3xl bg-zinc-100 max-w-[632px] min-h-[396px] mx-auto">
      <div className=" p-20">
        <div className="flex flex-row mb-4  ">
          <div className="p-1 bg-neutral-600 rounded-md text-white font-bold w-40 mr-4">
            <span className=" pr-4 rounded-xl  ">Name:</span>
          </div>
          <div className="p-2 bg-neutral-600 rounded-md text-white font-bold w-80">
            John Doe
          </div>
        </div>

        <div className="flex flex-row mb-4 ">
          <div className="p-1 bg-neutral-600 rounded-md text-white font-bold w-40 mr-4">
            <span className="pr-4 rounded-xl">Roll Number:</span>
          </div>
          <div className="p-2 bg-neutral-600 rounded-md text-white font-bold w-80">
            123456
          </div>
        </div>

        <div className="flex flex-row mb-4 ">
          <div className="p-1 bg-neutral-600 rounded-md text-white font-bold w-40 mr-4">
            <span className="pr-4 rounded-xl">Class ID:</span>
          </div>
          <div className="p-2 text-white font-bold rounded-md bg-neutral-600 w-80">
            A101
          </div>
        </div>

        <div className="flex flex-row mb-4 ">
          <div className="p-1 bg-neutral-600 rounded-md text-white font-bold w-40 mr-4">
            <span className="pr-4 rounded-xl">Phone Number:</span>
          </div>
          <div className="text-white font-bold p-2 rounded-md bg-neutral-600 w-80">
            123-456-7890
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDetails;
