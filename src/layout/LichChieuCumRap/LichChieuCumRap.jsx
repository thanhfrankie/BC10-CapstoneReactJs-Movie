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
    <div>
      <h2 className="text-center font-bold text-3xl my-5">
        Danh Sách Lịch Chiếu Cụm Rạp
      </h2>
      <div className="danh-sach   ">
        {/* tab lịch chiếu cụm rạp  */}
        <div className="cum-rap ">
          <Tabs
            tabPosition="left"
            //   items={new Array(3).fill(null).map((_, i) => {
            //     const id = String(i + 1);
            //     return {
            //       label: `Tab ${id}`,
            //       key: id,
            //       children: `Content of Tab ${id}`,
            //     };

            //   })}
            style={{
              height: 700,
            }}
            items={arrCumRap?.map((cumrap, index) => {
              return {
                label: (
                  <div className="img-content ">
                    <img className="w-16 " src={cumrap.logo} />,
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
