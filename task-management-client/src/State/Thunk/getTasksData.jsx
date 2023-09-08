import { loadTasksData } from "../actionCreator/actioncreator"

export const getTasksData = () => {
    return async (dispatch) => {
        const res = await fetch('http://localhost:3005/api/manageTasks')
        const data = await res.json()

        dispatch(loadTasksData(data))
    }
}