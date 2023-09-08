import { LOAD_USERS } from "../actionTypes/actionTypes"

const initialState = {
    allUsers:[]
}

export const loadUsersReducers = (state = initialState, action) => {
    switch (action.type){
        case LOAD_USERS: 
        return{
            ...state,
            allUsers: action.payload
        }
        default: 
        return state
    }
}