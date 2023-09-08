import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";


const Dashboard = () => {
    return (
        <div>
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default Dashboard;