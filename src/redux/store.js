import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import bottomNavigationReducer from './bottomNavigationSlice';
import signUpReducer from './signUpSlice';
import loginReducer from './loginSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    bottomNavigation: bottomNavigationReducer,
    signUp: signUpReducer,
    login: loginReducer,
  },
});
