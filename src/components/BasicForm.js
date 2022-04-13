import {useState} from "react";
import useForm from "../hooks/use-form";

const BasicForm = (props) => {
    const {
        enteredValue: enteredName,
        isValid: nameIsValid,
        hasError: nameHasError,
        inputChangeHandler: nameInputChangeHandler,
        inputBlurHandler, nameInputBlurHandler,
        reset: resetEnteredName
    } = useForm(value => value.trim() !== '');

    const {
        enteredValue: enteredEmail,
        isValid: emailIsValid,
        hasError: emailHasError,
        inputChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEnteredEmail
    } = useForm(value => value.includes('@'));

    let formIsValid = false;
    if (nameIsValid && emailIsValid)
        formIsValid = true;
    
    const onFormSubmitionHandler = (e) =>{
        e.preventDefault();
        
        if (!formIsValid){
            return;
        }

        resetEnteredName();
        resetEnteredEmail()
    }
    
    const nameClasses = nameHasError ? 'form-control invalid' : 'form-control';
    const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';
    console.log(formIsValid)
    return (
        <form onSubmit={onFormSubmitionHandler}>
            <div className={'form-control'}>
                <div className={nameClasses}>
                    <label htmlFor='name'>First Name</label>
                    <input value={enteredName} onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} type='text' id='name' />
                    {nameHasError &&<p>Name cannot be empty.</p>}
                </div>
                <div className='form-control'>
                    <label htmlFor='lastname'>Last Name</label>
                    <input type='text' id='lastname'/>
                </div>
            </div>
            <div className={emailClasses}>
                <label htmlFor='name'>E-Mail Address</label>
                <input type='text' id='name' value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler}/>  
                {emailHasError &&<p>Email must contain @ sign.</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
