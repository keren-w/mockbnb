import React, { Component} from 'react';
import {connect} from 'react-redux';
import {setLocationsFilter} from '../../../actions';
import styled from 'styled-components';
import {Button} from '../../Utilities';
import CityFilterInput from '../CityFilterInput';
import crg from 'city-reverse-geocoder';

let google = window.google;

class FilterMenu extends Component {
    constructor() {
        super()
        this.state = {showFilters: false}
        this.toggleFiltering = this.toggleFiltering.bind(this)
        this.handleFilterSelect = this.handleFilterSelect.bind(this)
        this.handleFilterRequest =  this.handleFilterRequest.bind(this)
        this.updateFilterInput = this.updateFilterInput.bind(this)
    }

    handleFilterSelect() {
        let currentFilter = this.$form.filter.value;
        this.setState({filterSelect: currentFilter})
        if(currentFilter === "show_all") {
            this.props.handleFilterApplication(currentFilter, {})
        }
    }

    toggleFiltering() {
        let currentFilterState = this.state.showFilters;
        this.setState({showFilters: !currentFilterState})
    }
    
    updateFilterInput(place) {
        this.$filterInput = place
    }

    handleFilterRequest() { 
        let filter = this.state.filterSelect;
        let userInput = this.$filterInput;
        if (!userInput && userInput !== undefined) { // undefined is for bad city input
            alert("Please fill in the filter criteria")
            return;
        }
        if (filter === 'by_city') {
            if (userInput) { // not undefined
                this.props.handleFilterApplication(filter, userInput)
                return; 
            } else {
                alert ("The selected input is not a recognized city. Please select a city from the autocomplete list.")
                return;
            }
        }
        this.props.handleFilterApplication(filter, userInput.value)
    }

    render() {
        let filterInput = () => {
            switch(this.state.filterSelect) {
                case 'by_city':
                   return <CityFilterInput handlePlaceChange={this.updateFilterInput}/>
                case 'by_guest_num':
                    return <input type="number" min={1} max={5} ref={userFilterInput=> this.$filterInput = userFilterInput} />;
                case 'by_price':
                    return <input type="number" min="0" ref={userFilterInput=> this.$filterInput = userFilterInput} />;
                // case 'by_available_date':
                //     return <input type="date" ref={userFilterInput=> this.$filterInput = userFilterInput} />;
                default:
                    return false;
        }}
    
        let currentFilter = filterInput()
       
        return <ToggleFilter>
            <div onClick={this.toggleFiltering}>Filter Locations&nbsp;
            {this.state.showFilters ? <i className="fa fa-caret-up" aria-hidden="true"></i> : <i className="fa fa-caret-down" aria-hidden="true"></i>}
            </div>
            {this.state.showFilters && 
                <FilterBody>
                    <form ref={form => this.$form = form}>
                        <label htmlFor="byName"><input type="radio" name="filter" id="byCity" value="by_city" onClick={this.handleFilterSelect}/>By City</label>
                        <label htmlFor="byPlace"><input type="radio" name="filter" id="byGuestNum" value="by_guest_num" onClick={this.handleFilterSelect}/>By Number Of Guests</label>
                        <label htmlFor="byPrice"><input type="radio" name="filter" id="byPrice" value="by_price" onClick={this.handleFilterSelect}/>By Price</label>
                        {/* <label htmlFor="byPrice"><input type="radio" name="filter" id="byDate" value="by_available_date" onClick={this.handleFilterSelect}/>By Available Date</label> */}
                        <label htmlFor="showAll"><input type="radio" name="filter" id="showAll" value="show_all" onClick={this.handleFilterSelect}/>Show All</label>
                    </form>
                    {currentFilter && 
                    <div id="send-filter">{currentFilter}
                    <Button onClick={this.handleFilterRequest}>Filter</Button></div>}
                </FilterBody>
            }
            </ToggleFilter>
            }
        }

function mapDispatchToProps(dispatch) {
    return {
        handleFilterApplication: (filter, userInput) => dispatch(setLocationsFilter(filter, userInput))
    }
}

export default connect(null, mapDispatchToProps)(FilterMenu)

const ToggleFilter = styled.div`
    border-bottom: 0.5px solid #484848;
`

const FilterBody = styled.div`
    padding: 10px 0;

    label {
        margin-right: 10px;
    }

    #send-filter {
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
    }

    #send-filter input {
        display: block;
        width: 100%;
        margin-right: 10px;
        padding: 12px;
        box-sizing: border-box;
    }

    #send-filter>Button {
        width: 1fr;
    }
`