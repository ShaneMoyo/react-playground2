import React from 'react'; 
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import "./GistList.scss"
import {  useSelector } from "react-redux";


export default function GistList() {
    const gists = useSelector(state => state.gists);
    const gistItem = gist => (
        <tr key={gist.id}>
            <td>{gist.description}</td>
            <td>{gist.id}</td>
            <td><Link to={`/gist/${gist.id}`}>See more</Link></td>
        </tr>
    );
    
    const gistItems = gists ? gists.map(gist => gistItem(gist)) : null;

    return (
        <table>
            <thead>
                <tr>       
                    <th>Description</th>
                    <th>ID</th>
                    <th>View Details</th>
                </tr>
            </thead>
            <tbody> 
                {gistItems} 
            </tbody>
        </table>
    )
}



