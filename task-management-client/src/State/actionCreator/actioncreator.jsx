import {  CLEAR_FILTER, CLOSE_DROP_DOWN, LOAD_TASKS, LOAD_USERS, OPEN_DROP_DOWN, SEND_FILTER, USER_DATA } from "../actionTypes/actionTypes"

export const genarateUserData = data => {
    return {
        type: USER_DATA,
        payload: data
    }
}

export const OpenDropDown = data => {
    return {
        type:OPEN_DROP_DOWN,
        payload: data
    }
}

export const CloseDropDown = data => {
    return {
        type:CLOSE_DROP_DOWN,
        payload: data
    }
}

export const loadUsersData = data => {
    return {
        type:LOAD_USERS,
        payload: data
    }
}
export const loadTasksData = data => {
    return {
        type:LOAD_TASKS,
        payload: data
    }
}
export const sendFilterData = data => {
    return {
        type:SEND_FILTER,
        payload: data
    }
}
export const clearFilter = data => {
    return {
        type:CLEAR_FILTER,
        payload: data
    }
}