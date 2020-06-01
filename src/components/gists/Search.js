import React, {useState} from 'react'; 
import api from '../../services/api';
import PropTypes from 'prop-types';

export default function Search({ setGists }) { 
    const [username, setUsername] = useState(''); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = value => { 
        console.log(value); 
        setUsername(value); 
    }

    const  handleSubmit = async event => { 
        event.preventDefault(); 
        setLoading(true);
        setError(false)
        try {
            const result = await api.getGistByUsername(username);
            //debugger
            setGists(result); 
            setLoading(false);
            console.log('submit', result);
        } catch (err) {
            console.log('err: ', err);
            setError(true)
            setLoading(false);
        }     
    }

    return (
        <form onSubmit={event => handleSubmit(event)}>
            <input type="text" name="search" onChange={({ target: { value }}) => handleChange(value)}/>
            <br/>
            <button type="submit">Search</button> 
            {   loading ? <p>Loading...</p> : null  }
            {   error ? <p>Request failed...</p> : null  }
        </form>
    )
}

Search.propTypes = {
    setGists: PropTypes.func
};