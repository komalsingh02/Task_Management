import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="h-[98vh] flex justify-center items-center">
      <div className="p-4 w-2/6 bg-gray-800">
        <div className="text-2xl font-semibold ">Login</div>
        <input
          type="username"
          placeholder="username"
          className=" bg-gray-700 px-3 py-2 my-3 w-full rounded"
          name="username"
        />
        <input
          type="password"
          placeholder="password"
          className=" bg-gray-700 px-3 py-2 my-3 w-full rounded"
          name="password"
        />
        <div className="w-full flex justify-between items-center">
          <button className="bg-pink-900  px-3 py-2  rounded font-semibold">
            Login
          </button>
          <Link to="/signup"> Not Having Account ?SignUp</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
