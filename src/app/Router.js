import React from 'react'; 

import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";

import Gists from '../components/gists/Gists'; 
import Gist from '../components/gist/Gist';
import Nav from '../components/nav/Nav';
//<Route path={`${match.path}/:subId`} component={Resource} />


export default function Router() { 
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