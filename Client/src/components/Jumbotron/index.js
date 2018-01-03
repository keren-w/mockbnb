import React from 'react';
import styled from 'styled-components';

export default ({imgUrl}) => {
    let backgroundStyle = {backgroundImage: `url(${imgUrl})`};
    return <Jumbotron style={backgroundStyle} />
}

const Jumbotron = styled.div`
    width: 100vw;
    min-height: 320px;
    background-position-x:  50%;
    background-position-y: 50%;
    background-repeat: no-repeat;
    background-size: 100vw;

    @media (max-width: 467px) {  
        background-size: auto 100%; 
    }
`;
