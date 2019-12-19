import React, { Component } from 'react';
import axios from 'axios';

export class Posts extends Component {
    constructor(props){
        super(props)
        this.state = {
            userId : '',
            title: '',
            body: ''
            
        }
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]:event.target.value}, () => {
            console.log(this.state)})
    }

    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }


    render(){
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                <label>userId</label>
                <input type="text" name='userId' value={this.state.userId} onChange={this.changeHandler}/>
                <br/>
                <label>title</label>
                <input type="text" name='title' value={this.state.title} onChange={this.changeHandler}/>
                <br/>
                <label>body</label>
                <input type="text" name='body' value={this.state.body} onChange={this.changeHandler}/>
                <br/>
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}