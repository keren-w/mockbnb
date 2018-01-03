export default function location(state = { item: {}, status: null }, action) {
    switch (action.type) {
      case 'LOADING_LOCATION':
        return {...state, status: 'Fetching location...'}
      case 'LOCATION_FETCHED':
        return {item: action.location, status: null};
      case 'ERROR_LOADING_LOCATION':
        return {...state, status: 'Error Fetching Location'}
      default:
        return state
    }
  }