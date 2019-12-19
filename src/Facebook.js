import React, {Component}  from 'react';
import { Link } from 'react-router-dom';
export class Facebook extends Component {
    render(){
        console.log(this.props)
        return(
            <div className="App">
                <h1>{this.props.match.params.id}</h1>
            <Link to="/"><h1>Home</h1></Link>
            <h1>Facebook</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvxsHQ94QoFieKXJ2vhdjzvb6ouJeLEb6XSv0kPpeJOrBfbtqz" alt="secenary" />
            </div>
        )
    }
}