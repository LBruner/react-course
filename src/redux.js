const redux = require('redux');

const counterReducer = (state = {counter: 0},action) =>{
    return {counter: state.counter + 1}
}

const store = redux.createStore(counterReducer)

const counterSubscriber = () =>{
    const myState = store.getState();
    console.log(myState)
}

store.subscribe(counterSubscriber);
store.dispatch({type: 'INCREMENT'})