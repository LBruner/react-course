import {createSlice} from "@reduxjs/toolkit";
import {uiActions} from "./ui-slice";

const cartInitialState = {items: [], totalQuantity: 0}

const cartSlice = createSlice({
    name: 'cartState', initialState: cartInitialState, reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id)
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id, price: newItem.price, quantity: 1, totalPrice: newItem.price, name: newItem.title
                })
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        }, removeFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id)
            state.totalQuantity--;

            if (existingItem.quantity === 1) state.items = state.items.filter(item => item.id !== id)
            else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
})

export const sendCartdata = (cart) => {
    return async (dispatch) => {
        dispatch(dispatch(uiActions.showNotification({
            status: 'Pending',
            title: 'Sending..',
            message: 'Sending cart data'
        })))
        
        const sendRequest = async () => {
            const response = await fetch('https://react-3ad0d-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT', body: JSON.stringify(cart)
            });
            if (!response.ok)
                throw new Error('Something went wrong')
        }
        try {
            await sendRequest()

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Complete..',
                message: 'Sent cart data successfully'
            }))
        } catch (e) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Fail..',
                message: e.message
            }))
        }
    }
}

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;