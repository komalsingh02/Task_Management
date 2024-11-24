import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import { TbNotebookOff } from "react-icons/tb";
import { Link } from "react-router-dom";

function Sidebar() {
  const data = [
    { task: "All tasks", icons: <CgNotes />, link: "/" },
    {
      task: "Important tasks",
      icons: <MdLabelImportant />,
      link: "/importantTasks",
    },
    {
      task: "Completed tasks",
      icons: <FaCheckDouble />,
      link: "/completedTasks",
    },
    {
      task: "Incompleted tasks",
      icons: <TbNotebookOff />,
      link: "/incompletedTasks",
    },
  ];
  return (
    <>
      <div>
        <h2 className="text-xl font-semibold">The Code Master</h2>
        <h4 className="mb-1 text-gray-400  ">komi@gmail.com</h4>
        <hr />
      </div>
      <div>
        {data.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="my-1 flex items-center hover:bg-gray-500 p-1 rounded transition-all "
          >
            {item.icons}
            &nbsp;&nbsp;
            {item.task}
          </Link>
        ))}
      </div>

      <div>
        <button className="bg-gray-600 w-full p-2 rounded">Log Out</button>
      </div>
    </>
  );
}

export default Sidebar;
