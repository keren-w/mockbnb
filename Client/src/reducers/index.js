import { combineReducers } from 'redux'
import {locations, locationsFilter} from './locations'
import location from './location'
import { loginDetails, signUpUser } from './loginDetails'

const mockbnbApp = combineReducers({
        loginDetails, 
        signUpUser,
        locations,
        locationsFilter,
        location
    })

export default mockbnbApp