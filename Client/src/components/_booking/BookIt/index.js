import React, {Component} from 'react';
import styled from 'styled-components';
import BookingForm from '../BookingForm';

export default class BookIt extends Component {
    constructor() {
        super()
    }

    render() {
        let {price} = this.props;
        return (
            <Container>
                <Title>
                    <Price>&#8362;{price}</Price> per night
                </Title>
                <BookingForm />
            </Container>
        )
    }
}

const Container = styled.section`
    width: 376px;
    float: right;
    position: relative;
    margin-top: -50px;
    font-weight: 600;
`;

const Title = styled.div`
    height: 50px;
    padding: 13px 20px 5px;
    box-sizing: border-box;
    background: rgba(60,63,64,0.9);
    color: white;
    font-weight: 600;
    border: none;
`;

const Price = styled.span`
    font-size: 1.5rem;
    font-weight: 900;
`;

