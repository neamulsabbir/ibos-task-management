import { CLEAR_FILTER, LOAD_TASKS, SEND_FILTER } from "../actionTypes/actionTypes";

const initialState = {
  tasks: [],
  filterTask: []
};

export const loadTasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TASKS:
      console.log(action.payload);
      return {
        ...state,
        tasks: action.payload,
      };

    case SEND_FILTER:
      const datas = action.payload;  
      console.log(datas);
      let data = []
      data = state.tasks.filter(p => p?.priority === datas?.name || p?.status === datas?.name)
// console.log(data);
      return{
        ...state,
        filterTask: data
      }

      case CLEAR_FILTER:
        return{
          ...state,
          filterTask: []
        }
    default:
      return state;
  }
};
