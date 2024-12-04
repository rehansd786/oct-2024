import React, { useState } from 'react'
import AppButton from './AppButton'
import ButtonMessage from './ButtonMessage'

function ButtonsApp() {

    const [msg, setMsg] = useState(0)


    const buttonFunc = (input) => {
        // console.log(input);

        setMsg(
            (prev) => {
                return prev + input;
            }
        )
    }


    return (
        <div>
            <AppButton val={1} func={buttonFunc} />
            <AppButton val={10} func={buttonFunc} />
            <AppButton val={100} func={buttonFunc} />
            <AppButton val={1000} func={buttonFunc} />
            <ButtonMessage msg={msg} />
        </div>
    )
}

export default ButtonsApp