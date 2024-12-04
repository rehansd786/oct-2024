import React, { useState } from 'react'

function CardForm(props) {


    const [searchElem, setSearchElem] = useState('');

    const handleChange = (event) => {
        // console.log(event.target.value);
        setSearchElem(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(searchElem);
        props.filterFunc(searchElem)
    }

    const handleClear = () => {
        setSearchElem('');
        props.filterFunc('');
    }


    return (
        <div className='card-form'>
            <form onSubmit={handleFormSubmit}>
                <input placeholder='Search' value={searchElem} onChange={handleChange}/>
                <button>Submit</button>
                <button type='button' onClick={handleClear}>Clear</button>
            </form>    
        </div>
    )
}

export default CardForm