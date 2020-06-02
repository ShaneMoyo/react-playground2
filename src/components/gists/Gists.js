import React, { Component } from 'react'; 
import Search from './Search'; 
import GistList from './GistList'; 

export default class Gists extends Component {
     
    constructor(props) { 
        super(props); 
        this.state = { 
            gists: []
        }
    }

    setGists = (gists) => this.setState({gists});
    render() {
        return (
            <section>
                <h1>Gists</h1>
                <hr/>
                <Search setGists={gists => this.setGists(gists)}/>
                <GistList gists={this.state.gists}/> 
            </section> 
        )
    }
   
}