import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {uiActions} from "../store/ui-slice";

const CartButton = (props) => {
    const dispatch = useDispatch();

    const productQuantity = useSelector(state => state.cart.totalQuantity)
    
    const onClickHandler = () => {
        dispatch(uiActions.toggle())
    }

    return (<button onClick={onClickHandler} className={classes.button}>
            <span>My Cart</span>
            <span className={classes.badge}>{productQuantity}</span>
        </button>);
};

export default CartButton;
