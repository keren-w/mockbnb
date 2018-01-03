import React from 'react';
import styled from 'styled-components';
import Review from '../Review'

export default function ReviewList({list}) {
    let reviews = list.length === 1 ? "review" : "reviews";
    var renderList = list.map((entry) => {
        return(<Review key={entry.id} entry={entry}/>)
    }) 
    
    return(
        <div className="reviews-container">
            <ReviewsTitle>{list.length} {reviews}</ReviewsTitle>
            {renderList}
        </div>
    )
}

const ReviewsTitle = styled.h2`
padding: 24px;
margin: 24px 0 0;
font-size: 28px;
font-weight: 800;
border-bottom: 1px solid lightgray;
box-sizing: border-box;
`;