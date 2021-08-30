import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movie/movieSlice';
import loginReducer from "../features/login/loginSlice"

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    loggedIn: loginReducer,
  },
});
