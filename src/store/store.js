import {createStore} from 'redux'

const counterReducer = (state = {counter: 0, showCounter: true}, action) =>{
    if (action.type === 'INCREMENT')
        return {counter: state.counter + 1, showCounter: state.showCounter}
    if (action.type === 'DECREMENT')
        return {counter: state.counter - 1 , showCounter: state.showCounter}
    if (action.type === 'INCREASE')
        return {counter: state.counter + action.amount, showCounter: state.showCounter}
    if(action.type === 'TOGGLE')
        return {counter: state.counter, showCounter: !state.showCounter}
    
    return state;
}

const store = createStore(counterReducer);

const counterSubscriber = () =>{
    console.log(store.getState())
}

store.subscribe(counterSubscriber);

store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})

export default store;