import React, { useContext, useEffect, useState } from "react";
import "../components/info.scss";
import { quanLyMuaVeServ } from "../../../services/quanLyMuaVe";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { getLocalStorage } from "../../../utils/util";
import { quanLyNguoiDungServ } from "../../../services/quanLyNguoiDung";
import LichSuDatVe from "../../../components/LichSuDatVe/LichSuDatVe";
import { useDispatch } from "react-redux";
import { updateGheArr } from "../../../redux/slice/ticketSlice";
import { NotifyContext } from "../../../template/UserTemplate/UserTemplate";
import {
  handleTurnOffLoading,
  handleTurnOnLoading,
} from "../../../redux/slice/loadingSlice";
export default function InfoMovie({ gheArr }) {
  const notify = useContext(NotifyContext);
  const [listMovie, setListMovie] = useState([]);
  const { maLichChieu } = useParams();
  const userLocal = getLocalStorage("user");
  const [infoUser, setInfoUser] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    
    quanLyMuaVeServ
      .getAllTicKet(maLichChieu)

      .then((res) => {
        // dispatch(handleTurnOffLoading());
        setListMovie(res.data.content.thongTinPhim);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [maLichChieu]);
  const totalTicketPrice = gheArr.reduce((total, ghe) => {
    return total + ghe.giaVe;
  }, 0);
  const handleDatVe = () => {
    if (!gheArr || gheArr.length === 0) {
      notify("Bạn chưa chọn ghế.");
      return;
    }

    if (!listMovie || Object.keys(listMovie).length === 0) {
      console.log("Dữ liệu phim đang được tải...");
      return;
    }
    // Gọi API để đặt vé
    quanLyNguoiDungServ
      .datVe(maLichChieu, gheArr)
      .then((res) => {
        console.log("Đặt Vé Thành Công:", res.data.content);
        setInfoUser(res.data.content);
        const updatedGheArr = gheArr.map((ghe) => {
          return { ...ghe, trangThai: "DaDat" };
        });
        dispatch(updateGheArr(updatedGheArr));

        notify("Đặt vé thành công!");

        setTimeout(() => {
          navigate(`/account`);
        }, 1000);
      })
      .catch((error) => {
        console.log("ERROR");
      });
  };

  return (
    // {isDekstop &&
    <div className="movie_info  mt-5 min-h-screen  ">
      <div className="">
        <div>
          <p className=" text-center text-5xl text-green-300 mb-10">
            {totalTicketPrice} VNĐ
          </p>
        </div>
        <hr />
        <div className="   flex justify-between my-5 mx-5 text-sm font-medium  ">
          <h3 className="text_info font-medium text-xl mt-5">Cụm Rap:</h3>
          <h3 className="text_info text-green-500 truncate ">
            {listMovie.tenCumRap}
          </h3>
        </div>
        <hr />
        <div className="  flex justify-between my-5 mx-5 text-sm font-medium">
          <h3 className="text_info font-medium text-xl ">Địa chỉ:</h3>
          <h3 className=" text-green-500 text-right">{listMovie.diaChi}</h3>
        </div>
        <hr />
        <div className="  flex justify-between my-5 mx-5 text-sm font-medium">
          <h3 className="text_info font-medium text-xl ">Rạp:</h3>
          <h3 className=" text-green-500 text-right">{listMovie.tenRap}</h3>
        </div>
        <hr />
        <div className="  flex justify-between my-5 mx-5 text-sm font-medium">
          <h3 className="text_info font-medium text-xl  ">Ngày giờ chiếu:</h3>
          <h3 className=" text-green-500 text-right">
            {listMovie.ngayChieu}-
            <span className="text-red-500 text-right">
              {listMovie.gioChieu}
            </span>
          </h3>
        </div>
        <hr />
        <div className="  flex justify-between my-5 mx-5 text-sm font-medium">
          <h3 className="text_info font-medium text-xl ">Tên Phim:</h3>
          <h3 className="  text-green-500 text-right">{listMovie.tenPhim}</h3>
        </div>
        <hr />
        <div className="  flex justify-between my-5 mx-5 text-sm font-medium">
          <h3 className="font-medium text-xl">Các ghế đã đặt:</h3>
          <div className=" ghe-container text-green-500 text-right">
            {gheArr.map((ghe, index) => (
              <span className="text-center" key={ghe.maGhe}>
                Ghế {ghe.tenGhe},{" "}
              </span>
            ))}
          </div>
        </div>
        <hr />
        <div className="  text-center mt-5">
          {userLocal ? (
            <button onClick={handleDatVe} className="btn_datve">
              Đặt Vé
            </button>
          ) : (
            <p>
              Vui lòng
              <NavLink to="/sign-in" className="mx-1 text-blue-500">
                đăng nhập
              </NavLink>
              để tiếp tục
            </p>
          )}
        </div>
      </div>
      {infoUser && <LichSuDatVe infoUser={infoUser} />}
    </div>
  );
}
