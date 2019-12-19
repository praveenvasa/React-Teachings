import React, {Component}  from 'react';
import {ChildLifecycle} from './childLifeCycle';

export class ParentLifecycle extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Hcl'
        }
        console.log("parent Constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("parent getDerivedStateFromProps")
        return null;
    }
    
    componentDidMount() {
        console.log("parent componentDidMount")
    }

    shouldComponentUpdate() {
        console.log("parent shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log("parent getSnapshotBeforeUpdate")
        return null;
    }

    componentDidUpdate() {
        console.log("parent componentDidUpdate")
    }
    clickHandler = () => {
        this.setState({name:'React'})
    }
    render(){
        console.log("parent render")
        return(
            <div>
            <h1>{this.state.name}</h1>
            <button onClick={this.clickHandler}>Update</button>
            <h1>parent LifeCycle</h1>
            <ChildLifecycle/>
            </div>
        )
    }
}