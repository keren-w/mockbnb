import React, {Component} from 'react';
import crg from 'city-reverse-geocoder';
let google = window.google;

export default class CityFilterInput extends Component {

    constructor() {
        super()
        this.state = {cityInput: undefined}
        this.handleCityInputChange = this.handleCityInputChange.bind(this)
        this.startAutoComplete = this.startAutoComplete.bind(this)
    }

    handleCityInputChange({target}) {
        this.setState({cityInput: target})
        this.startAutoComplete()
    }

    startAutoComplete() {
        const {handlePlaceChange} = this.props;
        handlePlaceChange(undefined)
        let currentCityInput = this.state.cityInput;
        let autocomplete = new google.maps.places.Autocomplete(currentCityInput, {
            types: ['(cities)'] 
        }); 
        autocomplete.addListener('place_changed', () => {
            let place = autocomplete.getPlace()
            let placeDetails = {
                city: place.name,
                country: crg(place.geometry.location.lat(), place.geometry.location.lng())[0].country
            }
            handlePlaceChange(placeDetails)
        })
    }

    render() {
        return <input type="text" onChange={this.handleCityInputChange}/>
    }
 }


 