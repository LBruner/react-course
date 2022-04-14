import {createStore} from 'redux'

const counterReducer = (state = {counter: 0}, action) =>{
    if (action.type === 'INCREMENT')
        return {counter: state.counter + 1}
    
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