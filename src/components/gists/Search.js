import React, {Component} from 'react'; 
import api from '../../services/api';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchGist } from './actions';

class Search extends Component { 
    constructor(props) { 
        super()
        this.state = { 
            username: '',
            loading: false, 
            error: false 
        }
    }

 
    handleChange = username => this.setState({username})

    handleSubmit = async event => { 
        event.preventDefault(); 
        this.setState({
            loading: true, 
            error: false
        });
        try {
            const gists = await this.props.fetchGist(this.state.username);
            this.setState({
                loading: false
            });
            
        } catch (err) {
            this.setState({
                loading: false, 
                error: true
            });
        }     
    }
    render() { 
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                <label htmlFor="search">Search gists</label>
                <br/>
                <input id="search" type="text" name="search" onChange={({ target: { value }}) => this.handleChange(value)}/>
                <br/>
                <button type="submit">Search</button> 
                {   this.state.loading ? <p>Loading...</p> : null  }
                {   this.state.error ? <p>Request failed...</p> : null  }
            </form>
        )
    }   
}

Search.propTypes = {
    setGists: PropTypes.func
};


export default connect(({ error, loading }) => ({ loading, error }), { fetchGist })(Search);