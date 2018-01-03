import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sendNewUser} from '../../actions';
import styled from 'styled-components';
import {Button} from '../../components/Utilities';

class SignUp extends Component {
    constructor() { 
        super();
        this.handleSignUp = this.handleSignUp.bind(this);
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        let {success, status} = nextProps.signUpUser;
        if (success) {
            this.props.history.push({ pathname: '/login', search: 'signupsuccess'});
            return false;
        } else {
            alert(status);
            return true;
        }
    }

    handleSignUp() {
        let first = this.$first.value;
        let last = this.$last.value;
        let username = this.$username.value;
        let password = this.$password.value;
        let picture = this.$picture.value;
        this.props.signNewUser({first, last, username, password, picture});
    }

   render() {
        return (
            <div>
                <ModalContainer>
                    <input type="text" placeholder="First Name" ref={(el) => { this.$first = el }} />
                    <input type="text" placeholder="Last Name" ref={(el) => { this.$last = el }} />
                    <input type="text" placeholder="Username" ref={(el) => { this.$username = el }} />
                    <input type="password" placeholder="Password" ref={(el) => { this.$password = el }} />
                    <input type="text" placeholder="Picture" ref={(el) => { this.$picture = el }} />
                    <Button onClick={this.handleSignUp} >Join us!</Button>
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
        margin: 15px 0;
        box-sizing: border-box;
    }
    
    >Button {
        width: 100%;
    }

    @media screen and (max-width: 560px) {
        max-width: 75vw;
    }
`;

function mapStateToProps({signUpUser}) {
	return {signUpUser};
}

function mapDispatchToProps(dispatch) {
    return {
        signNewUser: (newUserDetails) => {dispatch(sendNewUser(newUserDetails))}
    }}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)