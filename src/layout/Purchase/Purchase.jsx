import React, { useEffect, useState } from "react";
import { quanLyMuaVeServ } from "../../services/quanLyMuaVe";
import ListSeats from "./components/ListSeats";
import InfoMovie from "./components/InfoMovie";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllTicketThunk,
  handleAllTicket,
  updateGheArr,
} from "../../redux/slice/ticketSlice";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
export default function Purchase(){
  const { gheArr } = useSelector((state) => state.ticketSlice);
  const { seatMovie } = useSelector((state) => state.ticketSlice);

  const dispatch = useDispatch();
  const { maLichChieu } = useParams(); 
  const danhSachGheDangDat = (seat) => {
    dispatch(updateGheArr(seat));
  };

  useEffect(() => {
    

    dispatch(getAllTicketThunk(maLichChieu));
  }, [maLichChieu]);

  return (
    <div className="purcharse_content">
      <div>
        <Header/>
      </div>
      <div className="grid grid-cols-12 ">
        <div className="col-span-7">
          <ListSeats
            seatMovie={seatMovie}
            danhSachGheDangDat={danhSachGheDangDat}
            gheArr={gheArr}
          />
        </div>
        <div className="col-span-5 ">
          <div>
            <InfoMovie gheArr={gheArr} />
          </div>
        </div>
      </div>
      <div className="footer_purchase">
        <Footer/>
      </div>
    </div>
  );
}
