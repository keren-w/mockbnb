import React, { Component } from 'react';
import styled from 'styled-components';
import LocationPreview from '../LocationPreview';
import Marker from '../Marker';
import VisibleLocations from '../VisibleLocations/index'

export default class Listing extends Component {
    constructor() {
        super()
        this.state = ({visibleLocations: []})
        this.setHighlightOndItem = this.setHighlightOndItem.bind(this);
        this.removeHighlightFromItem = this.removeHighlightFromItem.bind(this);
    }

    componentWillMount() {
        this.setState({visibleLocations: this.props.visibleLocations})
    }

    componentWillReceiveProps(nextProps) {
        this.setState({visibleLocations: nextProps.visibleLocations})
    }

    setHighlightOndItem(locationId) {
        let {visibleLocations} = this.state;
        visibleLocations.forEach(item => {
            if (item._id === locationId) {
                item.highlighted = true;
            }
        });
        this.setState({visibleLocations})
        return;
    }

    removeHighlightFromItem(locationId) {
        let {visibleLocations} = this.state;
        visibleLocations.forEach(item => {
            if (item._id === locationId) {
                item.highlighted = false;
            }
        })
        this.setState({visibleLocations})
        return;
    }

    render() {
        let {visibleLocations} = this.state;
        let {map} = this.props;

        return <ListingContainer>
            {visibleLocations.map(item => <div key={item._id} 
                onMouseEnter={() => this.setHighlightOndItem(item._id)} 
                onMouseLeave={() => this.removeHighlightFromItem(item._id)}>
                    <LocationPreview item={item} />
                    <Marker map={map} item={item} />
                </div>)}
        </ListingContainer>
    }
}

/********************** Styled Components **********************/

const ListingContainer = styled.div`
width: 66%;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
grid-gap: 15px;
padding: 24px;

@media (max-width:1128px) and (min-width: 744px) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(345px, 1fr));
}

@media (max-width:743px) and (min-width: 464px) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(460px, 1fr));
}

@media (max-width:463px) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
`;