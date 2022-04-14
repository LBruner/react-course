import {createSlice} from "@reduxjs/toolkit";

const authInitialState = { isLoggedIn: false}

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers:{
        login(state) {
            state.isLoggedIn = true;
        } ,
        logout(state) {
            state.isLoggedIn = false;
        }
    }
})

export const authActions = authSlice.actions;
export default authSlice.reducer;
