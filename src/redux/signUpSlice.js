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
  telephone: '',
  description: '',
  career: '',
  code: '',
  hidePassword: true,
  hidePasswordConfirmation: true,
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
    changeTelephone: (state, action) => {
      state.telephone = action.payload;
    },
    changeDescription: (state, action) => {
      state.description = action.payload;
    },
    changeCareer: (state, action) => {
      state.career = action.payload;
    },
    changeCode: (state, action) => {
      state.code = action.payload;
    },
    changeHidePassword: (state, action) => {
      state.hidePassword = action.payload;
    },
    changeHidePasswordConfirmation: (state, action) => {
      state.hidePasswordConfirmation = action.payload;
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
  changeTelephone,
  changeDescription,
  changeCareer,
  changeCode,
  changeHidePassword,
  changeHidePasswordConfirmation,
} = signUpSlice.actions;

export default signUpSlice.reducer;
