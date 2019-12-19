import React, { Component } from 'react';
import {FunctionalComponent} from './functionalComponent';

export class InstaGram extends Component {
    constructor(props){
    super(props);
    this.name = "React"
    this.state = {
        like: 0 
    }
    }
    backHandler = () =>{
        this.props.history.push('/')
    }
    clickHandler = () => {
         this.setState((prevState) => ({like: prevState.like + 1}), () => {console.log(this.state.like)})  
        }

    FiveClick = () => {
        this.clickHandler();
        this.clickHandler();
        this.clickHandler();
        this.clickHandler();
        this.clickHandler();
    }
    
    render() {
        return(
            <div className="App">
                <button onClick={this.backHandler}>Back</button>
                <h1>InstaGram</h1>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxEOVTcvf8wEI1bGPVZrCVADRvWGpFsVzrowss8S1SuQl_xJjK" alt="secenary"/>
                <h1>{this.state.like}</h1>
                <button onClick={this.clickHandler}>Like</button>
                <FunctionalComponent fiveClick={this.FiveClick}/>
            </div>
        )
    }
}