import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  index: 0,
  routes: [
    {key: 'music', title: 'Music', icon: 'music-note-outline'},
    {key: 'albums', title: 'Albums', icon: 'album'},
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
