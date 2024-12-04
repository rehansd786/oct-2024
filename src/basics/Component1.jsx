import React from 'react'

function Component1() {
  return (
    // <React.Fragment>
    //     <h1>React</h1>
    //     <h1>Js</h1>
    // </React.Fragment>
    // <>
    //     <h1>React</h1>
    //     <h1>Js</h1>
    //     <h1>CSS</h1>
    // </>

    [
        <h1>React</h1>,
        <h1>Js</h1>,
        <h1>CSS</h1>,
        <h1>html</h1>
    ]
  )
}

export default Component1