import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  index: 1,
  routes: [
    {key: 'history', title: 'Historial', icon: 'clipboard-text-clock-outline'},
    {key: 'home', title: 'Home', icon: 'home'},
    {key: 'profile', title: 'Perfil', icon: 'account'},
  ],
};

const bottomNavigationSlice = createSlice({
  name: 'bottomNavigation',
  initialState,
  reducers: {
    onIndexChange: (state, action) => {
      console.log('onIndexChange', action.payload);
      state.index = action.payload;
    },
  },
});

export const {onIndexChange} = bottomNavigationSlice.actions;

export default bottomNavigationSlice.reducer;
