import { createSlice } from "@reduxjs/toolkit";
import { data } from "@remix-run/router";

const initialState = {
    data: [],
    loading: false,
    error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addData: (state, action) => {
      state.data = [...state.data, ...action.payload];
    },
    logout: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  }  
})

export const { loginStart, loginSuccess, loginFailure, addData, logout } = userSlice.actions;

export default userSlice.reducer;