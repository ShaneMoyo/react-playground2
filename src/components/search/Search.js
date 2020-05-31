import React, {useState} from 'react'; 

export default function Search() { 
    const [search, setSearch] = useState(''); 

    const handleChange = value => { 
        console.log(value); 
        setSearch(value); 
    }

    const handleSubmit = event => { 
        event.preventDefault(); 
        console.log('submit', search)
    }

    return (
        <form onSubmit={event => handleSubmit(event)}>
            <input type="text" name="search" onChange={({ target: { value }}) => handleChange(value)}/>
            <br/>
            <button type="submit">Search</button> 
        </form>
    )
}