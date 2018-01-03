import React, { Component } from 'react';
import styled from 'styled-components';
import { RiseLoader } from 'react-spinners';
import Pagination from '../Pagination';
import Listing from '../Listing';
const pageEntries = 8;

export default class VisibleLocations extends Component {
    constructor() {
        super()
        this.state = {currPageIndex: 1, visibleLocations: []}
        this.getVisibleLocations = this.getVisibleLocations.bind(this);
        this.fetchRequestedPage = this.fetchRequestedPage.bind(this);
        this.fetchPrevPage = this.fetchPrevPage.bind(this);
        this.fetchNextPage = this.fetchNextPage.bind(this);
    }

    componentDidMount() {
        this.props.getLocations() //dispatches the locations getter
    }
    
    getVisibleLocations(locations) {
        let {currPageIndex} = this.state;
        let firstItem = (currPageIndex-1)*pageEntries;
        let lastItem = locations[firstItem+pageEntries] ? firstItem+pageEntries : locations.length;
        return locations.slice(firstItem, lastItem)
    }

    fetchRequestedPage(pageNumber) {
        this.setState({currPageIndex: pageNumber})
    }

    fetchPrevPage() {
        let {currPageIndex} = this.state;
        let locations = this.props.locations.list;
        if ( currPageIndex > 1) {
            currPageIndex--;
            this.setState({currPageIndex: currPageIndex})
        }
        return;
    }

    fetchNextPage() {
        let {currPageIndex} = this.state;
        let locations = this.props.locations.list;
        if ( currPageIndex < locations.length/pageEntries) {
            currPageIndex++;
            this.setState({currPageIndex: currPageIndex})
        }
        return;
    }

    render() {
        let locations = this.props.locations.list
        let {map} = this.props;
        let lastPage = Math.ceil(locations.length/pageEntries);

        if(locations.length>0) {
           let visibleLocations = this.getVisibleLocations(locations);
            return (
               <div>
                    <Listing map={map} visibleLocations={visibleLocations}/>
                    <Pagination currentPage={this.state.currPageIndex} lastPage={lastPage}
                     fetchPrevPage={this.fetchPrevPage} fetchNextPage={this.fetchNextPage}
                     fetchRequestedPage={this.fetchRequestedPage} />
               </div>)
        } else {
            return (
                <PleaseWait>
                    <div>
                        <RiseLoader color={'#FF7E91'} />
                        {this.props.locations.status}
                    </div>
                </PleaseWait>)
        }
    }
}

/********************** Styled Components **********************/

const PleaseWait = styled.div`
    padding: 24px;
    width: 66%;
    position: fixed;
    top: 126px;
    bottom: 0px;
    display: flex;
    align-items: center;
    >div {
        width: 100%;
        text-align: center;
    }

    @media (max-width:1128px) {
        width: 100%;
    }
`