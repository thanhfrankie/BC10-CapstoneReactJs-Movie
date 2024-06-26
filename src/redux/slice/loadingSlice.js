import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isCount: 0,
};

const loadingSlice = createSlice({
  name: "loadingSlice",
  initialState,
  reducers: {
    handleTurnOffLoading: (state, action) => {
      state.isCount -= 1;
      if (state.isCount == 0) {
        state.isLoading = false;
      }
    },
    handleTurnOnLoading: (state, action) => {
      if (!state.isLoading) {
        state.isLoading = true;
      }
      state.isCount += 1;
    },
  },
});
// const loadingSlice = createSlice({
//   name: "loadingSlice",
//   initialState,
//   reducers: {
//     startLoading: (state) => {
//       state.isLoading = !state.isLoading;
//     },
//     stopLoading: (state) => {
//       state.isLoading = !state.isLoading;
//     },
//   },
// });

// export const { startLoading, stopLoading } = loadingSlice.actions;

export const { handleTurnOffLoading, handleTurnOnLoading } =
  loadingSlice.actions;

export default loadingSlice.reducer;
