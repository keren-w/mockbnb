import React, {Component} from 'react';
import styled from 'styled-components';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import {Button} from '../../Utilities'

export default class BookingForm extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <Panel>
                <TwoColumns>
                    <div>Check In<DayPickerInput /></div>
                    <div>Check Out<DayPickerInput /></div>
                </TwoColumns>
                Guests:
                <Select>
                    <Option>one</Option>
                    <Option>two</Option>
                    <Option>three</Option>
                    <Option>four</Option>
                </Select>
                <Button>Book</Button>
            </Panel>
        )      
    }
}
const Panel = styled.div`
    padding: 20px;
    border-top: 0px;
    border-style: solid;
    box-sizing: border-box;
    border-color: lightgray;
    box-sizing: border-box;
`;

const TwoColumns =  styled.div`
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0;
    margin-bottom: 10px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    margin-bottom: 10px;
    padding: 12px;
`;

const Option = styled.option`
    padding: 12px;
`;