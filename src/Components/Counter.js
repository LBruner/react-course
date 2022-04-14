import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from '../store/store'

const Counter = () => {
    const dispatch = useDispatch();
    const {counter} = useSelector((state) => state.counter);
    const {showCounter} = useSelector((state) => state.counter);
    
    const incrementHandler = () =>{
        dispatch(counterActions.increment())
    }
    
    const increaseHandler = () =>{
        dispatch(counterActions.increase(15))
    }
    
    const decrementHandler = () =>{
        dispatch(counterActions.decrement())
    }
    
    const toggleCounter = () =>{
        dispatch(counterActions.toggle)
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
