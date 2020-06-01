import React, {useState, useEffect} from 'react'; 
import { useParams } from "react-router-dom";
import api from '../../services/api';

export default function Gist()  { 
    let { id } = useParams();
    const [gist, setGist] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    async function fetchGist() {
        setError(false)
        setLoading(true);
        try { 
            const response = await api.getGistDetail(id);
            console.log('response: ', response)
            setGist(response);
        } catch (error) { 
            setError(true)
            setLoading(false);
        }
        
    }

    useEffect(() => {   
        fetchGist();
    }, []);

    const gistDetail = gist ? 
    <span>
        <h1>{gist.description}</h1>
        <hr/>
        <ul>
            <li>
                <p>created at: {gist.created_at}</p>
            </li>
        </ul>
    </span> : null;

    const errorMessage = <p>Something went wrong</p>;
    
    
    return(
        <section>
            { loading ? <p>Loading..</p> : gistDetail }
            { error ? errorMessage : null }
        </section>
    )
}