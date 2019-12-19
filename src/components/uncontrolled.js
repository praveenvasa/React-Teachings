import React, { Component } from 'react';

export class Uncontrolled extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
        this.nameRef = React.createRef();
    }
    componentDidMount(){
        this.nameRef.current.focus();
        console.log(this.nameRef)
    }

    SubmitHandler = () => {
        console.log(this.nameRef.current.value)
    }

    render() {
        return(
            <div>
                <input type="text" ref={this.nameRef} />
                <button type="file" onClick={this.SubmitHandler}>Submit</button>
            </div>
        )
    }
}