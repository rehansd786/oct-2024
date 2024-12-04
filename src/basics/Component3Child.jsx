import React from 'react'

function Component3Child(props) {
  return (
    <div>
        Component3Child {props.x}
        <div id="parentId">
            {props.children}
        </div>
    </div>
  )
}

export default Component3Child