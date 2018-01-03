export const setLogin = ({username, password}) => (
    dispatch => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        fetch('/api/login/', {
            method: "post",  
            headers,
            body: JSON.stringify({username, password})
        })
            .then(res => res.json())
            .then(res => {
                if(res.success) {
                    return (dispatch({
                        type: "LOGIN_USER",
                        userDetails: res
                    }))
                } else {
                    return (dispatch({
                        type: "AUTH_ERROR"
                    }))
                }
            })
            .catch(() => dispatch({
                type:"LOGIN_SERVER_ERROR"
            }))
    }
)

export const sendNewUser = (newUserDetails) => (
    dispatch => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        fetch('/api/sign-up/', {
            method: "post",  
            headers,
            body: JSON.stringify(newUserDetails)
        })
            .then(res => res.json())
            .then(res => {
                if(res.success) {
                    return (dispatch({
                        type: "USER_SIGNUP",
                        signupResult: res
                    }))
                } else {
                    return (dispatch({
                        type: "SIGNUP_ERROR",
                        status: res.message
                    }))
                }
            })
            .catch(() => dispatch({
                type:"SIGNUP_SERVER_ERROR"
            }))
    }
)

export const setLogout = () => {
    return {
        type: "LOGOUT_USER"
    }
}

export const getDataFromServer = (apiUrl, type) => (
    dispatch => {
        dispatch({
            type: "LOADING_" + type,
            isLoading: true
        });

        fetch(apiUrl)
            .then(res => res.json())
            .then(res => dispatch({
                type: type + "_FETCHED",
                locations: res
            }))
            .catch(() => dispatch({
                type:"ERROR_LOADING_" + type,
                hasErrored: true
            }))
    }
)

    export const getLocationById = (locationId) => (
        dispatch => {
            dispatch({
                type: "LOADING_LOCATION",
                isLoading: true}
            );
    
            fetch('/api/locations/' + locationId)
                .then(res => res.json())
                .then(res => dispatch({
                    type: "LOCATION_FETCHED",
                    location: res
                }))
                .catch(() => dispatch({
                        type:"ERROR_LOADING_LOCATION",
                        hasErrored: true
                }))
        }
    )

    export const setLocationsFilter = (filter, userInput) => {
        return {
            type: 'SET_LOCATIONS_FILTER',
            filter,
            userInput
        }
    }

