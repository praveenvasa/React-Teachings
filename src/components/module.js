import React, {Component}  from 'react';
import style from './style.module.css';


export class Module extends Component {
    render(){
        return(
            <div className={style.demo}>
            <h1>Module Style</h1>
            </div>
        )
    }
}