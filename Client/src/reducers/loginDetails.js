export const loginDetails = (state = {userDetails: {}, loggedIn: false, status: "Logged Out"}, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {userDetails: action.userDetails, loggedIn: true, status: "Logged In"};
        case 'LOGOUT_USER':
            return {userDetails: {}, loggedIn: false, status: "Logged Out"};
        case 'LOGIN_SERVER_ERROR':
            return {...state, loggedIn: false, status: "Server Login Error"};
        case 'AUTH_ERROR':
            return {...state, loggedIn: false, status: "Authentication Error"};
        default:
            return state;
    }
}

export const signUpUser = (state = {}, action) => {
    switch (action.type) {
        case 'USER_SIGNUP':
            return {...state, success: true, status: action.signupResult};
        case 'SIGNUP_ERROR':
            return {...state, success: false, status: action.status};
        case 'SIGNUP_SERVER_ERROR':
            return {...state, success: false, status: "Signup Failed: Server Error"};
        default:
            return state;
    }
}