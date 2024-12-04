import React from 'react'
import Component4Child from './Component4Child'

function Component4() {

    const PI = 3.14;


    const parentFunc = () => {
        console.log("parent func is executed");
    }

    return (
        <div>
            <Component4Child input={PI} inputFunc={parentFunc} />
        </div>
    )
}

export default Component4