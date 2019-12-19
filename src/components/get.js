import React, { Component } from 'react';
import axios from 'axios';

export class Get extends Component {
    constructor(){
        super()
        this.state={
            data:[],
            error:''
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            this.setState({data:response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({error:'Api failed to call'})
        })
    }

    DeleteHandler = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/1', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    render(){
        const {data,error} = this.state
        return(
        <div>
            
            <button type="button" onClick={this.DeleteHandler}>Delete</button>
            <h1>Title</h1>
            {error? <div>{this.state.error}</div>: null}
           {data.length ? 
           data.map(item => <div key={item.id}>{item.title}</div>) : null} 
        </div>
        )
    }
}