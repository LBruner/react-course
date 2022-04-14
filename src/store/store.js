import {configureStore, createSlice} from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        increase(state,action){
            state.counter = state.counter + action.payload
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }
    }
})

const authInitialState = { isLoggedIn: false}

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers:{
        login(state) {
            console.log('OIOIO')
            state.isLoggedIn = true;
        } ,
        logout(state) {
            console.log('OI')
            state.isLoggedIn = false;
        }
    }
})

const store = configureStore({reducer:{counter: counterSlice.reducer, auth: authSlice.reducer}})

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
