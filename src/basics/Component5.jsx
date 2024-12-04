import React from 'react'

function Component5() {

    let x = 100;

    const handleClick = () => {
        x++;
        console.log("clicked", x);
    }

    return (
        <>
            <h1>
                value of x = {x}
            </h1>
            <button onClick={handleClick}>
                Update X
            </button>
        </>
    )
}

export default Component5