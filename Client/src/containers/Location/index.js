import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getLocationById} from '../../actions';
import styled from 'styled-components';
import Jumbotron from '../../components/Jumbotron';
import BookIt from '../../components/_booking/BookIt';
import ReviewList from '../../components/_reviews/ReviewList';
import {UserThumbnail} from '../../components/_user/UserPic';
import {isEmpty, PleaseWait} from '../../components/Utilities';
import homeIcon from '../../static/icons/home.svg';
import guestsIcon from '../../static/icons/guests.svg';
import bedroomsIcon from '../../static/icons/bedrooms.svg';
import bedsIcon from '../../static/icons/beds.svg';
import { RiseLoader } from 'react-spinners';

class Location extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        let locationId = this.props.match.params.id;
        this.props.getLocation(locationId); //dispatches the location getter
    }

    render() {
        let {item, status} = this.props.location;
        return (
            <div>
               {!isEmpty(item) && !item.status ?
                <div>
                    <Jumbotron imgUrl={item.imageUrl}/>
                    <LocationContainer>
                        <LocationContent item={item}/>
                        <BookIt price={item.price} />
                    </LocationContainer>
                </div> : 
                <PleaseWait>
                    <div><RiseLoader color={'#FF7E91'} /></div>
                    <div>{status}</div>
                </PleaseWait> }
            </div>
        )
    }
}

const LocationContent = function({item}) {
    return (
        <ContentContainer>
            <LocationLinkBar />
            <LocationTitle item={item}/>
            <Overview item={item} />
            <ReviewList list={item.reviews}/>
        </ContentContainer>
    )
}

function Overview({item}) {
    return (
        <Article>
            <P>{item.generalDesc}</P>
            <SubTitle>The space</SubTitle>
            <P>{item.theSpace.description}</P>
            <SubTitle>Guest access</SubTitle>
            <P>+ {item.guestAccess}</P>
        </Article>
    )
}

const LocationLinkBar = () => {
    return (
        <LinkBar>
            <li>Overview</li>
            <span>&#x25AA;</span>
            <li>Reviews</li>
            <span>&#x25AA;</span>
            <li>The Host</li>
            <span>&#x25AA;</span>
            <li>Location</li>
        </LinkBar>
    )
}

const LocationTitle = ({item}) => {
    let {address, theSpace, reviews} = item; 
    let guests = item.theSpace.guests > 1 ? "guests" : "guest";
    let bedrooms = item.theSpace.bedrooms > 1 ? "bedrooms" : "bedroom";
    let beds = item.theSpace.beds > 1 ? "beds" : "bed";
    return (
        <div>
            <Title>
                <div>
                    <div>
                        <h1>
                            {item.title}
                        </h1>
                        <p>
                            {address.street},&nbsp;
                            {address.city},&nbsp;
                            {address.country}&nbsp;
                        </p>
                    </div>
                    <UserThumbnail owner={item.homeOwner}/>
                </div>
            </Title>
            <IconsContainer>
                <div><img src={homeIcon} /><br/>{item.type} </div>
                <div><img src={guestsIcon} /><br/>{item.theSpace.guests} {guests}</div>
                <div><img src={bedroomsIcon} /><br/>{item.theSpace.bedrooms} {bedrooms}</div>
                <div><img src={bedsIcon} /><br/>{item.theSpace.beds} {beds}</div>
            </IconsContainer>
        </div>
    )
}

function mapStateToProps({loginDetails, location}) {
	return {loginDetails, location};
}

function mapDispatchToProps(dispatch) {
    return {
        getLocation: (locationId) => {dispatch(getLocationById(locationId))}
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Location)

/********************** Styled Components **********************/

const LocationContainer = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    display: flex;

    @media screen and (max-width: 1124px)  {  
        max-width: 90vw;
        display: block;
    }
`;

const Article = styled.article`
    padding: 24px 0;
    border-bottom: 1px solid lightgray;
`;

const ContentContainer = styled.div`
    width: 100%;
    margin-right: 80px;
    font-size: 17px;
    color: #484848;
`;

const P = styled.div`
    margin: 0 0 15px;

    :last-child {
        margin: 0;
    }
`;

const SubTitle = styled.div`
    font-weight: 600;
    margin: 0 0 15px;
`;

const LinkBar = styled.ul`
    padding: 15px 0;
    margin: 0;
    box-sizing: border-box; 
    font-size: 15px;
    font-weight: 600;
    color: #008489;
    list-style-type: none;
    border-bottom: 1px solid lightgray;

    >li {
        display: inline-block;
    }

    >span {
        padding: 10px;
    }
`;

const Title = styled.div`
    border-bottom: 1px solid lightgray;
    >div {
        max-width: 600px;
        display: flex;
        justify-content: space-between;
        padding: 24px 0;
    }

    >div>div>h1 {
        font-size: 36px;
        font-weight: 800;
        line-height: 40px;
        letter-spacing: -0.6px;
        padding: 6px 0  ;
        margin: 0;
    }

    >div>div>p {
        margin: 0;
        padding: 0;
    }
`;

const IconsContainer = styled.div`
    font-size: 15px;
    padding: 24px 0;
    border-bottom: 1px solid lightgray;
    text-align: center;
    display: flex;
    justify-content: space-between;

    >div {
        width: 25%;
        text-align: center;
        padding: 0 8px;
        box-sizing: border-box;
    }
`;