import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state) => {
      state.loggedIn = true;
    },
    setLogout: (state) => {
      state.loggedIn = false;
    },
  },
});

export const { setLogin, setLogout } = loginSlice.actions;

export const selectLogin = (state) => state.login.loggedIn;

export default loginSlice.reducer
