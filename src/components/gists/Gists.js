import React from 'react'; 
import Search from './Search'; 
import GistList from './GistList'; 

export default function Gists() {

    return (
        <section>
            <h1>Gists</h1>
            <hr/>
            <Search/>
            <GistList/> 
        </section> 
    )
}