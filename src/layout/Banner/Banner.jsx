import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { quanLyPhimServ } from "../../services/quanLyPhim";
import "./banner.scss";
import ReactPlayer from "react-player";
import { useDispatch } from "react-redux";
import { handleTurnOffLoading, handleTurnOnLoading } from "../../redux/slice/loadingSlice";
import { LeftOutlined, PlayCircleOutlined, RightOutlined } from "@ant-design/icons";

export default function Banner() {
  const dispatch = useDispatch();
  const [arrBanner, setArrBanner] = useState([]);
  const [trailerMovie, setTrailerMovie] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [currentBannerId, setCurrentBannerId] = useState(null);

  useEffect(() => {
    dispatch(handleTurnOnLoading());
    quanLyPhimServ
      .getAllBanner()
      .then(function (res) {
        setArrBanner(res.data.content);
        dispatch(handleTurnOffLoading());
      })
      .catch(function (err) {
        console.log(err);
        dispatch(handleTurnOffLoading());
      });
  }, []);

  const handleOpen = (idBanner) => {
    setCurrentBannerId(idBanner);
    if (idBanner === 1) {
      setTrailerMovie("https://www.youtube.com/watch?v=uqJ9u7GSaYM");
    } else if (idBanner === 2) {
      setTrailerMovie("https://www.youtube.com/watch?v=QnrHVynRwTM");
    } else if (idBanner === 3) {
      setTrailerMovie("https://www.youtube.com/watch?v=3JPgwgMoMZE");
    }
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setCurrentBannerId(null);
  };

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className="carousel_banner">
      <div>
        <Carousel
          nextArrow={
            <div>
            <i className="fa-solid fa-chevron-right" />
          </div>
          }
          prevArrow={
            <div>
            <i className="fa-solid fa-chevron-left" />
          </div>
          }
          arrows={true}
          dots={true}
          afterChange={onChange}
          //  autoplay
        >
          {arrBanner.map((banner, index) => (
            <div key={index} className="relative">
              <div className="h-screen-70 text-center overflow-hidden " >
              <img className=" w-full h-full bg-cover bg-no-repeat  " src={banner.hinhAnh} alt="" />
              </div>
              <div className=" absolute inset-0 flex items-center justify-center">
                <button
                  className="play-button z-10"
                  onClick={() => handleOpen(banner.maBanner)}
                >
                  <div className="icon_content">
                  <PlayCircleOutlined className=" opacity-70 hover:opacity-100" />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      {currentBannerId && (
        <div className="fixed top-0 z-20 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="relative modal-content">
            <ReactPlayer 
              url={trailerMovie}
              playing
              controls
              width="800px"
              height="450px"
            />
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
  );
}
