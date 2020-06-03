import React, { Component } from 'react'; 
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import "./GistList.scss"
import { connect } from 'react-redux';


class GistList extends Component {

    render(){
        const { gists } = this.props;
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
    
}

GistList.propTypes = {
    gists: PropTypes.array
  };


export default connect(({ error, loading, gists }) => ({ loading, error, gists }))(GistList);