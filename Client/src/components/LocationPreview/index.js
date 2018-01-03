import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default class LocationPreview extends Component {
    constructor() {
        super()
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        let {item} = this.props;
        let beds = item.theSpace.beds>1 ? "BEDS" : "BED";
        let itemUrl = `/locations/${item._id}`;
        return (
            <Link to={itemUrl} style={{ textDecoration: 'none' }}>
                <LocationPreviewContainer>
                    <PrevImg url={item.imageUrl} />
                    <BasicDetails>{item.type.toUpperCase()} * {item.theSpace.beds} {beds}</BasicDetails>
                    <PrevTitle>{item.title}</PrevTitle>
                    <PrevPrice>&#8362;{item.price} per night</PrevPrice>
                </LocationPreviewContainer>
            </Link>
        )
    }
}

/********************** Styled Components **********************/

const LocationPreviewContainer = styled.div`
    width: 100%;
    color: #484848;
    margin-bottom: 15px;
`;

const PrevImg = styled.div`
    background-image: ${props => `url(${props.url})`};
    padding: 33% 0%;
    background-repeat: no-repeat;
    background-position: top left;
    background-size: cover;
    border-radius: 3px;
`;

const BasicDetails = styled.div`
    font-size: 0.8em;
    padding-top: 5px;
    font-weight: 800;
    color: rgb(120, 120, 120);
`;

const PrevTitle = styled.div`
    font-size: 1.5em;
    font-weight: 800;
`;

const PrevPrice = styled.div`
    font-size: 1.3em;
`;