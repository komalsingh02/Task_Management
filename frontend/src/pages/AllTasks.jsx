import React, { useState } from "react";
import Cards from "../components/Home/Cards";
import { IoAddCircleOutline } from "react-icons/io5";
import InputData from "../components/Home/InputData";
const AllTasks = () => {
  const [InputValue, setInputValue] = useState("hidden");
  return (
    <>
      <div>
        <div className="w-full flex justify-end px-4 py-2">
          <button onClick={() => setInputValue("fixed")}>
            <IoAddCircleOutline className="text-4xl text-gray-600  hover:text-gray-100 transition-all duration-700" />
          </button>
        </div>
        <Cards home={"true"} setInputValue={setInputValue} />
      </div>
      <InputData InputValue={InputValue} setInputValue={setInputValue} />
    </>
  );
};

export default AllTasks;
