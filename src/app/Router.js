import React, { Component } from 'react'; 
import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";

import Gists from '../components/gists/Gists'; 
import Gist from '../components/gist/Gist';
import Nav from '../components/nav/Nav';



export default class Router extends Component { 
    render() { 
        return(
            <BrowserRouter>
              <Nav/>
                <div>
                    <Switch>
                        <Route path="/gist/:id" component={Gist}/>      
                        <Route path="/" component={Gists}/>                  
                    </Switch>
                </div>
          </BrowserRouter>
        )
    }   
}