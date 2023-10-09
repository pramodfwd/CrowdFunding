import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "data",
  initialState: {
    value: [],
  },
  reducers: {
    searchdata: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { searchdata } = SearchSlice.actions;

export default SearchSlice.reducer;