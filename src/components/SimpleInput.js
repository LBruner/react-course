import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError, 
        InputChangeHandler: nameChangedHandler,
        InputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(value => value.trim() !== '');
    
 const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError, 
        InputChangeHandler: emailChangedHandler,
        InputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(value => value.includes('@'));

    //
    // const [enteredEmail, setEnteredEmail] = useState('')
    // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
    //
    // const enteredEmailIsValid = enteredEmail.includes('@');
    // const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const formSubmissionHandler = e => {
        e.preventDefault();

        if (!enteredNameIsValid || !enteredEmailIsValid) {
            return;
        }
        resetNameInput();
        resetEmailInput()
    }

    const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'
    const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'

    return (<form onSubmit={formSubmissionHandler}>
        <div className={nameInputClasses}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' onChange={nameChangedHandler}
                   onBlur={nameBlurHandler} value={enteredName}/>
            {nameInputHasError && <p className={'error-text'}>Name must not be empty.</p>}
        </div>
        <div className={emailInputClasses}>
            <label htmlFor='email'>Your Email</label>
            <input type='email' id='email' onChange={emailChangedHandler}
                   onBlur={emailBlurHandler} value={enteredEmail}/>
            {emailInputHasError && <p className={'error-text'}>Email must have @ sign.</p>}
        </div>
        <div className="form-actions">
            <button disabled={!formIsValid}>Submit</button>
        </div>
    </form>);
};

export default SimpleInput;
