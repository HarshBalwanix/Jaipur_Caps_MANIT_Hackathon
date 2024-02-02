"use client";
import React, { useState } from "react";

const Login = ({ setAuthState }) => {
  const [selectedRole, setSelectedRole] = useState("student");

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  return (
    <div className="w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100">
      <h1 className="text-5xl font-semibold">Welcome Back</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Welcome back! Please enter your details.
      </p>
      <div className="mt-8">
        <div className="flex flex-col">
          <label className="text-lg font-medium">Email</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-lg font-medium">Password</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your password"
            type={"password"}
          />
        </div>
        <div className="mt-4 flex flex-col">
          <label className="text-lg font-medium">Role</label>
          <select
            className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
            value={selectedRole}
            onChange={handleRoleChange}
          >
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
          </select>
        </div>
        <div className="mt-8 flex justify-between items-center">
          <div>
            <input type="checkbox" id="remember" />
            <label className="ml-2 font-medium text-base" htmlFor="remember">
              Remember for 30 days
            </label>
          </div>
          <button className="font-medium text-base text-violet-500">
            Forgot password ?
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg">
            Sign in
          </button>
          {/* Google sign-in button (if needed) */}
          {/* <button className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4  rounded-xl text-gray-700 font-semibold text-lg border-2 border-gray-100 ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            Sign in with Google
          </button> */}
        </div>
        <div className="mt-8 flex justify-center items-center">
          <p className="font-medium text-base">Don't have an account?</p>
          <button
            // onClick={() => setAuthState("register")}
            className="ml-2 font-medium text-base text-violet-500"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
