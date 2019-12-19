import React from 'react'

export const Streaming = (props) => {
    if(props.application === "whatsapp") {
        throw new Error('This is not a Streaming Application')
    }
    return(
    <h1>{props.application}</h1>
    )
}