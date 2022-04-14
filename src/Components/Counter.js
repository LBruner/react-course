import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";
import {createSlice} from "@reduxjs/toolkit";

const Counter = () => {

    
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();
    
    const showCounter = useSelector(state => state.showCounter)
    
    const incrementHandler = () =>{
        dispatch({type: 'INCREMENT'})
    }
    
    const increaseHandler = () =>{
        dispatch({type: 'INCREASE', amount: 10})
    }
    
    const decrementHandler = () =>{
        dispatch({type: 'DECREMENT'})
    }
    
    const toggleCounter = () =>{
        dispatch({type: 'TOGGLE'})
    }
    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increment By 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounter}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
