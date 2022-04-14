import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {
    const toggleCounterHandler = () => {
    };
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();
    
    const incrementHandler = () =>{
        dispatch({type: 'INCREMENT'})
    }
    
    const increaseHandler = () =>{
        dispatch({type: 'INCREASE', amount: 10})
    }
    
    const decrementHandler = () =>{
        dispatch({type: 'DECREMENT'})
    }
    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{counter}</div>
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increment By 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
