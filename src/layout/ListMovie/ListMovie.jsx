import React, { useEffect, useState } from "react";
import { quanLyPhimServ } from "../../services/quanLyPhim";
import { quanLyRapServ } from "../../services/quanLyRap";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovieThunk, handleAllMovie } from "../../redux/slice/phimSlice";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import "./listMovie.scss";

const ListMovie = () => {
  // const [arrMovie, setArrMovie] = useState([]);
  // state đại diện cho object reducer có ở store

  const { arrMovie } = useSelector((state) => state.phimSlice);
  const dispatch = useDispatch();
  console.log(arrMovie);
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

  useEffect(() => {
    // quanLyPhimServ
    //   .getAllMovie()
    //   .then((res) => {
    //     console.log(res);
    //     // setArrMovie(res.data.content);
    //     dispatch(handleAllMovie(res.data.content));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    dispatch(getAllMovieThunk("quanLyPhim/getAllMovieThunk"));
  }, []);
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const settings = {
    rows: 2,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <div id="lichChieu" className="slider-container  mb-20">
      <Slider {...settings}>
        {arrMovie.map((movie, index) => {
          return (
            <div
              style={{ width: "800px" }}
              className="movie_item group relative "
              key={index}
            >
              <div>
                <div className=" m-5 relative ">
                  <div>
                    <img
                      className="group-hover:opacity-50 transition-opacity duration-300 w-full h-96"
                      src={movie.hinhAnh}
                      alt=""
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        className="bg-transparent rounded-none cursor-pointer p-0"
                        onClick={() => handleOpen(movie.maPhim)}
                      >
                        <div>
                          <i
                            className="opacity-0 rounded-full bg-white hover:bg-slate-400 group-hover:opacity-100 transition-opacity duration-300 fa-regular fa-circle-play font-extrabold"
                            style={{
                              marginBottom: "100px",
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
                  <br />
                  <div className="group-hover:opacity-0">
                    <h3 className=" h-14">
                      <span className="bg-orange-500 text-white rounded px-2 mr-3 text-lg font-semibold">
                        C18
                      </span>
                      <span className=" text-lg font-semibold ">
                        {movie.tenPhim}
                      </span>
                    </h3>

                    <div>
                      <p className="line-clamp-3">{movie.moTa}</p>
                    </div>
                  </div>
                  <div className="">
                    <NavLink to={`/detail/${movie.maPhim}`}>
                      <button
                        style={{ width: "100%" }}
                        className="   absolute bottom-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300  px-10 py-5 bg-red-700 hover:bg-red-900 rounded text-white text-lg font-semibold "
                      >
                        Mua Vé
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      {openModal && selectedMovieId && (
        <div className="fixed z-20 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="relative modal-content">
            {arrMovie.map((movie, index) => {
              if (movie.maPhim === selectedMovieId) {
                return (
                  <ReactPlayer
                    key={index}
                    url={movie.trailer}
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
  );
};

export default ListMovie;
