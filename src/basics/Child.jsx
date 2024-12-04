import React from 'react'

function Child(props) {

    console.log(props.val1);

    console.log(typeof props.val1)

    return (
        <div className='child'>
            specified child component in parent
            <h1>
                {props.name}
            </h1>
            <h1>
                {props.val}
            </h1>
        </div>
    )
}

export default Child