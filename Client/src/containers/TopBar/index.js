import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setLogout} from '../../actions';
import {isEmpty} from '../../components/Utilities';
import {Link} from 'react-router-dom';
import mockbnbLogo from '../../static/img/mockbnb-logo.png';
import styled from 'styled-components';
import LoginMenu from '../../components/LoginMenu';

class TopBar extends Component {
    constructor() {
        super()
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    //componentDidMount - check from Local Storage/Cookie if there's a valid token;

    handleLogOut() {
        this.props.loginStatus.applyLogout();
        this.props.history.goBack();
        // history={history} location={location}
    }

    render() {
        let {userDetails, loggedIn} = this.props.loginDetails;
        return <TopBarContainer>
                <LogoContainer>
                    <Link to="/"> <MiniLogo src={mockbnbLogo} /> </Link>
                </LogoContainer>
                { loggedIn ? 
                    <UserMenu userDetails={userDetails} handleLogOut={this.handleLogOut} /> : 
                    <LoginMenu /> }
            </TopBarContainer>
    }
}

const UserMenu = ({userDetails, handleLogOut}) => {
    let {first, last, picture} = userDetails;
    return (
        <UserNav>
            <div>Hello, {first} {last} </div>
            {<Link to="/" style={{ textDecoration: 'none' }} onClick={handleLogOut}>Log Out</Link>}
        </UserNav>
    )
}

function mapStateToProps({loginDetails}) {
	return {loginDetails};
}

function mapDispatchToProps(dispatch) {
    return {applyLogout: dispatch(setLogout())}}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)


/********************** Styled Components **********************/

const TopBarContainer = styled.div`
    height: 64px;
    width: 100%;
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    background: white;
    position: fixed;
    z-index: 99;
`;

const LogoContainer = styled.div`
    height: 64px;
    width: 82px;
    border-right: 1px solid lightgray;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;    
`;

const MiniLogo = styled.img`
height: 35px;
`;

const UserNav = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 600;
    color: #484848;

    >div, >a {
        display: inline-block;
        font-size: 13px;
        padding: 0 15px;
    }
`;
  
const ModalLink = styled.a`
    textDecoration: none;
    fontWeight: 600;
`;