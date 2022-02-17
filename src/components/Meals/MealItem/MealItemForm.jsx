import classes from './MealItemForm.module.css';
import Input from "../../UI/Input";
import {useRef, useState} from "react";

const MealItemForm = (props) => {
    const amountInputRef = useRef();
    const [isFormValid, setIsFormValid] = useState(true);
    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setIsFormValid(false)
            return;
        }
        
        props.onAddToCart(enteredAmountNumber);
    }

    return (
        <form onSubmit={submitHandler} action="" className={classes.form}>
            <Input ref={amountInputRef} label={"Amount"}
                   input={{id: 'amount', type: 'number', min: 1, max: 5, step: 1, defaultValue: 1}}/>
            <button>+ Add</button>
            {!isFormValid && <p>Please enter a valid amount.</p>}
        </form>
    )
}

export default MealItemForm;