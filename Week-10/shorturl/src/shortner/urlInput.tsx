import React, { useState }  from 'react'
import Button               from '../UI/button'
import './urlInput.css'


const UrlInput = (props: any) => {

    const [enteredValue, setEnteredValue] = useState("");

    const goalInputChangeHandler = (event: any) => {
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = (event: any) => {
        event.preventDefault();
        props.onAdd(enteredValue);
        setEnteredValue("");
    };

    return (
        <form onSubmit={formSubmitHandler} >
            <div className="form-control">
                <label>URL Shortner Goal</label>
                <input
                    type    ="text"
                    value   ={enteredValue}
                    onChange={goalInputChangeHandler}
                />
            </div>
            <Button type="submit">Add URL</Button>
        </form>
    )
}

export default UrlInput