import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  CloseDropDown,
  OpenDropDown,
} from "../State/actionCreator/actioncreator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import DropDown from "./DropDown/DropDown";

const Navbar = () => {
  const users = useSelector((state) => state.userData.userData);
  const dispatch = useDispatch();

  const isDropDown = useSelector((state) => state.isDropDown.isDropDown);
  // console.log(isDropDown);

  const handleDropDown = () => {
    if (!isDropDown) {
      dispatch(OpenDropDown());
    } else {
      dispatch(CloseDropDown());
    }
  };

  return (
    <div className="sticky top-0">
      <div className="flex justify-between items-center bg-black text-white px-36 py-4 ">
        <Link to="/">
          <h1 className="text-2xl font-semibold">Task Management</h1>
        </Link>
        {!users ? (
          <Link to="/sign-up">
            <h1 className="bg-white text-black px-4 py-1 font-bold rounded-full">
              Sign Up
            </h1>
          </Link>
        ) : (
          <div className="flex">
            <div onClick={handleDropDown}>
              <img
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-gray-400 cursor-pointer"
                src={`http://localhost:3005/${users?.img}`}
                alt=""
              />
              <DropDown />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
