import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Homepage from '../Homepage';
import Location from '../../containers/Location';
import TopBar from '../../containers/TopBar';
import Login from '../../containers/Login';
import SignUp from '../../containers/SignUp';

class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (
             <div>
                <TopBar location={location}/>
                <Route exact path="/" component={Homepage} />
                <Route path="/locations/:id" component={Location} /> 
                {/* 404 if not a known path? */}
            </div>  
        )
    }
}
    
export default App;
