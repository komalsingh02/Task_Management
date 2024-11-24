import React from "react";
import { RxCross2 } from "react-icons/rx";

const InputData = ({ InputValue, setInputValue }) => {
  return (
    <>
      <div
        className={`${InputValue} top-0 left-0 bg-gray-800 opacity-70 h-screen w-full`}
      ></div>
      <div
        className={`${InputValue} top-0 left-0 flex items-center justify-center h-screen w-full`}
      >
        <div className="w-2/6 bg-gray-900 p-4">
          <div className="flex justify-end">
            <button
              className="text-2xl"
              onClick={() => setInputValue("hidden")}
            >
              <RxCross2 />
            </button>
          </div>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="px-3 py-2 rounded w-full  bg-gray-600"
          />
          <textarea
            placeholder="Desc..."
            name="desc"
            cols="10"
            rows="10"
            className=" w-full px-3 py-2 my-3 bg-gray-600 "
          ></textarea>
          <button className="bg-pink-900 px-3 py-2rounded font-semibold">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default InputData;
