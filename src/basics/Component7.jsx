import React, { useEffect } from 'react'
import { useState } from 'react'

function Component7() {

    const [color, setColor] = useState('red');

    const [size, setSize] = useState(50);

    const handleColor = (input) => {
        setColor(input);
    }

    const handleFont = (input) => {
        setSize(input);
    }


    useEffect(
        () => {
            console.log("useeffect executed");
        },
        [color]
    )

    console.log("component render");

    return (
        <>
            <h1 style={{color, fontSize: size}}>
                React
            </h1>
            <h1>
                <button onClick={() => {
                    handleColor('red')
                }}>
                    RED
                </button>
                <button onClick={() => {
                    handleColor('blue')
                }}>
                    BLUE
                </button>

                <button onClick={() => {
                    handleFont(50)
                }}>
                    50
                </button>
                <button onClick={() => {
                    handleFont(100)
                }}>
                    100
                </button>
            </h1>
        </>
    )
}

export default Component7