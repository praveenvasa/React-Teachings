import React, {Component}  from 'react';

export class Inline extends Component {
    
    render(){
        let style = {
            fontSize : '30px',
            color : 'orange'
        }
        return(
            <div>
             {/* <h1 className={styles.styleDemo}>Heading 2</h1> */}
            <h1 style={style}>Inline Style</h1>
            </div>
        )
    }
}