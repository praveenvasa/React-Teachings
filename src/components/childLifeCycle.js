import React, {Component}  from 'react';

export class ChildLifecycle extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        console.log("child Constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("child getDerivedStateFromProps")
        return null;
    }

    componentDidMount() {
        console.log("child componentDidMount")
    }
    shouldComponentUpdate() {
        console.log("child shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log("child getSnapshotBeforeUpdate")
        return null;
    }

    componentDidUpdate() {
        console.log("child componentDidUpdate")
    }
    render(){
        console.log("child render")
        return(
            <div>
            <h1>child LifeCycle</h1>
            </div>
        )
    }
}