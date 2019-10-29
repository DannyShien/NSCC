import React from 'react';
import './Form.css'

const Form = (props) => {
    return (
        <form
            className='form'
            onSubmit={(event) => {
                console.log(`FORM SUBMITTED`)
                event.preventDefault();
                props.submit()
            }}
        >
            <input
                className = 'searchInput'
                text = 'text'
                onChange = {(e) => {
                    console.log(e.target.value)
                    props.handleChange(e.target.value)
                }}
                name = 'search' 
                value = {props.input}
            />
            <button
                className='submitBtn'
                type='submit'
            >Submit</button>
        </form>

    )
}

export default Form; 