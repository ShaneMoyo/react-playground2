import React, {useState, useEffect} from 'react'; 
import {
    useParams,
    Link
  } from "react-router-dom";
import api from '../../services/api'

export default function Gist()  { 
    let { id } = useParams();
    const [gist, setGist] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    async function fetchGist() {
        setError('')
        setLoading(true);
        try {
            const response = await api.getGistDetail(id)
            console.log('set gist', response)
            setGist(gist)
            setLoading(false);
        } catch (error){
            setError(error.message)
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchGist();
    }, [gist]);

    const gistDetail = gist ? <span>
    <h1>{gist.description}</h1>
    <hr/>
    <ul>
        <li>
            <p>created at: {gist.created_at}</p>
        </li>
    </ul></span> : null;
    console.log("gistDetail", gist.description)
    
    return(
        <section>
            {gistDetail}
        </section>
    )
}