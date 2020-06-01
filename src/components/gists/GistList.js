import React from 'react'; 
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import "./GistList.scss"


export default function GistList({ gists }) {
    const gistItem = gist => (
        <div key={gist.id} className="Table-row">
            <div class="Table-row-item"><input type="button" /></div>
            <div class="Table-row-item">{gist.description}</div>
            <div class="Table-row-item">{gist.id}</div>
            <div class="Table-row-item"><Link to={`/gist/${gist.id}`}>See more</Link></div>
        </div>
    );
    
    const gistItems = gists ? gists.map(gist => gistItem(gist)) : null;

    return (
        <div className="Table">
            <div class="Table-row Table-header">
                <div class="Table-row-item"><input type="button" /></div>
                <div class="Table-row-item">Description</div>
                <div class="Table-row-item">ID</div>
                <div class="Table-row-item">View Details</div>
            </div>
            <div class="row-collection">
                {gistItems}
            </div>
        </div>
    )
}

GistList.propTypes = {
    gists: PropTypes.array
  };


