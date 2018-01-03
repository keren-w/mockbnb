import React from 'react';
import styled from 'styled-components';

export default ({currentPage, lastPage, fetchPrevPage, fetchNextPage, fetchRequestedPage}) => {

    let visiblePageNums = () => {
        if (currentPage === 1) {
            return <div>
                <PageNumber number={currentPage} active />
                { currentPage === lastPage ? null : <PageNumber number={currentPage+1} fetchRequestedPage={fetchRequestedPage} />}
                { currentPage+1 === lastPage ? null : <PageNumber number={currentPage+2} fetchRequestedPage ={fetchRequestedPage} />}
                </div>
        } else if (currentPage === lastPage) {
            return <div>
                { currentPage-1 === 1 ? null : <PageNumber number={currentPage-2} fetchRequestedPage={fetchRequestedPage} />}
                { currentPage === 1 ? null : <PageNumber number={currentPage-1} fetchRequestedPage={fetchRequestedPage} />}
                <PageNumber number={currentPage} active />
                </div>
        } else {
            return <div>
                <PageNumber number={currentPage-1} fetchRequestedPage={fetchRequestedPage} />
                <PageNumber number={currentPage} active />
                <PageNumber number={currentPage+1} fetchRequestedPage={fetchRequestedPage} />
            </div>
        }
    }

    return (
        <PaginationContainer>
            { currentPage === 1 ? null : <Prev fetchPrevPage={fetchPrevPage}/> }
            { visiblePageNums() }
            { currentPage === lastPage ? null : <Next fetchNextPage={fetchNextPage}/>}
        </PaginationContainer>
    )
}

const PageNumber = ({number, active, fetchRequestedPage}) => {
    let isActive = active ? {
        background: '#008489',
        color: 'white'
    } : null;

    if (fetchRequestedPage) {
        return (
            <NumberContainer onClick={() => {fetchRequestedPage(number)}}><div style={isActive}>{number}</div></NumberContainer>
        )
    } else {
        return (
            <NumberContainer><div style={isActive}>{number}</div></NumberContainer>
        )
    }
}

const Prev = ({fetchPrevPage}) => {
    return <NumberContainer onClick={fetchPrevPage}>
            <div className="arrowBorder">
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
            </div>
        </NumberContainer>
}

const Next = ({fetchNextPage}) => {
    return <NumberContainer onClick={fetchNextPage}>
            <div className="arrowBorder">
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
        </NumberContainer>
}

/********************** Styled Components **********************/

const PaginationContainer = styled.div`
    width: 66%;
    height: 100%;
    padding: 0px 24px 40px 24px;
    display: flex;
    justify-content: center;

    @media (max-width:1128px) {
        width: 100%;
    }
`
const NumberContainer = styled.div`
    display: inline-block;
    padding: 5px;
    cursor: pointer;
    >div {
        width: 32px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        font-weight: 600;
        color: #008489;
        border-radius: 50%;
        :hover {
            text-decoration: underline;
        }
    }
    
    .arrowBorder {
        border: 1px solid #008489;
        }
    
    .arrowBorder:hover {
        text-decoration: none;
    }

    .fa-chevron-right:before,.fa-chevron-left:before {
        color: #008489;
        font-size: 0.8rem;
        top: 12px;
    }

`