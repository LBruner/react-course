import {useState} from "react";

const Input = (props) =>{
    const [isTouched, setIsTouched] = useState(false);
    const [inputState,setInputState] = useState({value : '', isvalid: false});
    
    const isInputValid = !props.validateInput(inputState.value) && isTouched
    const onBlurHandler = (e) =>{
        setInputState(prevState => {return {isValid: isInputValid, value: e.target.value, resetInput}})
        setIsTouched(true)
    }

    const resetInput = () =>{
        setInputState({ isValid: false, value: ''})
        setIsTouched(false)
    }
    
    const onChangeHandler = (e) =>{
        setInputState(prevState => {return {isValid: isInputValid, value: e.target.value, resetInput}})
        setIsTouched(true)
        props.setFunction(inputState);
    }
    
    return(
        <div className={props.class}>
            <label htmlFor={props.id} >{props.labelText}</label>
            <input value={inputState.value} onBlur={onBlurHandler} onChange={onChangeHandler} type={props.inputType} id={props.id} />
            {!isInputValid && isTouched && props.errorMessage}
        </div>
    )
}
export default Input;