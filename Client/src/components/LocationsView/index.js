import React, { Component } from 'react';
import styled from 'styled-components';
import VisibleLocations from '../../containers/Locations'; //
import Map from '../Map';

export default class LocationsView extends Component {
    constructor() {
        super()
        this.state = {locationsMap: {}}
        this.getMap = this.getMap.bind(this)
    }

    getMap(mapRef) {
        this.setState({locationsMap: mapRef})
    }

    render() {        
            return ( 
                <ListingContainer>
                    <VisibleLocations map={this.state.locationsMap}/>
                    <MapContainer>
                        <Map getMap={this.getMap}/>
                    </MapContainer>
                </ListingContainer>)
    }
}

/********************** Styled Components **********************/

const ListingContainer = styled.div`
    position: relative;
    top: 128px;
`;

const MapContainer = styled.div`
    position: fixed;
    top: 126px;
    right: 0;
    bottom: 0;

        >#loactions-map {
            height: 100%;
            width: 100%;
        }

        @media (min-width:1129px)  {
            width: 34% 
        }
`;