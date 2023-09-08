import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTasks from "../../../CustomHook/useTasks";
import useUser from "../../../CustomHook/useUser";
import { faTasks, faUsers } from "@fortawesome/free-solid-svg-icons";

const shadow = {
    boxShadow:
      "rgba(60, 64, 67, 0.1) 0px 1px 2px 0px, rgba(60, 64, 67, 0.1) 0px 2px 6px 2px",
  };

const DashboardInfo = () => {
  const [tasks] = useTasks();
  const [allUsers] = useUser();
  return (
    <div style={shadow} className="bg-white rounded-md mb-8 p-5 h-full w-full">
      <div className="flex items-center justify-between gap-5">
        <div className="bg-red-500 text-white inline-block text-2xl font-semibold p-8 w-full">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faTasks} />
            <h1 className="font-normal mt-2">TOTAL TASKS</h1>
          </div>
          <p>{tasks.length}</p>
        </div>
        <div className="bg-stone-600 text-white inline-block text-2xl font-semibold p-8 w-full">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faUsers} />
            <h1 className="font-normal mt-2">TOTAL USERS</h1>
          </div>
          <p>{allUsers.length}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardInfo;
