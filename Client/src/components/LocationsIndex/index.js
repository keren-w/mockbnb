import React from 'react';
import styled from 'styled-components';
import FilterMenu from '../_filtering/FilterMenu';
import LocationsView from '../LocationsView';

export default () => ( 
    // will be eventually just filter
    <div>
        <LocationsHeader>
            <h2>Featured Locations</h2>
            {/* <FilterMenu /> */}
        </LocationsHeader>
        <LocationsView />
    </div>
)

/********************** Styled Components **********************/

const LocationsHeader = styled.div`
    box-sizing: border-box;
    padding: 16px 24px;
    position: fixed;
    top: 64px;
    right: 0;
    left: 0;
    background: white;
    z-index: 98;
    border-bottom: 1px solid lightgray;
`;