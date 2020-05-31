import React, {useState } from 'react'; 
import Search from './Search'; 
import GistList from './GistList'; 

export default function Gists() {
    const [gists, setGists] = useState([]); 

    return (
        <section>
            <h1>Gists</h1>
            <hr/>
            <Search setGists={setGists}/>
            <GistList gists={gists}/> 
        </section> 
    )
}