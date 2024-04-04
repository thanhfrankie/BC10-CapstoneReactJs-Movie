import React, { Fragment, useContext, useEffect, useState } from "react";
import { Table } from "antd";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovieThunk } from "../../redux/slice/phimSlice";
import { NavLink } from "react-router-dom";
import { quanLyPhimServ } from "../../services/quanLyPhim";
import { NotifyContext } from "../../template/AdminTemplate/AdminTemplate";
import { CalendarOutlined, VideoCameraAddOutlined } from "@ant-design/icons";

const MovieManager = () => {
  const notify = useContext(NotifyContext);
  const [deleteFilmId, setDeleteFilmId] = useState("");
  const dispatch = useDispatch();
  const { arrMovie: initialArrMovie } = useSelector((state) => state.phimSlice);
  const [arrMovie, setArrMovie] = useState(initialArrMovie);
  // console.log(arrMovie);
  useEffect(() => {
    dispatch(getAllMovieThunk("abc"));
  }, []);

  useEffect(() => {
    setArrMovie(initialArrMovie);
  }, [initialArrMovie]);

  const handleDeleteFilm = (maPhim) => {
    if (window.confirm("Bạn có chắc muốn xoá phim này?")) {
      quanLyPhimServ
        .deleteFilm(maPhim)
        .then((res) => {
          setDeleteFilmId(maPhim);
          notify("Xoá phim thành công");
          dispatch(getAllMovieThunk("abc"));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const { Search } = Input;

  const onSearch = async (value = "") => {
    notify("Đang tìm kiếm...");
    try {
      let res;
      if (value.trim() !== "") {
        res = await quanLyPhimServ.getAllMovie(value);
      } else {
        res = await quanLyPhimServ.getAllMovie();
      }
      setArrMovie(res.data.content);
    } catch (err) {
      console.log("Error while searching", err);
    }
  };

  const columns = [
    {
      title: "Mã phim",
      dataIndex: "maPhim",
      // value: (text, object) => {
      //   return <span>{text}</span>;
      // },
      sorter: (a, b) => a.maPhim - b.maPhim,
      defaultSortOrder: "descend",
      // sortDirections: ["descend"],
      width: "15%",
      align: "center",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      width: "15%",
      render: (text, film) => {
        return (
          <>
            <img
              src={film.hinhAnh}
              alt={film.tenPhim}
              style={{
                width: "50px",
                height: "50px",
                display: "block",
                margin: "0 auto",
              }}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `https://picsum.photos/id/${film}/50/50`;
              }}
            />
          </>
        );
      },
      // defaultSortOrder: "descend",
      // sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim();
        if (tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["ascend"],
      width: "20%",
      align: "center",
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      render: (text) => <div className="line-clamp-2">{text}</div>,
      // sorter: (a, b) => {
      //   let moTaA = a.moTa.toLowerCase().trim();
      //   let moTaB = b.moTa.toLowerCase().trim();
      //   if (moTaA > moTaB) {
      //     return 1;
      //   }
      //   return -1;
      // },
      // sortDirections: ["ascend"],
      width: "35%",
      align: "center",
    },
    {
      title: " Actions",
      dataIndex: "hanhDong",
      render: (_, film) => {
        return (
          <Fragment>
            <div className="text-center">
              <NavLink
                key={1}
                className="mr-5 text-2xl"
                to={`/admin/quan-li-phim/edit/${film.maPhim}`}
              >
                <button className="text-blue-400 ">
                  <i className="fa-thin fa-pen-to-square"></i>
                </button>
              </NavLink>
              <span
                style={{ cursor: "pointer" }}
                key={2}
                className="text-2xl mr-5"
                onClick={() => handleDeleteFilm(film.maPhim)}
              >
                <button className="text-red-600">
                  <i className="fa-thin fa-trash"></i>
                </button>
              </span>
              <NavLink
                key={3}
                className=" text-2xl"
                to={`/admin/quan-li-phim/showtime/${film.maPhim}/${film.tenPhim}`}
                onClick={() => {
                  localStorage.setItem("filmParams", JSON.stringify(film));
                }}
              >
                <button className="text-orange-400">
                  <CalendarOutlined />
                </button>
              </NavLink>
            </div>
          </Fragment>
        );
      },

      width: "15%",
      align: "center",
    },
  ];
  const data = arrMovie;
  const onChange = (pagination, filters, sorter, extra) => {};
  return (
    <div>
      <h3 className="text-4xl mb-5">Quản lý phim</h3>
      <NavLink className="mb-5 text-2xl text-green-600" to="/admin/them-phim">
        Add movie
        <VideoCameraAddOutlined className="ml-3" />
      </NavLink>
      <br />
      <Search
        className="mb-5 mt-5 custom-search-input w-1/2"
        placeholder="Tìm kiếm phim"
        allowClear
        size="large"
        onSearch={onSearch}
      />
      <Table
        className="text-center"
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={"maPhim"}
      />
    </div>
  );
};

export default MovieManager;
