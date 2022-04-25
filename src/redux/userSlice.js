import {createSlice} from '@reduxjs/toolkit';
import {baseUrlDatabase, baseUrlAuth, apiKey} from '../api/constants';

const initialState = {
  isLoading: false,
  error: null,
  user: null,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginRequest: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
    signUpRequest: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    signUpSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    signUpFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const signUp = user => dispatch => {
  dispatch(userSlice.actions.signUpRequest());
  console.log('signUp', user);
  const urlSignUp = `${baseUrlAuth}signUp?key=${apiKey}`;
  console.log('signUpURL', urlSignUp);
  const urlDatabaseCreateUser = `${baseUrlDatabase}/Users`;
  return fetch(urlSignUp, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "email": user.email,
      "password": user.password,
      "returnSecureToken": true,
    }),
  })
    .then(
      response => {
        if (response.ok) {
          return response.json();
        }
        console.log('response', response);
        console.log('response', response.status);
        throw new Error('Error al crear usuario');
      },
      error => {
        dispatch(userSlice.actions.signUpFailure(error.message));
      },
    )
    .then(response => {
      return fetch(`${urlDatabaseCreateUser}/${response.localId}.json`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            "email": user.email,
            "name": user.name,
            "password": user.password,
            "carPlate": user.carPlate,
            "carModel": user.carModel,
            "carColor": user.carColor,
            "driver": user.driver,
          },
        ),
      }).then(
        response => {
          if (response.ok) {
            console.log('Usuario creado');
            console.log(response.json());
            return response.json();
          }
          console.log('response', response);
          console.log('response', response.status);
          throw new Error('Error al crear usuario');
        },
        error => {
          dispatch(userSlice.actions.signUpFailure(error.message));
        },
      );
    })
    .then(response => {
      dispatch(userSlice.actions.signUpSuccess(response));
    })
    .catch(error => {
      dispatch(userSlice.actions.signUpFailure(error));
    });
};

export default userSlice.reducer;
