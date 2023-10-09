import { createSlice } from "@reduxjs/toolkit";

const ProfileSlice = createSlice({
  name: "data",
  initialState: {
    value: [],
  },
  reducers: {
    profileData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { profileData } = ProfileSlice.actions;

export default ProfileSlice.reducer;