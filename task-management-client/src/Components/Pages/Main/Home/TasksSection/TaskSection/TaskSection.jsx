import { Link } from "react-router-dom";
import MarkDone from "../MarkDone/MarkDone";

const shadow = {
  boxShadow:
    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
};
const TaskSection = ({ task }) => {
  return (
    <div style={shadow} className="mt-10 p-5 rounded-md">
      <div className="flex">
        <p className="bg-black text-white inline-block px-3 py-1 rounded-xl text-sm">
          {task?.priority}
        </p>
        <p className="ml-2 bg-black text-white inline-block px-3 py-1 rounded-xl text-sm">
          {task?.status}
        </p>
      </div>

      <div className="flex mt-2">
        <h1>Task assign Date:</h1>
        <p className="ml-2 text-base">{task?.date}</p>
      </div>
      <div className="flex">
        <h1>Due Date:</h1>
        <p className="ml-2 text-base">{task?.dueDate}</p>
      </div>
      <div>
        <h1 className="text-2xl mt-5 mb-5 h-20">{task?.title}</h1>
        <Link to={`/detail/${task?._id}`} className="">
          Read More
        </Link>
      </div>
      <div>{task?.status !== "Completed" && <MarkDone task={task} />}</div>
    </div>
  );
};

export default TaskSection;
