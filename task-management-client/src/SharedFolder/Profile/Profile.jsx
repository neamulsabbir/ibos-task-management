import MyTask from "./MyTask/MyTask";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Profile = () => {
  const users = useSelector((state) => state.userData.userData);

  return (
    <div className="px-36 grid grid-cols-12">
      <div className="col-span-3 border-r-2 p-5 h-screen">
        <div className="">
          <div>
            <div className="flex flex-col items-center">
              {users?.img ? (
                <div>
                  <img
                    className="w-40 h-40 bg-white rounded-full flex items-center justify-center border-2 border-gray-400 "
                    src={`http://localhost:3005/${users?.img}`}
                    alt=""
                  />
                </div>
              ) : (
                <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center border-2 border-gray-400 cursor-pointer">
                  <FontAwesomeIcon
                    className="text-black text-4xl font-bold"
                    icon={faUser}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h1 className="text-2xl font-bold">{users?.name}</h1>
          <p className="text-xs mt-1">
            Lorem ipsum is a placeholder text used in publishing and graphic
            design to show the visual form of a document .
          </p>
        </div>
        <Link to={`/edit-profile/${users?.name}`}>
          <h1 className="bg-gray-200 py-2 text-center mt-5">Edit Profile</h1>
        </Link>
      </div>
      <div className="col-span-9">
        <MyTask />
      </div>
    </div>
  );
};

export default Profile;
