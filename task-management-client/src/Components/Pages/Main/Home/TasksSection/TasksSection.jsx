import useTasks from "../../../../CustomHook/useTasks";
import AssignTask from "./AssignTask/AssignTask";
import { useSelector } from "react-redux";
import TaskSection from "./TaskSection/TaskSection";
import FilterTask from "./FilterTask/FilterTask";
import ClearFilter from "./ClearFilter/ClearFilter";

const TasksSection = () => {
  const [tasks] = useTasks();
  const users = useSelector((state) => state.userData.userData);
  const filterTask = useSelector((state) => state.tasks.filterTask);
  console.log(filterTask);
  //   console.log(tasks);
  return (
    <div className="px-36 grid grid-cols-12">
      <div className="col-span-2">
        {filterTask.length ? <ClearFilter /> : null}
        <FilterTask />
      </div>
      <div className="col-span-10">
        <h1 className="text-3xl font-bold">All tasks is here</h1>
        {filterTask.length <= 0 ? (
          <div className="grid grid-cols-3 gap-10">
            {tasks.map((task) => (
              <TaskSection task={task} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-10">
            {filterTask.map((task) => (
              <TaskSection task={task} />
            ))}
          </div>
        )}
        <div className=""></div>
        {users && <AssignTask />}
      </div>
    </div>
  );
};

export default TasksSection;
