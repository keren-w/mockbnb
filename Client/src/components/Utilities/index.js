import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
/* width: 100%; */
padding: 9px 27px;
border-radius: 4px;
border: none;
font-size: 1.2rem;
font-weight: 900;
background: rgb(255, 126, 130);
color: white;
`;

const PleaseWait = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    >div { margin-top: 12.5vh}
`;

const isEmpty = (obj) => {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false
    }
    return true
}

const Modal = ({goBack, children }) => {
    const back = (e) => {
      e.stopPropagation()
      goBack()
    }
    
    return (
      <ModalBackground onClick={back}>
        <ModalContainer onClick={(e)=> e.stopPropagation()}>
            {children}
        </ModalContainer>
      </ModalBackground>
    )
  }

const ModalBackground = styled.div`
    position: fixed;
    height: 101vh;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.15);
    z-index: 999;
`;

const ModalContainer = styled.div`
    position: absolute;
    margin: 0 auto;
    background: #fff;
    top: 64px;
    left: 20%;
    right: 20%;
    padding-top: 7.5%;
    padding-bottom: 7.5%;
    padding: 15;

    @media (max-width: 550px) {
        left: 5%;
        right: 5%;
    }
`;

export const getCoordinates = (locations) => {

    if (locations.length) {
        return locations.reduce((accumulator, singleLocation) => {
            let MarkerDetails = {}

            MarkerDetails.position = {
                lat: singleLocation.address.lat,
                lng: singleLocation.address.lng
            }

            MarkerDetails.price = singleLocation.price;

            accumulator.push(MarkerDetails)
            return accumulator
        }, [])
    }

    return {
        position: 
        {lat: locations.address.lat, 
        lng: locations.address.lng},
        price: locations.price
        }
}

module.exports = {Button, isEmpty, PleaseWait, Modal, getCoordinates};