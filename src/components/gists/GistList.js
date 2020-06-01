import React from 'react'; 
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


export default function GistList({ gists }) {
    const gistItem = gist => (
        <li key={gist.id}>
            <Link to={`/gist/${gist.id}`}>
                <span>
                    <p>{gist.description}</p>
                </span>
            </Link>
        </li>
    );
    
    const gistItems = gists ? gists.map(gist => gistItem(gist)) : null;

    return (
        <ul>
            {gistItems}
        </ul>
    )
}

GistList.propTypes = {
    gists: PropTypes.array
  };