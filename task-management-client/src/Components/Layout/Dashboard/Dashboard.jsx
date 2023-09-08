import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 gap-5 p-3">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
