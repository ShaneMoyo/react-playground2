import React, {useState} from 'react'; 
import api from '../../services/api';
import PropTypes from 'prop-types';
import { fetchGist } from './actions';
import { useDispatch, useSelector } from "react-redux";

export default function Search() { 
    const [username, setUsername] = useState(''); 
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);
    console.log('error: ', error)
    const dispatch = useDispatch();

    const handleChange = value => { 
        console.log(value); 
        setUsername(value); 
    }

    const  handleSubmit = async event => { 
        event.preventDefault(); 
        await dispatch(fetchGist(username))
    }

    return (
        <form onSubmit={event => handleSubmit(event)}>
            <label htmlFor="search">Search gists</label>
            <br/>
            <input id="search" type="text" name="search" onChange={({ target: { value }}) => handleChange(value)}/>
            <br/>
            <button type="submit">Search</button> 
            {   loading ? <p>Loading...</p> : null  }
            {   error.error ? <p>Request failed...</p> : null  }
        </form>
    )
}
