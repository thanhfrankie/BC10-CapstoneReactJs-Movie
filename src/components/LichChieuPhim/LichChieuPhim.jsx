import React, { useEffect, useState } from "react";
import { quanLyRapServ } from "../../services/quanLyRap";
import { Tabs } from "antd";
import moment from "moment";
import "./LichChieuPhim.scss";
import { NavLink } from "react-router-dom";
export default function LichChieuPhim({ cumrap }) {
  const [arrLichChieu, setArrLichChieu] = useState([]);
  useEffect(() => {
    quanLyRapServ
      .getAllThongTinCumRap()
      .then((res) => {
        console.log(res.data.content);
        setArrLichChieu(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="lich_chieu w-full mx-2  ">
      <Tabs
        style={{ height: 700 }}
        className="tab_cum_rap"
        tabPosition="left"
        items={cumrap.map((item, index) => {
          return {
            label: (
              <div className="text-left uppercase label_cumrap ">
                <h4 className=" font-medium text-green-600 text-lg truncate">
                  {item.tenCumRap}
                </h4>
                <p className="text-gray-400 truncate text-xs">{item.diaChi}</p>
                <button className="text-red-500 mt-4 text-base">
                  [chi tiết]
                </button>
              </div>
            ),
            key: index,
            children: (
              <div>
                {item.danhSachPhim.map((phim, index) => {
                  return (
                    phim.dangChieu && (
                      <div className="list-item">
                        <div className=" flex my-10 h-700  " key={index}>
                          <div>
                            <img
                              className=" object-fill img_item"
                              src={phim.hinhAnh}
                              alt=""
                            />
                          </div>

                          <div className="ml-12">
                            <h3 className="mb-3">
                              <span className="bg-red-600 text-white rounded py-1 px-2 text-lg font-semibold mr-3 truncate">
                                C18
                              </span>
                              <span className="text-xl font-semibold">
                                {phim.tenPhim}
                              </span>
                            </h3>
                            {/* Suất chiếu */}
                            <div className="grid grid-cols-2 gap5">
                              {/* Suất chiếu chỉ hiển thị 4 phần tử đầu trong mảng */}
                              {phim.lstLichChieuTheoPhim
                                .slice(0, 4)
                                .map((gioChieu, index) => {
                                  return (
                                    <div className="space-x-5 gio-chieu  ">
                                      <NavLink
                                        to={`/ticket-room/${gioChieu.maLichChieu}`}
                                        className="space-x-3 hover-content text-center text-sm "
                                      >
                                        {/* ngày tháng */}
                                        <span className=" moment-item text-green-600  font-semibold   ">
                                          {moment(
                                            gioChieu.ngayChieuGioChieu
                                          ).format("DD-MM-YYYY")}
                                        </span>
                                        <span>~</span>
                                        {/* giờ chiếu */}
                                        <span className=" moment-item text-orange-500 text-lg font-semibold ">
                                          {moment(
                                            gioChieu.ngayChieuGioChieu
                                          ).format("hh:mm")}
                                        </span>
                                      </NavLink>
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  );
                })}
              </div>
            ),
          };
        })}
      />
    </div>
  );
}
