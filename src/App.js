import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {uiActions} from "./components/store/ui-slice";
import Notification from "./components/UI/Notification";
import {sendCartdata} from "./components/store/cart-slice";

let isInitial = true;

function App() {
    const showCart = useSelector(state => state.ui.cartIsVisible)
    const cart = useSelector(state => state.cart)
    const notification = useSelector(state => state.ui.notification)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isInitial){
            isInitial = false;
            return;
        }
        dispatch(sendCartdata(cart))
    }, [cart, dispatch]);


    return (
        <>
            {notification && <Notification
                status={notification.status}
                title={notification.title}
                message={notification.message}
            />}
            <Layout>
                {showCart && <Cart/>}
                <Products/>
            </Layout>
        </>

    );
}

export default App;
