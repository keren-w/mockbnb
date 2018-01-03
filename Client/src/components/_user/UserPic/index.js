import React from 'react';
import styled from 'styled-components';

function UserPicMedium ({}) {}

function UserPicSmall({userPic, userName}) {
   return <SmallUserPic src={userPic} alt={userName}/>
}

function UserThumbnail({owner}) {
    return (
        <Thumbnail>
            <img src={owner.picture} />
            <p>{owner.first}<br />{owner.last}</p>
        </Thumbnail>
    )
}

const Thumbnail = styled.div`
    width: 64px;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 30px;

    >img {
        height: 64px;
        border-radius: 50%;
    }
`;

const SmallUserPic = styled.img`
    width: 96px;
    border-radius: 50%;
    padding: 16px;
`;

export {UserPicMedium, UserPicSmall, UserThumbnail}