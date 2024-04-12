import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { quanLyRapServ } from "../../services/quanLyRap";
import LichChieuPhim from "../../components/LichChieuPhim/LichChieuPhim";
import "./LichChieuCumRap.scss";
export default function LichChieuCumRap() {
  const [arrCumRap, setArrCumRap] = useState([]);
  useEffect(() => {
    quanLyRapServ
      .getAllThongTinCumRap()
      .then((res) => {
        console.log(res);
        setArrCumRap(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container" id="cumRap">
      <h2 className="text-center font-bold text-3xl my-5">
        Danh Sách Lịch Chiếu Cụm Rạp
      </h2>
      <div className="danh-sach  ">
        {/* tab lịch chiếu cụm rạp  */}
        <div className="cum-rap ">
          <Tabs
            tabPosition="left"
            style={{
              height: 700,
            }}
            items={arrCumRap?.map((cumrap, index) => {
              return {
                label: (
                  <div className="img-content ">
                    <img className="w-16 opacity-100 hover:opacity-70 " src={cumrap.logo} />,
                  </div>
                ),
                key: cumrap.maHeThongRap,
                children: <LichChieuPhim cumrap={cumrap.lstCumRap} />,
              };
            })}
          />
        </div>
      </div>
    </div>
  );
}
