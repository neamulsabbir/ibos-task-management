import { loadUsersData } from "../actionCreator/actioncreator"

export const getUserData = () => {
    return async (dispatch) => {
        const res = await fetch('http://localhost:3005/api/users')
        const data = await res.json()

        dispatch(loadUsersData(data))
    }
}