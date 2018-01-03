import React, { Component } from 'react';
import styled from 'styled-components';
let google = window.google;

export default class Map extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
          let map = new google.maps.Map(this.$mapDiv, {
            center: {lat: 20, lng: -25},
            zoom: 2
          });
        this.props.getMap(map);
    }

    render() {
        return <div ref={mapDiv => this.$mapDiv = mapDiv} id="loactions-map"></div>
    }
}