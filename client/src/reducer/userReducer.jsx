import { LOGIN, LOGOUT, REGISTER } from "../action/constant";

const initialState = {
    users: [],
    loggedInUser: null,
}

export const userData = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        
        case LOGIN:
            return {
                ...state,
                user: action.payload
            }

        case LOGOUT:
            return {
                ...state,
                user: null
            }
        
        default:
            return state;
    }
}