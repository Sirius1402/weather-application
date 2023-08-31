import { createSlice } from "@reduxjs/toolkit";

export const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    loader: true,
  },
  reducers: {
    showLoader: (state, action) => {
      state.loader = action.payload;
    },
  },
});

export const { showLoader } = loaderSlice.actions;

export const loader = (state) => state.loader.loader;

export default loaderSlice.reducer;