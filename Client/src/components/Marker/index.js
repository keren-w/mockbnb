import React, { Component } from 'react';
import { isEmpty } from '../Utilities';
const google = window.google;

export default class Marker extends Component {
    constructor() {
        super()
        this.currentMarkers = [];
    }

    componentWillUnmount(nextProps, nextState) {
        this.newMarker && this.newMarker.setMap(null);
    }

    componentWillUpdate() {
        this.newMarker.setMap(null);
    }

    render() {
        let {map, item} = this.props;
        if (isEmpty(map)) {
            return null;
        }
    
        let myPosition = { 
            lat: item.address.lat,
            lng: item.address.lng
        }

        if (item.highlighted) {
            this.newMarker = new google.maps.Marker({
                position: myPosition,
                map: map,
                zIndex: 999,
                icon: {
                    path: 'M 0,0 -5,-7 -25,-7 -25,-32 25,-32 25,-7 5,-7 z',
                    fillColor: '#008489',
                    fillOpacity: 1,
                    scale: 1,
                    strokeColor: '#008489',
                    strokeWeight: 2,
                    labelOrigin: new google.maps.Point(0,-19)
                    },
                label: {
                    text: "₪" + item.price.toString(),
                    fontFamily: "'Nunito Sans', sans-serif",
                    color: 'white',
                    fontWeight: '800',
                    fontSize: '15px'
                }
            })
        } else {
            this.newMarker = new google.maps.Marker({
                position: myPosition,
                map: map,
                icon: {
                    path: 'M 0,0 -5,-7 -25,-7 -25,-32 25,-32 25,-7 5,-7 z',
                    fillColor: 'white',
                    fillOpacity: 1,
                    scale: 1,
                    strokeColor: 'lightgray',
                    strokeWeight: 2,
                    labelOrigin: new google.maps.Point(0,-19)
                    },
                label: {
                    text: "₪" + item.price.toString(),
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontWeight: '800',
                    fontSize: '15px'
                }
            })
        }
        
        return null
    }
}