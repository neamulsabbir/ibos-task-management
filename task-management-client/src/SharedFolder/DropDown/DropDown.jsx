import { useDispatch, useSelector } from "react-redux";
import { genarateUserData } from "../../State/actionCreator/actioncreator";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Components/CustomHook/useAuth";

const shadow = {
  boxShadow:
    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
};

const DropDown = () => {
  const user = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userData.userData);

  const isDropDown = useSelector((state) => state.isDropDown.isDropDown);
//   console.log(isDropDown);

  useEffect(() => {
    dispatch(genarateUserData(user));
  }, [user, dispatch]);

  const handleLogout = () => {
    localStorage.clear(dispatch(genarateUserData({})));
    navigate("/sign-in");
  };

  return (
    <div
      style={shadow}
      className={`absolute duration-1000 bg-white text-black text-right rounded-b-lg  ${
        isDropDown ? "top-16 right-36" : "-top-96 right-36"
      }`}
    >
      <h1 className="text-lg font-semibold pt-5 px-5">{users?.name}</h1>
      <h1 className="px-5">{users?.email}</h1>
      <div className="border-t-2 border-b-2 mb-4 py-2 mt-4">
        <Link to="/profile">
          <h1 className="px-5">Profile Update</h1>
        </Link>
      </div>
      <h1
        onClick={handleLogout}
        className="bg-black text-white py-1 font-bold text-center rounded-b-lg"
      >
        Log Out
      </h1>
    </div>
  );
};

export default DropDown;
