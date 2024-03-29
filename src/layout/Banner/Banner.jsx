import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { quanLyPhimServ } from "../../services/quanLyPhim";
import "./banner.scss";
import ModalVideo from "react-modal-video";
import { useDispatch } from "react-redux";
import {
  handleTurnOffLoading,
  handleTurnOnLoading,
} from "../../redux/slice/loadingSlice";
const Banner = () => {
  const dispatch = useDispatch();
  const [arrBanner, setArrBanner] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [seletedVideoId, setSelectedVideoId] = useState(null);
  const contentStyle = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  useEffect(() => {
    dispatch(handleTurnOnLoading());
    quanLyPhimServ
      .getAllBanner()
      .then((res) => {
        // console.log(res);
        const newBanner = res.data.content.map((banner, index) => {
          let youtubeLink;
          if (index == 0) {
            youtubeLink = "uqJ9u7GSaYM";
          } else if (index == 1) {
            youtubeLink = "QnrHVynRwTM";
          } else if (index == 2) {
            youtubeLink = "NYH2sLid0Zc";
          }
          return { ...banner, youtubeLink };
        });
        setArrBanner(newBanner);
        dispatch(handleTurnOffLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(handleTurnOffLoading());
      });
  }, []);

  return (
    <div className="carousel_banner mt-5">
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={seletedVideoId}
        onClose={() => setIsOpen(false)}
        center
        width="800px"
        height="600px"
        top="20%"
      />
      <Carousel
        dots={true}
        nextArrow={
          <div>
            <i className="fa-solid fa-chevron-right" />
          </div>
        }
        prevArrow={
          <div>
            <i class="fa-solid fa-chevron-left"></i>
          </div>
        }
        arrows={true}
        afterChange={onChange}
      >
        {arrBanner.map((banner, index) => {
          return (
            <div key={index} className="h-screen-70 text-center ">
              <button
                onClick={() => {
                  setIsOpen(true);
                  setSelectedVideoId(banner.youtubeLink);
                }}
                className="click-play absolute flex items-center justify-center"
              >
                <i class="fa-regular fa-circle-play"></i>
              </button>
              <img
                className="w-full h-full bg-cover bg-no-repeat bg-center"
                src={banner.hinhAnh}
                alt=""
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Banner;
