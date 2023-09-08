import {
    faBorderAll,
  faHouse,
  faListCheck,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className=" bg-black h-[calc(100vh-42px)] p-5 rounded-lg sticky top-0">
        <div className="flex flex-col justify-between h-full text-white border-b border-gray-400 pb-5">
          <h1 className="text-xl font-bold text-center border-b pb-2">Task Management</h1>
          <div>
            <div className="flex items-center mt-10">
              <FontAwesomeIcon icon={faBorderAll} />
              <h1 className="text-lg ml-4">
                <Link to="/dashboard">Dashboard</Link>
              </h1>
            </div>
            <div className="flex items-center mt-3">
              <FontAwesomeIcon icon={faListCheck} />
              <h1 className="text-lg ml-4">
                <Link to="/dashboard/tasks">Tasks</Link>
              </h1>
            </div>
            <div className="flex items-center mt-3">
              <FontAwesomeIcon icon={faUsers} />
              <h1 className="text-lg ml-4">
                <Link to="/dashboard/users">Users</Link>
              </h1>
            </div>
          </div>
          <div className="mt-auto text-sm flex items-center ">
            <FontAwesomeIcon icon={faHouse} />
            <Link className="ml-3" to="/">
              {" "}
              Back to Home{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
