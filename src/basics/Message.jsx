import React from 'react';

import './app-styles.css';

function Message() {

    const x = "Brolly";

    const styleObj = {
        color: 'blue',
        fontSize: '100px'
    };

    return (
        <div id="div-id">
            <h1 style={styleObj}>
                Welcome to {x}
            </h1>
            <h2 className='p-cls'>
                HTML CSS JS
            </h2>
        </div>
    )
}

export default Message