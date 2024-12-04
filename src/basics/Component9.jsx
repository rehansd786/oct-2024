import React, { useEffect, useRef, useState } from 'react'

function Component9() {

    const [counter, setCounter] = useState(0);

    // let renderCount = 0;

    // const [renderCount, setRenderCount] = useState(0)

    const renderRef = useRef(0); // {current}

    const counterRef= useRef();

    // console.log(renderRef);

    const handleClick = () => {
        setCounter(counter + 1);
        console.log(counterRef.current)

        counterRef.current.setAttribute("style", "color:red");

        // renderCount++;
    }

    useEffect(() => {
        // setRenderCount(renderCount + 1);
        renderRef.current = renderRef.current + 1;
    })

    useEffect(() => {
        // console.log(counter + "  : updated, it is re rendering");
        // console.log(`component rendered time : ${renderCount}`)
    })

    return (
        <div>
            <h1 id="h1-first-id" ref={counterRef}>Component rendered {(renderRef.current + 1)} times</h1>
            <h1>Counter : {counter}</h1>
            <button onClick={handleClick}>Update Counter</button>
        </div>
    )
}

export default Component9