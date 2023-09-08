import useTasks from "../../../CustomHook/useTasks";

const shadow = {
  boxShadow:
    "rgba(60, 64, 67, 0.1) 0px 1px 2px 0px, rgba(60, 64, 67, 0.1) 0px 2px 6px 2px",
};

const DashboardTasks = () => {
  const [tasks] = useTasks();
  console.log(tasks);
  return (
    <div style={shadow} className="p-5 rounded-md h-full">
      <div className="grid grid-cols-12 font-bold">
        <h1 className="col-span-1">Sl.</h1>
        <h1 className="col-span-2">Date</h1>
        <h1 className="col-span-5">Title</h1>
        <h1 className="col-span-2">Status</h1>
        <h1 className="col-span-2">Priority</h1>
      </div>
      {tasks.map((task, i) => (
        <div key={i} className="grid grid-cols-12 mt-5">
          <h1 className="col-span-1">{i + 1}</h1>
          <h1 className="col-span-2">{task?.date}</h1>
          <h1 className="col-span-5">{task?.title}</h1>
          <h1 className="col-span-2">{task?.status}</h1>
          <h1 className="col-span-2">{task?.priority}</h1>
        </div>
      ))}
    </div>
  );
};

export default DashboardTasks;
