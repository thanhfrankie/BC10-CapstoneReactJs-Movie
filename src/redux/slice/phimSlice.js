// rxslice
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { quanLyPhimServ } from "../../services/quanLyPhim";
import { handleTurnOffLoading, handleTurnOnLoading } from "./loadingSlice";

const initialState = {
  arrMovie: [],
};

export const getAllMovieThunk = createAsyncThunk(
  "quanLyPhim/getAllMovieThunk",
  async (dataLocal, { tenPhim = "", dispatch }) => {
    dispatch(handleTurnOnLoading());
    const res = await quanLyPhimServ.getAllMovie(tenPhim);
    dispatch(handleTurnOffLoading());
    // res.data.content
    const movies = res.data.content;
    const chunks = [];
    for (let i = 0; i < movies.length; i += 8) {
      chunks.push(movies.slice(i, i + 8));
    }
    return chunks;
  }
);

const phimSlice = createSlice({
  name: "quanLyPhim",
  initialState,
  reducers: {
    handleAllMovie: (state, action) => {
      state.arrMovie = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllMovieThunk.fulfilled, (state, action) => {
      console.log(action);
      state.arrMovie = action.payload;
    });
  },
});

export const { handleAllMovie } = phimSlice.actions;

export default phimSlice.reducer;
