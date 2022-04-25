import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    hidePassword: true,
    email: '',
    password: '',
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        changeHidePassword: (state, action) => {
            state.hidePassword = action.payload;
        },
        changeEmail: (state, action) => {
            state.email = action.payload;
        },
        changePassword: (state, action) => {
            state.password = action.payload;
        }
    }
});


export const {changeHidePassword,
    changeEmail,
    changePassword} = loginSlice.actions;


export default loginSlice.reducer;