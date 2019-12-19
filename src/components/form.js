import React, { Component } from 'react';

export class FormClass extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : '',
            email: '',
            
        }
    }

    changeHandler = (event) => {
        this.setState({name:event.target.value}, () => {
            console.log(this.state)})
        // this.setState({name:event.target.value}, () => this.setState({disabled:this.state.name === '' ? true :false}))
    }

    submitHandler = (event) => {
        event.preventDefault()
        alert(this.state.name)
        console.log(this.state.name)
    }

    isValid = () => {
        if(this.state.name[0] === 'a'){
            return true
        }
        else {
            return false;
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                <label>UserName</label>
                <input type="text" name='name' value={this.state.name} onChange={this.changeHandler}/>
                <button type="submit" disabled={this.isValid()}>Submit</button>
                </form>
            </div>
        )
    }
}