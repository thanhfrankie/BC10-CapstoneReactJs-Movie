import React, { useEffect, useState } from "react";
import { quanLyNguoiDungServ } from "../../services/quanLyNguoiDung";
import moment from "moment";

import { getLocalStorage } from "../../utils/util";
import {
  handleTurnOffLoading,
  handleTurnOnLoading,
} from "../../redux/slice/loadingSlice";
import "../LichSuDatVe/lichSuDatVe.scss";
import { useDispatch } from "react-redux";
import useResponsive from "../../hooks/useResponsive";

const LichSuDatVe = ({ infoUser }) => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const userLocal = getLocalStorage("user");
  const dispatch = useDispatch();
  // console.log("🚀 ~ LichSuDatVe :", infoUser);
  const [thongTinNguoiDung, setThongTinNguoiDung] = useState([]);
  const [datVe, setDatVe] = useState([]);
  console.log("🚀 ~ LichSuDatVe ~ datVe:", datVe);
  useEffect(() => {
    dispatch(handleTurnOnLoading());
    const fetchData = async () => {
      try {
        const res = await quanLyNguoiDungServ.layThongTinNguoiDung();

        console.log(res.data.content);
        setThongTinNguoiDung(res.data.content);
        dispatch(handleTurnOffLoading());
        setDatVe(res.data.content.thongTinDatVe);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    
    <div className=" history_item flex ">
      <div className="container w-90 font-bold text-3xl">
        <div className="grid info_content">
          <div className="info_item flex bg-red-500 text-white">
            <h2 className="mr-8 ml-5">Thông Tin Tài Khoản</h2>
            <a href="">
              <i className="fa-thin fa-pencil"></i>
            </a>
          </div>
          <div>
            <h2 className="font-medium text-2xl mb-10 ml-5">
              Tài Khoản:{" "}
              <span className="text-green-600">
                {thongTinNguoiDung.taiKhoan}
              </span>
            </h2>
            <h2 className="font-medium text-2xl mb-10 ml-5">
              Mật Khẩu:{" "}
              <span className="text-green-600">
                {thongTinNguoiDung.matKhau}
              </span>
            </h2>
            <h2 className="font-medium text-2xl mb-10 ml-5">
              Họ Tên:{" "}
              <span className="text-green-600">{thongTinNguoiDung.hoTen}</span>
            </h2>
            <h2 className="font-medium text-2xl mb-10 ml-5">
              Email:{" "}
              <span className="text-green-600">{thongTinNguoiDung.email}</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="container w-90  text-3xl lichSu_item  ">
        <div className="  text-white info_item1 font-bold">
          <h2 className="text-left  ml-5">Lịch Sử Đặt Vé</h2>
        </div>
        <div className="lichSu_content ">
          {datVe.map((ve, index) => (
            <div className=" lichsu_item" key={index}>
              <h2 className="font-medium text-3xl mb-5 ml-5">{ve.tenPhim}</h2>
              <h3 className=" text_item  mb-5 ml-5 font-semibold text-green-600">
                Ngày Đặt:{" "}
                <span className="text-green-600 text-base font-medium">
                  {moment(ve.ngayDat).format("HH:mm:ss DD/MM/YYYY")}
                </span>
              </h3>

              <h3 className=" text_item  mb-5 ml-5 font-semibold text-green-600">
                Mã Vé: <span>{ve.maVe}</span>
              </h3>
              <h3 className=" text_item  mb-5 ml-5 font-semibold text-green-600">
                Danh Sách Ghế:{" "}
                <span>
                  {" "}
                  {ve.danhSachGhe.map((ghe) => ghe.tenGhe).join(", ")}
                </span>
              </h3>
              {/* Tiếp tục render các thông tin khác của vé ở đây */}
            </div>
          ))}
        </div>
      </div>
    </div>
   
  );
};

export default LichSuDatVe;
// tim` file vd nhu useRouteCustom  ong ctrl p r tim nhjanh hon a'. sau nay nhieu file lam
