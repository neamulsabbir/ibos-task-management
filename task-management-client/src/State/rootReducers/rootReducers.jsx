import { combineReducers } from "redux";
import { userReducer } from "../Reducers/userReducer";
import { dropDownReducer } from "../Reducers/dropDownReducer";
import { loadUsersReducers } from "../Reducers/loadUsersReducer";
import { loadTasksReducer } from "../Reducers/loadTasksReducer";

const rootReducers = combineReducers({
  userData: userReducer,
  isDropDown: dropDownReducer,
  allUsers: loadUsersReducers,
  tasks: loadTasksReducer,
});
export default rootReducers;
