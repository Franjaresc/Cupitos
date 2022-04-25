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
      'email': user.email,
      'password': user.password,
      'returnSecureToken': true,
    }),
  })
    .then(
      response => {
        if (response.ok) {
          return response.json();
        }
        console.log('response', response.status);
        throw new Error('Error al crear usuario');
      },
      error => {
        dispatch(userSlice.actions.signUpFailure(error.message));
      }
    )
    .then(response => {
      return fetch(`${urlDatabaseCreateUser}/${response.localId}.json`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'email': user.email,
          'name': user.name,
          'password': user.password,
          'carPlate': user.carPlate,
          'carModel': user.carModel,
          'carColor': user.carColor,
          'isDriver': user.isDriverCheck,
          'telephone': user.telephone,
          'description': user.description,
          'career': user.career,
          'code': user.code,
        }),
      })
        .then(
          r => {
            if (r.ok) {
              console.log('Usuario creado');
              return r.json();
            }
            console.log('response', r.status);
            throw new Error('Error al crear usuario');
          },
          error => {
            dispatch(userSlice.actions.signUpFailure(error.message));
          }
        )
        .then(res => {
          console.log('User', res);
          dispatch(userSlice.actions.signUpSuccess(response));
        })
        .catch(error => {
          dispatch(userSlice.actions.signUpFailure(error.message));
        });
    })
    .catch(error => {
      dispatch(userSlice.actions.signUpFailure(error.message));
    });
};


export const login = user => dispatch => {
  dispatch(userSlice.actions.loginRequest());
  console.log('login', user);
  const urlLogin = `${baseUrlAuth}signInWithPassword?key=${apiKey}`;
  console.log('loginURL', urlLogin);
  return fetch(urlLogin, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'email': user.email,
      'password': user.password,
      'returnSecureToken': true,
    }),
  })
    .then(
      response => {
        if (response.ok) {
          return response.json();
        }
        console.log('response', response.status);
        throw new Error('Error al iniciar sesión');
      },
      error => {
        dispatch(userSlice.actions.loginFailure(error.message));
      }
    )
    .then(response => {
      fetch(`${baseUrlDatabase}/Users/${response.localId}.json`)
        .then(
          r => {
            if (r.ok) {
              return r.json();
            }
            console.log('response', r.status);
            throw new Error('Error al iniciar sesión');
          },
          error => {
            dispatch(userSlice.actions.loginFailure(error.message));
          }
        )
        .then(res => {
          console.log('user', res);
          dispatch(userSlice.actions.loginSuccess(res));
        })
    })
    .catch(error => {
      dispatch(userSlice.actions.loginFailure(error.message));
    });
};


export default userSlice.reducer;
