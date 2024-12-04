import React from 'react'

import './app-styles.css';

function Message1() {

    const randomNumber = Math.random();

    return (
        <div>
            {randomNumber}
            <h1 style={
                {
                    color: randomNumber > 0.5 ? 'red' : 'purple'
                }
            }>
                HTML
            </h1>
            <h1 className={ randomNumber > 0.5 ? 'g-cls' : 'b-cls'}>
                CSS
            </h1>
        </div>
    )
}

export default Message1