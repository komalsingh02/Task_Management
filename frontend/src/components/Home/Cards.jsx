import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
const Cards = ({ home, setInputValue }) => {
  const data = [
    {
      title: "a",
      desc: "This is a girl lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero reprehenderit dolor molestias sequi delectus assumenda asperiores officiis veritatis tenetur velit harum aliquam, debitis cumque expedita sunt, suscipit esse voluptates accusamus!",
      status: "Incomplete",
    },
    {
      title: "b",
      desc: "This is a girl lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero reprehenderit dolor molestias sequi delectus assumenda asperiores officiis veritatis tenetur velit harum aliquam, debitis cumque expedita sunt, suscipit esse voluptates accusamus!",
      status: "Incomplete",
    },
    {
      title: "c",
      desc: "This is a girl lorem Lorem ipsum",
      status: "complete",
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-4 p-3">
      {data &&
        data.map((item, index) => (
          <div className="flex flex-col justify-between bg-gray-800 rounded-sm p-4">
            <div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
            <div className="mt-4 w-full flex  items-center ">
              <button className=" bg-red-500  p-2  rounded w-3/6  ">
                {item.status}
              </button>
              <div className=" text-white p-2  w-3/6 text-2xl flex justify-around">
                <button>
                  <FaRegHeart />
                </button>
                <button>
                  <MdEditSquare />
                </button>
                <button>
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
        ))}

      {home === "true" && (
        <div className="flex flex-col justify-center items-center bg-gray-800 rounded-sm p-4 hover:scale-95 hover:cursor-pointer transition-all duration-150">
          <button
            onClick={() => {
              setInputValue("fixed");
            }}
          >
            {" "}
            <IoAddCircleOutline className="text-5xl" />
          </button>
          <h2 className="text-2xl text-gray-300"> Add Task</h2>
        </div>
      )}
    </div>
  );
};
export default Cards;
