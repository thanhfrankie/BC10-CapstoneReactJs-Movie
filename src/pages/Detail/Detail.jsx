import React, { useEffect, useState } from "react";
import { Button, CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "../../assets/styles/circle.scss";
import { Tabs, Radio, Space, Rate } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { SET_CHI_TIET_PHIM } from "../../redux/action/types/QuanLyRapType";
import { layThongTinChiTietPhim } from "../../redux/action/QuanLyRapActions";
import moment from "moment"; //npm i moment
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import ReactPlayer from "react-player";
import ScrollToTopButton from "../../layout/ScrollToTopButton/ScrollToTopButton";
const { TabPane } = Tabs;


export default function Detail(props) {
  const filmDetail = useSelector((state) => state.QuanLyPhimReducer.filmDetail);

  console.log({ filmDetail });
  const { arrMovie } = useSelector((state) => state.phimSlice);
  const [openModal, setOpenModal] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const handleOpen = (idMovie) => {
    setSelectedMovieId(idMovie);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedMovieId(null);
  };

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    //Lấy thông tin param từ url
    // let { id } = props.match.params;

    dispatch(layThongTinChiTietPhim(id));
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div
        style={{
          backgroundImage: `url(${filmDetail.hinhAnh})`,
          backgroundSize: "100%",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <CustomCard
          style={{ paddingTop: 150, minHeight: "100vh" }}
          effectColor="#fff" // required
          color="#fff" // default color is white
          blur={10} // default blur value is 10px
          borderRadius={0} // default border radius value is 10px
        >
          <div className="container">
            <div className="grid grid-cols-12">
              <div className="col-span-5 col-start-3">
                <div className="grid grid-cols-3">
                  <div className=" group relative">
                    <img
                      className="col-span-1 group-hover:opacity-50 transition-opacity duration-300 w-full h-96"
                      src={filmDetail.hinhAnh}
                      style={{ width: "100%", height: 300 }}
                      alt="123"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        className="bg-transparent rounded-none cursor-pointer p-0"
                        onClick={() => handleOpen(filmDetail.maPhim)}
                      >
                        <div>
                          <i
                            className=" opacity-0 rounded-full  hover:bg-slate-400 group-hover:opacity-100 transition-opacity duration-300 fa-regular fa-circle-play font-extrabold z-10"
                            style={{
                              width: "50px",
                              height: "50px",
                              fontSize: "50px",
                              display: "inline-block",
                            }}
                          ></i>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="col-span-2 ml-5">
                    <p className="text-sm tracking-wide">
                      Ngày chiếu:{" "}
                      {moment(filmDetail.ngayKhoiChieu).format("DD.MM.YYYY")}
                    </p>

                    <p className="text-2xl text-orange-600 font-bold">
                      {filmDetail.tenPhim}
                    </p>

                    <p>{filmDetail.moTa}</p>
                    <div className="mt-5">
                      <NavLink>
                        <button className="  group-hover:opacity-100 transition-opacity duration-300 w-30 px-5 py-2 bg-red-700 hover:bg-red-900 rounded text-white text-lg font-semibold ">
                          Mua Vé
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-3 col-start-10">
                <h1
                  style={{
                    marginLeft: "15%",
                    marginBottom: "10px",
                    color: "orange",
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  Đánh giá
                </h1>
                <h1 className="text-yellow-900 text-2xl">
                  <Rate
                    allowHalf
                    value={filmDetail.danhGia / 2}
                    style={{
                      marginBottom: "10px",
                      color: "yellow",
                      fontSize: 30,
                    }}
                  />
                </h1>
                <div className={`c100 p${filmDetail.danhGia * 10} big`}>
                  <span className="text-white">{filmDetail.danhGia * 10}%</span>
                  <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="mt-10 ml-72 w-2/3 container bg-white px-5 py-5">
              <Tabs defaultActiveKey="1" centered>
                <TabPane tab="Lịch chiếu" key="1" style={{ minHeight: 300 }}>
                  <div>
                    <Tabs tabPosition={"left"}>
                      {filmDetail.heThongRapChieu?.map((htr, index) => {
                        return (
                          <TabPane
                            tab={
                              <div className="flex flex-row items-center justify-center">
                                <img
                                  src={htr.logo}
                                  className="rounded-full w-full"
                                  style={{ width: 50 }}
                                  alt="..."
                                />
                                <div className="text-center ml-2">
                                  {htr.tenHeThongRap}
                                </div>
                              </div>
                            }
                            key={index}
                          >
                            {htr.cumRapChieu?.map((cumRap, index) => {
                              return (
                                <div className="mt-5" key={index}>
                                  <div className="flex flex-row">
                                    <img
                                      style={{ width: 60, height: 60 }}
                                      src={cumRap.hinhAnh}
                                      alt="..."
                                    />
                                    <div className="ml-2">
                                      <p
                                        style={{
                                          fontSize: 20,
                                          fontWeight: "bold",
                                          lineHeight: 1,
                                        }}
                                      >
                                        {cumRap.tenCumRap}
                                      </p>
                                      <p
                                        className="text-gray-400"
                                        style={{ marginTop: 0 }}
                                      >
                                        {cumRap.diaChi}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="thong-tin-lich-chieu grid grid-cols-4">
                                    {cumRap.lichChieuPhim
                                      ?.slice(0, 12)
                                      .map((lichChieu, index) => {
                                        return (
                                          <NavLink
                                            to={`/checkout/${lichChieu.maLichChieu}`}
                                            key={index}
                                            className="col-span-1 text-green-800 font-bold"
                                          >
                                            {moment(
                                              lichChieu.ngayChieuGioChieu
                                            ).format("hh:mm A")}
                                          </NavLink>
                                        );
                                      })}
                                  </div>
                                </div>
                              );
                            })}
                          </TabPane>
                        );
                      })}
                    </Tabs>
                  </div>
                </TabPane>
               
              </Tabs>
            </div>
          </div>
        </CustomCard>
        {openModal && selectedMovieId && (
          <div className="fixed z-20 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="relative modal-content">
              {arrMovie.map((filmDetail, index) => {
                if (filmDetail.maPhim === selectedMovieId) {
                  return (
                    <ReactPlayer
                      key={index}
                      url={filmDetail.trailer}
                      controls
                      width="800px"
                      height="450px"
                    />
                  );
                }
                return null;
              })}
              <button
                className="absolute top-2 right-2 text-white"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
      <ScrollToTopButton/>
    </div>
  );
}
