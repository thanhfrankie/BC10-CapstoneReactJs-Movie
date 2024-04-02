import React, { useEffect, useState } from "react";
import { quanLyMuaVeServ } from "../../../services/quanLyMuaVe";
import "../components/listseats.scss";

export default function ListSeats({ seatMovie, danhSachGheDangDat, gheArr }) {
  const handleSeatClick = (item) => {
    if (!item.daDat) {
      danhSachGheDangDat(item);
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-5">
        <div
          className="bg-black"
          style={{ width: "80%", height: "10px" }}
        ></div>
        <div className="trapezoid text-center">
          <h3 className="mt-3 text-black">Màn Hình</h3>
        </div>
        <div className="seats-container" style={{ maxWidth: "80%" }}>
          {seatMovie.map((item, index) => {
            let classGheVip = item.loaiGhe === "Vip" ? "gheVip" : "";
            let classGheDaDat = item.daDat === true ? "gheDaDat" : "";
            let classGheDangDat = "";
            // kiểm tra từng ghế render xem có trong mảng ghế đang đặt hay không
            let indexGheDD = gheArr.findIndex(
              (ghe) => item.maGhe === ghe.maGhe
            );
            if (indexGheDD !== -1) {
              classGheDaDat = "gheDangDat";
            }

            return (
              <div className="seat-wrapper" key={index}>
                <button
                  onClick={() => {
                    handleSeatClick(item);
                  }}
                  className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat}`}
                >
                  {item.daDat ? "X" : item.stt}
                </button>
                {(index + 1) % 16 === 0 ? <br /> : ""}
              </div>
            );
          })}
        </div>
      </div>
      <div className="button_item">
        <div className="btn_content">
          <button className="gheDaDat">
            <span>X</span>
          </button>
          <p>Đã Đặt</p>
        </div>
        <div className="btn_content">
          <button className="ghe"></button>
          <p>Thường</p>
        </div>
        <div className="btn_content">
          <button className="gheVip"></button>
          <p>Vip</p>
        </div>
      </div>
    </div>
  );
}
