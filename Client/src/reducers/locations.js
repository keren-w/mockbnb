export const locations = (state = {list: [], status: null}, action) => {
  switch (action.type) {
    case 'LOADING_LOCATIONS':
      return {...state, list: [], status: "Fetching locations..."}
    case 'LOCATIONS_FETCHED':
      action.locations.status = null;
      return {...state, list: action.locations, status: null}
    case 'ERROR_LOADING_LOCATIONS':
      return {...state, list: [], status: "Error fetching locations"}
    default:
      return state
  }
}

export const locationsFilter = (state = 'SHOW_ALL', action)  => {
  let {type, filter, userInput} = action;
  switch (type) {
    case 'SET_LOCATIONS_FILTER':
      return {filter, userInput}
    default:
      return state;
  }
}