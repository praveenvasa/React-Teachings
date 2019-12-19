import React,{Component} from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
    render() {
    return (
      <div className="App">
          <Link to="/facebook"><h1>Facebook</h1></Link>
          <Link to="/instagram"><h1>Instagram</h1></Link>
      </div>
    )}
}