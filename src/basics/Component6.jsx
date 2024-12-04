import React, { useState } from 'react'

function Component6() {

    const [data, setData] = useState(0);


    const handleClick = (param) => {
        // console.log(param);
        // setData(data + 1);
        // setData(data + 1);

        setData(
            (prev) => {
                return prev + 1
            }
        )

        setData(
            (prev) => {
                return prev + 1
            }
        )
    }

    return (
        <div>
            data = {data}
            <div>
                <button onClick={
                    () => {
                        handleClick(10)
                    }
                }>
                    Update
                </button>
            </div>
        </div>
    )
}

export default Component6