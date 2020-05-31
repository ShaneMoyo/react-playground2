import React from 'react'; 

export default function GistList({ gists }) {
    const gistItem = gist => (
        <li>
            <span>
                <p>{gist.description}</p>
            </span>
        </li>
    );
    
    const gistItems = gists.map(gist => gistItem(gist)); 
    
    return (
        <ul>
            {gistItems}
        </ul>
    )
}