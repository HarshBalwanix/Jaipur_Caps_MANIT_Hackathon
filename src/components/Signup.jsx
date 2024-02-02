"use client";
import Link from "next/link";
import React, { useState } from "react";

const Signup = ({ setAuthState }) => {
  const [selectedRole, setSelectedRole] = useState("student");

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  return (
    <div className="w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100">
      <h1 className="text-5xl font-semibold">Create an Account</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Join us! Please enter your details to create an account.
      </p>
      <div className="mt-8">
        <div className="flex flex-col">
          <label className="text-lg font-medium">Email</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your Email"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-lg font-medium">Password</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your Password"
            type={"password"}
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-lg font-medium">Role</label>
          <select
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            value={selectedRole}
            onChange={handleRoleChange}
          >
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
          </select>
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg">
            Create Account
          </button>
          {/* <button
            // onClick={() => setAuthState("login")}
            className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4  rounded-xl text-gray-700 font-semibold text-lg border-2 border-gray-100 "
          >
            Sign in
          </button> */}
        </div>
        <div className="mt-8 flex justify-center items-center">
          <p className="font-medium text-base">Already have an account?</p>
          <Link
            href={"/signin"}
            // onClick={() => setAuthState("login")}
            className="ml-2 font-medium text-base text-violet-500"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
