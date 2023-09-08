import { CLOSE_DROP_DOWN, OPEN_DROP_DOWN } from "../actionTypes/actionTypes"

const initialState = {
    isDropDown : false
}

export const dropDownReducer = (state = initialState, action) => {
    switch (action.type){
        case OPEN_DROP_DOWN:
            return{
                ...state,
                isDropDown: true
            }
        case CLOSE_DROP_DOWN:
            return{
                ...state,
                isDropDown: false
            }
        default:
            return state
    }
}