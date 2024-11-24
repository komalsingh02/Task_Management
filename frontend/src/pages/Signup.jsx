import React from "react";

const Signup = () => {
  return (
    <div className="h-[98vh] flex justify-center items-center">
      <div className="p-4 w-2/6 bg-gray-800">
        <div className="text-2xl font-semibold">Signup</div>
        <input
          type="username"
          placeholder="username"
          className="bg-gray-700 px-3 py-2  my-3 w-full rounded"
          name="username"
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          name="xyz@example.com"
          required
        />
        <input
          type="password"
          placeholder="password"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          name="password"
        />
        <button className="bg-pink-900 px-3 py-2rounded font-semibold">
          SignUp
        </button>
      </div>
    </div>
  );
};

export default Signup;
