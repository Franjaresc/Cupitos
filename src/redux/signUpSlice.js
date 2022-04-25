import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  driver: false,
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  carPlate: '',
  carModel: '',
  carColor: '',
};

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    isDriver: (state, action) => {
      state.driver = action.payload;
    },
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
    changePasswordConfirmation: (state, action) => {
      state.passwordConfirmation = action.payload;
    },
    changeCarPlate: (state, action) => {
      state.carPlate = action.payload;
    },
    changeCarModel: (state, action) => {
      state.carModel = action.payload;
    },
    changeCarColor: (state, action) => {
      state.carColor = action.payload;
    },
  },
});

export const {
  isDriver,
  changeName,
  changeEmail,
  changePassword,
  changePasswordConfirmation,
  changeCarPlate,
  changeCarModel,
  changeCarColor,
} = signUpSlice.actions;

export default signUpSlice.reducer;
