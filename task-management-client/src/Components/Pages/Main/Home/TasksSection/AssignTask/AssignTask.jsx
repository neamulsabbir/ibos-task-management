import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useTasks from "../../../../../CustomHook/useTasks";
import { Link } from "react-router-dom";
import MarkDone from "../MarkDone/MarkDone";

const shadow = {
  boxShadow:
    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
};

const AssignTask = () => {
  const users = useSelector((state) => state.userData.userData);
  const [assignTask, setAssignTask] = useState({});

  const [tasks] = useTasks();
//   console.log(assignTask);

  useEffect(() => {
    const foundTask = tasks.find((task) =>
      task.assignTask.includes(users?.email)
    );
    if (foundTask) {
      setAssignTask(foundTask);
    }
  }, [tasks, users]);
  
  return (
    <div className="mt-10">
      {assignTask ? (
        <h1 className="text-xl ">
          You have assign task from{" "}
          <span className="font-black">{assignTask?.name}</span>
        </h1>
      ) : (
        <h1>You don't have any assigned tasks.</h1>
      )}

      <div>
        <div style={shadow} className="mt-5 p-5 rounded-md">
          <div className="flex">
            <p className="bg-black text-white inline-block px-3 py-1 rounded-xl text-sm">
              {assignTask?.priority}
            </p>
            <p className="ml-2 bg-black text-white inline-block px-3 py-1 rounded-xl text-sm">
              {assignTask?.status}
            </p>
          </div>
          <div>
            {assignTask?.status !== "Completed" && <MarkDone task={assignTask} />}

            <div className="flex mt-2">
              <h1>Task assign Date:</h1>
              <p className="ml-2 text-base">{assignTask?.date}</p>
            </div>
            <h1 className="text-3xl mt-5 mb-2">{assignTask?.title}</h1>
            <Link to={`/detail/${assignTask?._id}`} className="">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignTask;
