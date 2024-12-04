import React from 'react'

function Component4Child(props) {

    const childFunc = () => {
        props.inputFunc();
    }

    return (
        <div>
            Component4Child
            <h1>{props.input}</h1>

            <button
            onClick={
                childFunc
            }
            >Call Parent Function</button>
        </div>
    )
}

export default Component4Child