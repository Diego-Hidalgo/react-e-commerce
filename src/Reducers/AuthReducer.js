import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    clearUser: (state) => {
      state.user = null;
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const { setUser, setLoading, setError, clearUser } = authSlice.actions;

export const login = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    const { user } = response;
    dispatch(setUser(user));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const register = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const { user } = response;
    dispatch(setUser(user));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const logout = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await signOut(auth());
    dispatch(clearUser());
  } catch (error) {
    dispatch(setError(error.message));
  }
};
