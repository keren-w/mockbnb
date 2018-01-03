import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setLogin} from '../../actions';
import styled from 'styled-components';
import {Button} from '../../components/Utilities';

class Login extends Component {
    constructor() { 
        super();
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        let {loggedIn, status} = nextProps.loginDetails;
        if (loggedIn) {
         this.props.history.goBack();
        } else {
            switch(status) {
                case "Authentication Error" || "Server Login Error":
                    alert(status);
                    break;
                default:
                    break;
            } 
        }
        return true;
    }

    handleLoginSubmit() {
        let username = this.$username.value;
        let password = this.$password.value;
        this.props.SendLoginDetails({username, password});
    }

   render() {
       let hasJustSignedUp = this.props.location.search === "?signupsuccess";
        return (    
            <div>
                <ModalContainer>
                {hasJustSignedUp && <div>Sign Up Succeed! Please Log In to your fresh account:</div>}
                    <input type="text" placeholder="Username" ref={(el) => { this.$username = el }} />
                    <input type="password" placeholder="Password" ref={(el) => { this.$password = el }} />
                    <Button onClick={this.handleLoginSubmit} >Log In</Button>
                </ModalContainer>
            </div>
        )
   }
}

const ModalContainer = styled.div`
    width: 400px;
    margin: 0 auto;

    >input {
        display: block;
        width: 100%;
        padding: 12px;
        margin-bottom: 15px;
        box-sizing: border-box;
    }

    >Button {
        width: 100%;
    }

    @media screen and (max-width: 560px) {
        max-width: 75vw;
    }
`;

function mapStateToProps({loginDetails}) {
	return {loginDetails};
}

function mapDispatchToProps(dispatch) {
    return {
        SendLoginDetails: (loginDetails) => {dispatch(setLogin(loginDetails))}
    }}

export default connect(mapStateToProps, mapDispatchToProps)(Login)