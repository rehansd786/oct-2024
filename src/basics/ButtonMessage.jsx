import React from 'react'

function ButtonMessage(props) {
    console.log(props);
    return (
        <h1>{props.msg}</h1>
    )
}

export default ButtonMessage