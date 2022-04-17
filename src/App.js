import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {uiActions} from "./components/store/ui-slice";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
    const showCart = useSelector(state => state.ui.cartIsVisible)
    const cart = useSelector(state => state.cart)
    const notification = useSelector(state => state.ui.notification)
    const dispatch = useDispatch()

    useEffect(() => {
        async function sendCartData() {
            dispatch(uiActions.showNotification({
                status: 'Pending',
                title: 'Sending..',
                message: 'Sending cart data'
            }))

            const response = await fetch('https://react-3ad0d-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            });
            if (!response.ok)
                throw new Error('Something went wrong')

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Complete..',
                message: 'Sent cart data successfully'
            }))
        }

        if (isInitial) {
            isInitial = false
            return;
        }

        sendCartData().catch(e => dispatch(uiActions.showNotification({
            status: 'error',
            title: 'Fail..',
            message: e.message
        })))
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
