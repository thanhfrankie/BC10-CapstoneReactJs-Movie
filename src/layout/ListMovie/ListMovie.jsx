import React, { useEffect, useState } from "react";
import { quanLyPhimServ } from "../../services/quanLyPhim";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovieThunk, handleAllMovie } from "../../redux/slice/phimSlice";
import { Carousel } from "antd";
import { NavLink } from "react-router-dom";
import "./listMovie.scss";
const ListMovie = () => {
  // const [arrMovie, setArrMovie] = useState([]);
  // có thể coi tham số state đại diện cho object reducer có ở store
  const { arrMovie } = useSelector((state) => state.phimSlice);
  const dispatch = useDispatch();
  // console.log(arrMovie);
  // console.log(phimSlice);
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
  return (
    <div className="listMovie">
      <Carousel
        dots={true}
        arrows={false}
        afterChange={onChange}
        nextArrow={
          <div>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        }
        prevArrow={
          <div>
            <i class="fa-solid fa-chevron-left"></i>
          </div>
        }
      >
        {arrMovie.map((chunk, index) => (
          <div className="">
            <div key={index}>
              <div className="grid grid-cols-4 gap-4">
                {chunk.map((movie) => (
                  <div key={movie.maPhim}>
                    <div className="movie_item space-y-4">
                      <div className="movie_content">
                        <div>
                          <img
                            className=" img_content w-full h-96 object-cover rounded mt-3 mb-5 "
                            src={movie.hinhAnh}
                            alt=""
                          />
                          <div>
                            <span></span>
                          </div>
                        </div>
                        <h3>
                          <span className="bg-orange-500 text-white rounded py-1 px-2 text-lg font-semibold mr-3">
                            C18
                          </span>
                          <span className="text-xl font-semibold">
                            {movie.tenPhim}
                          </span>
                        </h3>
                        <p className="line-clamp-2">{movie.moTa}</p>
                      </div>
                      <NavLink className="btn_button">Mua Vé</NavLink>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ListMovie;
