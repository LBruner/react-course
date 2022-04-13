import {useEffect, useRef, useState} from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('')
    const nameRef = useRef();
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    
    useEffect(() =>{
        if (enteredNameIsValid) {
            console.log('NI is valid!')
        }
    }, [enteredNameIsValid])
    
    const nameInputChangeHandler = e => {
        setEnteredName(e.target.value);
    }

    const formSubmissionHandler = e => {
        e.preventDefault();
        setEnteredNameTouched(true);
        if (enteredName.trim() === '') {
            setEnteredNameIsValid(false)
            return
        }
        
        setEnteredNameIsValid(true)
    }
    
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input ref={nameRef} type='text' id='name' onChange={nameInputChangeHandler}/>
                {nameInputIsInvalid && <p className={'error-text'}>Name must not be empty.</p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
