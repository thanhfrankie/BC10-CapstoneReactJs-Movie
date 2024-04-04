import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { quanLyMuaVeServ } from "../../services/quanLyMuaVe";
import { handleTurnOffLoading, handleTurnOnLoading } from "./loadingSlice";

const initialState = {
  seatMovie: [],
  gheArr: [],
};
export const getAllTicketThunk = createAsyncThunk(
  "ticketRoom/getAllTicketThunk",
  async (dataLocal, { _, dispatch }) => {
    dispatch(handleTurnOnLoading());
    console.log("🚀 ~ getAllTicketThunk is called with dataLocal:", dataLocal);
    // phai truyen tham so vo ham getAllTicKet chu!!

    const res = await quanLyMuaVeServ.getAllTicKet(dataLocal);
    dispatch(handleTurnOffLoading());
    return res.data.content.danhSachGhe;
  }
);
const ticketSlice = createSlice({
  name: "ticketRoom",
  initialState,
  reducers: {
    handleAllTicket: (state, action) => {
      state.seatMovie = action.payload;
    },
    updateGheArr: (state, action) => {
      const seat = action.payload;
      const index = state.gheArr.findIndex((ghe) => ghe.maGhe === seat.maGhe);
      if (index !== -1) {
        state.gheArr = state.gheArr.filter((ghe) => ghe.maGhe !== seat.maGhe); // Tạo ra một phiên bản mới của gheArr bằng cách loại bỏ ghế đã chọn
      } else {
        state.gheArr = [...state.gheArr, seat]; // Thêm ghế vào gheArr
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllTicketThunk.fulfilled, (state, action) => {
      console.log(action);
      state.seatMovie = action.payload; // Cập nhật danh sách ghế
    });
  },
});

export const { handleAllTicket, updateGheArr } = ticketSlice.actions;

export default ticketSlice.reducer;
