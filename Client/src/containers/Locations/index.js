import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDataFromServer } from '../../actions';
import VisibleLocations from '../../components/VisibleLocations';

/***************** Returns filtered locations to display *****************/
const getFilteredLocations = (locations, filterSelect) => {
    let {filter, userInput} = filterSelect;
    let {list} = locations;
    switch(filter) {
        case 'show_all':
            return locations;
        case 'by_city':
           let filteredByCity = list.filter(loc => {
                let {city, country} = loc.address;
                return city === userInput.city && country === userInput.country
            })
            return {list: filteredByCity}
        case 'by_guest_num':
            let filteredByGuestNum = list.filter(loc => {
                let {guests} = loc.theSpace;
                return guests === parseInt(userInput)
            })
            return {list: filteredByGuestNum}
        case 'by_price':
            return locations;
        default:
            return locations;
    }
}

function mapStateToProps({loginDetails, locations, locationsFilter}) {
    return {
        loginDetails, 
        locations: getFilteredLocations(locations, locationsFilter)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getLocations: () => {dispatch(getDataFromServer('/api/locations', "LOCATIONS"))}
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(VisibleLocations)