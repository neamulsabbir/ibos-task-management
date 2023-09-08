import { Link } from "react-router-dom";
import TasksSection from "./TasksSection/TasksSection";

const Home = () => {
  return (
    <div>
      <div className="flex justify-end mt-10 px-36">
        <Link
          to="/add-task"
          className="bg-black text-white inline-block px-3 py-1 rounded-xl text-sm"
        >
          Add Task
        </Link>
      </div>
      <TasksSection />
      <h1 className="my-10 text-red-200 px-36">After logging in, the page will refresh. Then, it will display the user. Due to time constraints, I am unable to fix this bug.</h1>
    </div>
  );
};

export default Home;
