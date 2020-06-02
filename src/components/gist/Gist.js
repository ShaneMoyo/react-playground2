import React, {Component} from 'react'; 
import { useParams } from "react-router-dom";
import api from '../../services/api';

export default class Gist extends Component { 
    constructor(props) { 
        super(props);
        this.state = { 
            loading: false,
            error: false,
            gist: {}
        }
    }
  

    async componentDidMount() { 
        this.setState({
            loading: true,
            error: false
        })
        try { 
            const response = await api.getGistDetail(this.props.match.params.id);
            this.setState({
                loading: false,
                gist: response
            });
        } catch (error) { 
            this.setState({
                loading: false,
                error: true
            })
        }
    }

    render() { 
        const { loading, error, gist } = this.state; 
        const gistDetail = gist ? 
            <span>
                <h1>{gist.description}</h1>
                <hr/>
                <ul>
                    <li>
                        <p>created at: {gist.created_at}</p>
                    </li>
                    <li>
                        <p>updated at: {gist.updated_at}</p>
                    </li>
                </ul>
            </span> : null;

        const errorMessage = <p>Something went wrong</p>;
    
    
        return(
            <section>
                { loading ? <p>Loading..</p> : gistDetail }
                { error ? errorMessage : null }
            </section>
        )

    }   
}