import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = ({ setAuthState }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "student",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    // Add logic to handle form submission, e.g., sending data to the server
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-indigo-500">
      <div className="w-96 bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
          Join Us! Create an Account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-1 text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border-2 border-gray-300 rounded-md p-2"
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-1 text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full border-2 border-gray-300 rounded-md p-2"
              placeholder="Enter your Password"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-1 text-gray-700">
              Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="w-full border-2 border-gray-300 rounded-md p-2"
            >
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition duration-300"
          >
            Create Account
          </button>
        </form>
        <div className="mt-4 flex flex-col items-center">
          <p className="text-base text-gray-700">Already have an account?</p>
          <Link
            to="/signin"
            className="mt-2 text-base text-yellow-500 hover:underline"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
