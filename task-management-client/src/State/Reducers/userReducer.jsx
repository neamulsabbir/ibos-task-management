import { USER_DATA } from "../actionTypes/actionTypes"

const initialState ={
    userData:[]
}
export const userReducer = (state = initialState, action) => {
    switch (action.type){
        case USER_DATA: 
        return{
            ...state,
            userData: action.payload
        }
        default: 
        return state
    }
}