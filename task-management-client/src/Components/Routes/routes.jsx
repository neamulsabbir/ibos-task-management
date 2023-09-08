import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main/";
import Home from "../Pages/Main/Home/Home";
import SignUp from "../Pages/Main/SignUp/SignUp";
import SignIn from "../Pages/Main/SignIn/SignIn";
import AddTask from "../Pages/Main/AddTask/AddTask";
import Profile from "../../SharedFolder/Profile/Profile";
import EditProfile from "../../SharedFolder/Profile/EditProfile/EditProfile";
import TasksDetail from "../Pages/Main/TasksDetail/TasksDetail";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/sign-up',
        element: <SignUp />
      },
      {
        path:'/sign-in',
        element: <SignIn />
      },
      {
        path: '/add-task',
        element: <AddTask />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/edit-profile/:name',
        element: <EditProfile />
      },
      {
        path: '/detail/:id',
        element: <TasksDetail />
      }
    ]

  }
]);

export default routes;
