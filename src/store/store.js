import {createStore} from 'redux'
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
            state.counter = state.counter + action.counter
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }
    }
})

const store = configureStore({reducer: {counter: counterSlice.reducer}})

export default store;