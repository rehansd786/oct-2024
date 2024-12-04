import React from 'react'

function Button() {

    const handleButtonClick = () => {
        console.log("button ic clicked")
    }

    const func = (x, y , z) => {
        console.log(x, y, z)
    }

    return (

        <button onClick={
            () => {
                
            }
        }>
            Click me 
        </button>

        // <button onClick={
        //     // handleButtonClick
        //     // () => {
        //     //     console.log("inline function")
        //     // }
        //     // func
        //     () => {
        //         func(10, 20 , 30)
        //     }
        // }> 
        //     Button 
        // </button>
    )
}

export default Button