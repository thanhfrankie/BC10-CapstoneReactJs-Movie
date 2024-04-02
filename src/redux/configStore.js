import { configureStore } from "@reduxjs/toolkit";
import phimSlice from "./slice/phimSlice";
import loadingSlice from "./slice/loadingSlice";
import ticketSlice from "./slice/ticketSlice";
export const store = configureStore({
  reducer: {
    // hoTen: () => {
    //   return "CyberSoft";
    // },
    phimSlice,
    loadingSlice,
    ticketSlice,
    // huhuSlice
  },
});
