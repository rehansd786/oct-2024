import React from 'react'

function AppButton(props) {

    const handleButtonClick = () => {
        props.func(props.val)
    }

    return (
        <button style={{marginLeft:50}} onClick={handleButtonClick}>
            + {props.val}
        </button>
    )
}

export default AppButton