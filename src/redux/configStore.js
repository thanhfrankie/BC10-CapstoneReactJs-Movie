import { configureStore } from "@reduxjs/toolkit";
import phimSlice from "./slice/phimSlice";
import loadingSlice from "./slice/loadingSlice";
import ticketSlice from "./slice/ticketSlice";


import { QuanLyPhimReducer } from './reducer/QuanLyPhimReducer';
import { QuanLyRapReducer } from './reducer/QuanLyRapReducer';


export const store = configureStore({
  reducer: {
    // hoTen: () => {
    //   return "CyberSoft";
    // },
    phimSlice,
    loadingSlice,
    ticketSlice,
    QuanLyPhimReducer,
    QuanLyRapReducer,
    // huhuSlice
  },
});
