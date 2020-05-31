import React, {useState} from 'react'; 
import api from '../../services/api';

export default function Search() { 
    const [username, setUsername] = useState(''); 

    const handleChange = value => { 
        console.log(value); 
        setUsername(value); 
    }

    const  handleSubmit = async event => { 
        event.preventDefault(); 
        const result = await api.getGistByUsername(username);
        console.log('submit', result)
        
    }

    return (
        <form onSubmit={event => handleSubmit(event)}>
            <input type="text" name="search" onChange={({ target: { value }}) => handleChange(value)}/>
            <br/>
            <button type="submit">Search</button> 
        </form>
    )
}