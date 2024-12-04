import React from 'react'

function Card(props) {
  return (
    <div className='card'>
        <div>
            <img src={props.input.path} />
        </div>
        <div>
            <h1>{props.input.name}</h1>
            <div>
                {props.input.desc}
            </div>
        </div>
    </div>
  )
}

export default Card