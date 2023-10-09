import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    value: false,
  },
  reducers: {
    loginStatus: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { loginStatus } = AuthSlice.actions;

export default AuthSlice.reducer;
