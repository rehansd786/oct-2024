import React from 'react'
import Component3Child from './Component3Child'

function Component3() {
  return (
    <div>
        {/* <Component3Child msg="welcome" /> */}

        <Component3Child x="100">
            <h3 style={{color: 'red'}}>
                content of component3child specified in parent component
            </h3>
        </Component3Child>
    </div>
  )
}

export default Component3;


// <Name>
//    <p>React</p>
//</Name>

// <Name />