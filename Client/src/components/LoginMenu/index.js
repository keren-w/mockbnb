import React, {Component} from 'react';
import styled from 'styled-components';
import {Modal} from '../Utilities';
import Login from '../../containers/Login';
import SignUp from '../../containers/SignUp';

export default () => 
    <div>
        <RegularUserMenu />
        <MinifiedUserMenu />
    </div>

class RegularUserMenu extends Component {
    constructor() {
        super()
        this.state = {showModal: false, modalContent: null}
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal(newModalContent) {
        this.setState({showModal: true})
        this.setState({modalContent: newModalContent})
    }

    hideModal() {
        this.setState({showModal: false})
    }

    render() {
        return (
            <RegularNav>
                <ul>
                    <li>Become a Host</li>
                    <li>Help</li>
                    <li><ModalLink onClick={() => this.showModal(<SignUp />)}>Sign Up</ModalLink></li>
                    <li><ModalLink onClick={() => this.showModal(<Login history={history} location={location}/>)}>Log In</ModalLink></li>
                    {this.state.showModal && <Modal goBack={this.hideModal}>{this.state.modalContent}</Modal>}
                </ul>
            </RegularNav>
        )
    }
}

const RegularNav = styled.nav`
    display: block;
    height: 100%;

    >ul {
        list-style-type: none;
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0;
        margin: 0;
    }

    >ul>li {
        padding-left: 15px;
        padding-right: 15px;
        color: #484848;
        display: inline-block;
        font-size: 13px;
        font-weight: 600;
        vertical-align: center;
    }

    @media screen and (max-width: 550px) {
        display: none;
    }
`;

class MinifiedUserMenu extends Component {
    constructor() {
        super();
        this.state = {menuOn: false, showModal: false, modalContent: null}
        this.handleToggleMenu = this.handleToggleMenu.bind(this);
        this.turnMenuOff = this.turnMenuOff.bind(this);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal(newModalContent) {
        this.setState({showModal: true})
        this.setState({modalContent: newModalContent})
    }

    hideModal() {
        this.setState({showModal: false})
    }
    
    turnMenuOff() {
        this.setState({menuOn: false});
    }

    handleToggleMenu() {
        var newMenuState = !(this.state.menuOn);
        this.setState({menuOn: newMenuState});
    }
    
    render() {
        let linkStyle = { textDecoration: 'none', fontWeight: 600, fontSize: '13px', color: 'rgb(72, 72, 72)'};
        var toggleMenu = this.state.menuOn && (
        <ul>
            <li>Become a Host</li>
            <li>Help</li>
            <li><ModalLink onClick={() => {this.showModal(<SignUp />), this.turnMenuOff()}}>Sign Up</ModalLink></li>
            <li><ModalLink onClick={() => {this.showModal(<Login history={history} location={location} />), this.turnMenuOff()}}>Log In</ModalLink></li>
        </ul>)
    
        return (
            <MinifiedNav>
                <i className="fa fa-bars fa-2x" aria-hidden="true" onClick={this.handleToggleMenu}></i>
                {toggleMenu}
                {this.state.showModal && <Modal goBack={this.hideModal}>{this.state.modalContent}</Modal>}
            </MinifiedNav>
         )
    }
}

const MinifiedNav = styled.nav`
display: none;
height: 100%;
position: relative;
color: #484848;

>i {
    height: 100%;
    width: 2em;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

>ul {
    list-style-type: none;
    display: flex;
    direction: rtl;
    flex-direction: column;
    background: white; 
    padding: 0;
    margin: 0;
    position: absolute;
    right: 0;
    top: 100%;
    border: 1px solid lightgray;
    border-top: none;
}

>ul>li{
    font-size: 13px;
    font-weight: 600;
    padding: 5px 15px;
    border-bottom: 0.5px solid red;
}

>ul>li:hover {
    background: lightgray;
}

@media screen and (max-width: 550px) {
    display: block;
}
`;

const ModalLink = styled.a`
    textDecoration: none;
    fontWeight: 600;
`;