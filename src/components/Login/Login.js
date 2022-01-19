import React, {useState, useEffect, useReducer, useContext} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
    switch (action.type) {
        case 'EMAIL_INPUT':
            return {value: action.value, isValid: action.value.includes('@')}
        case 'INPUT_BLUR':
            return {value: state.value, isValid: state.value.includes('@')}
        default:
            return {value: '', isValid: false}
    }
}

const passwordReducer = (state, action) => {
    switch (action.type) {
        case 'PASSWORD_INPUT':
            return {value: action.value, isValid: state.value.trim().length > 6}
        case 'PASSWORD_BLUR':
            return {value: state.value, isValid: state.value.includes('@')}
        default:
            return {value: '', isValid: false}
    }
}

const Login = (props) => {
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [emailIsValid, setEmailIsValid] = useState();
    // const [enteredPassword, setEnteredPassword] = useState('');
    // const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null});
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null});

    const ctx = useContext(AuthContext)

    const {isValid: isEmailValid} = emailState;
    const {isValid: isPasswordValid} = passwordState;

    useEffect(() => {
        console.log('EFFECT RUNNING');

        return () => {
            console.log('EFFECT CLEANUP');
        };
    }, []);

    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(
                emailState.isValid && passwordState.isValid
            );
        }, 500);

        return () => {
            clearTimeout(identifier);
        };
    }, [emailState.isValid, passwordState.isValid]);

    const emailChangeHandler = (event) => {
        dispatchEmail({type: 'EMAIL_INPUT', value: event.target.value});
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({type: 'PASSWORD_INPUT', value: event.target.value})
    };

    const validateEmailHandler = () => {
        dispatchEmail({type: 'INPUT_BLUR'});
    };

    const validatePasswordHandler = () => {
        dispatchPassword({type: 'INPUT_BLUR'})
    };

    const submitHandler = (event) => {
        event.preventDefault();
        ctx.onLogin(emailState.value, passwordState.value);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input id={'email'} label={'E-mail'} type={"email"} isValid={isEmailValid} value={emailState.value} onChange={emailChangeHandler} onBlur={validateEmailHandler}/>
                 <Input id={'password'} label={'Password'} type={"password"} isValid={isPasswordValid} value={passwordState.value}
                       onChange={passwordChangeHandler} onBlur={validatePasswordHandler}/>
                
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
