import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Rating from '../Rating'
import {UserPicSmall} from '../../_user/UserPic';

export default function Review({entry}) {
    let date = new Date(entry.date);
    return (
        <ReviewContainer>
           <div className="review-header">
                <UserPicSmall userPic={entry.reviewer.picture} userName={entry.reviewer.first}/>
                
                <UserTitle>
                    <span>{entry.reviewer.first}&nbsp;{entry.reviewer.last}</span>
                    <div>{date.getDay()+1}/{date.getMonth()+1}/{date.getFullYear()}</div>
                    <Rating value={entry.rating}/>
                </UserTitle>
            </div>
            <h3 className="review-title">{entry.title}</h3>
            <p className="review-content">{entry.content}</p>
        </ReviewContainer>
    )
}

const ReviewContainer = styled.div`
    border-bottom: 1px solid lightgray;
    padding: 8px 0 24px;

    >div {
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
    }

    >p {
        margin: 0;
    }

    >h3 {
        margin: 0;
        font-weight: 800;
    }

    :last {
        border-bottom: none;
    }
`;

const UserTitle = styled.div`
    >span {
        font-weight: 600;
    }
    >div {
        font-size: 15px;
}
`;