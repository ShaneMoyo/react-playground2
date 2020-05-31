import React from 'react'; 

import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";

import Gists from '../components/gists/Gists'; 
import Gist from '../components/gist/Gist';
import Nav from '../components/nav/Nav';


export default function Router() { 
    return(
        <BrowserRouter>
          <Nav/>
            <div>
                <Switch>
                    <Route path="/gist/:id">
                        <Gist/>
                    </Route>
                    <Route path="/">
                        <Gists/> 
                    </Route>
                </Switch>
            </div>
      </BrowserRouter>
    )
}