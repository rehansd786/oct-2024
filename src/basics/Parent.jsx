import React from 'react'
import Child from './Child';

function Parent() {

    const msg = "React";

    return (
        <div className='parent'>
            <Child name="child component !!!" val={msg} val1={100} />
        </div>
    )
}

export default Parent;



// <Parent>

// </Parent>


// <Parent />