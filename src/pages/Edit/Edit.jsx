import React, { useContext, useEffect, useState } from "react";
import InputCustom from "../../components/Input/InputCustom";
import { DatePicker, Switch, Rate, Button } from "antd";
import { useFormik } from "formik";
import { quanLyPhimServ } from "../../services/quanLyPhim";
import * as Yup from "yup";
import Lottie from "react-lottie";
import * as addMovieAnimation from "./../../assets/animation/addMovie.json";
import "./../AddMovie/addmovie.scss";
import { NotifyContext } from "../../template/AdminTemplate/AdminTemplate";
import { useNavigate } from "react-router-dom";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const Edit = (props) => {
  const [arrInfo, setArrInfo] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false); // Cờ để theo dõi xem dữ liệu đã được tải hay chưa
  const { pathname } = window.location;
  const id = pathname.match(/\d+$/)[0]; // Lấy dãy số cuối cùng trong URL
  const [imageUrl, setImageUrl] = useState(arrInfo?.hinhAnh || "");
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    quanLyPhimServ
      .getInfoFilm(id)
      .then((res) => {
        console.log(res);
        setArrInfo(res.data.content);
        setDataLoaded(true); // Đặt cờ thành true khi dữ liệu được tải
        const formattedDate = dayjs(res.data.content.ngayKhoiChieu).format(
          "DD-MM-YYYY"
        );
        if (res.data.content.hinhAnh) {
          setImageUrl(res.data.content.hinhAnh);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  useEffect(() => {
    if (formData) {
      quanLyPhimServ
        .updateFilmUpload(formData)
        .then((res) => {
          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [formData]);
  const navigate = useNavigate();
  const notify = useContext(NotifyContext);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: addMovieAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const disableDate = (current) => {
    const today = dayjs();
    return current && current < today;
  };
  const [image, setImage] = useState();
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    setFieldValue,
    resetForm,
    errors,
    touched,
  } = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: arrInfo?.maPhim,
      tenPhim: arrInfo?.tenPhim || "",
      trailer: arrInfo?.trailer || "",
      moTa: arrInfo?.moTa || "",
      ngayKhoiChieu: arrInfo?.ngayKhoiChieu
        ? dayjs(arrInfo?.ngayKhoiChieu).format("DD-MM-YYYY")
        : "", // Định dạng lại ngày khi gửi vào initialValues
      sapChieu: arrInfo?.sapChieu || true,
      dangChieu: arrInfo?.dangChieu || true,
      hot: arrInfo?.hot || true,
      danhGia: arrInfo?.danhGia || 0,
      hinhAnh: arrInfo?.hinhAnh || null,
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
        // thực hiện tạo một đối tượng từ lớp đối tượng FormData
        let formData = new FormData();
        // sử dụng for in để duyệt object qua từng key và lấy dữ liệu truyền vào formdata
        for (let key in values) {
          if (key == "hinhAnh") {
            formData.append("File", values[key]);
          } else {
            if (values.hinhAnh !== null) {
              formData.append(key, values[key]);
            }
          }
        }
        setFormData(formData);

        const res = await quanLyPhimServ.updateFilmUpload(formData);
        notify("thêm phim thành công! chuyển hướng về trang quản lý phim");
        resetForm();
        setTimeout(() => {
          navigate("/admin/quan-li-phim");
        }, 1000);
        // console.log(res);
      } catch (error) {
        console.log(error);
        // notify(error.respone.data.content);
      }
    },
    validationSchema: Yup.object({
      tenPhim: Yup.string().required("Vui lòng không bỏ trống"),
      trailer: Yup.string().required("Vui lòng không bỏ trống"),
      moTa: Yup.string().required("Vui lòng không bỏ trống"),
      ngayKhoiChieu: Yup.string().required("Vui lòng không bỏ trống"),
    }),
  });
  if (!dataLoaded) {
    return (
      <div>
        <Loading3QuartersOutlined />
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-4xl mb-5">Edit phim</h3>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <div className="w-1/2 mr-5 mb-5">
            <InputCustom
              name="tenPhim"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.tenPhim}
              error={errors.tenPhim}
              touched={touched.tenPhim}
              label="Tên phim"
              placeholder="Nhập tên phim"
            />
          </div>
          <div className="w-1/2">
            <InputCustom
              name="trailer"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.trailer}
              error={errors.trailer}
              touched={touched.trailer}
              label="Trailer"
              placeholder="Nhập trailer"
            />
          </div>
        </div>
        <InputCustom
          name="moTa"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.moTa}
          error={errors.moTa}
          touched={touched.moTa}
          label="Mô tả"
          placeholder="Nhập mô tả"
        />
        <div className="flex justify-center mb-5 mt-5 text-center">
          <div className="w-2/6 my-auto">
            <label className="mr-2 label" htmlFor="">
              Nhập ngày chiếu
            </label>

            <DatePicker
              name="ngayKhoiChieu"
              onBlur={handleBlur}
              value={
                values.ngayKhoiChieu
                  ? dayjs(values.ngayKhoiChieu, "DD-MM-YYYY")
                  : null
              }
              // error={errors.ngayKhoiChieu}
              // touched={touched.ngayKhoiChieu}
              disabledDate={disableDate}
              onChange={(datejs, dateString) => {
                setFieldValue("ngayKhoiChieu", dateString);
              }}
              format="DD-MM-YYYY"
            />
            {/* {touched.ngayKhoiChieu && errors.ngayKhoiChieu ? (
              <p className="text-red-500 text-sm">{errors.ngayKhoiChieu}</p>
            ) : null} */}
          </div>
          <div className="w-1/6 my-auto">
            <label className="mr-2 label" htmlFor="">
              Đang chiếu
            </label>

            <Switch
              defaultChecked
              onChange={(checked, event) => {
                console.log(checked);
                setFieldValue("dangChieu", checked);
              }}
              value={values.dangChieu}
            />
          </div>
          <div className="w-1/6 my-auto">
            <label className="mr-2 label" htmlFor="">
              Sắp chiếu
            </label>
            <Switch
              defaultChecked
              onChange={(checked, event) => {
                console.log(checked);
                setFieldValue("sapChieu", checked);
              }}
              value={values.sapChieu}
            />
          </div>
          <div className="w-1/6 my-auto">
            <label className="mr-2 label" htmlFor="">
              Hot
            </label>
            <Switch
              defaultChecked
              onChange={(checked, event) => {
                console.log(checked);
                setFieldValue("hot", checked);
              }}
              value={values.hot}
            />
          </div>
          <div className="w-1/6 my-auto">
            <label className="mr-2 label" htmlFor="">
              Đánh giá
            </label>
            <Rate
              onChange={(value) => {
                // console.log(value * 2);
                setFieldValue("danhGia", value * 2);
              }}
              value={values.danhGia / 2}
              allowHalf
            />
            {/* <p>{values.danhGia}</p> */}
          </div>
        </div>

        <div className="flex mb-5">
          <div className="take-pic flex-col w-5/12">
            <label htmlFor="">Hình ảnh</label>
            <br />
            {values.hinhAnh && (
              <div className="relative">
                <img
                  key={Math.random()}
                  className="w-3/4"
                  src={imageUrl}
                  alt=""
                />
                <button
                  className="absolute top-0 right-0 bg-red-600 p-2 rounded-md text-white"
                  onClick={() => {
                    setImage(null);
                    setFieldValue("hinhAnh", "");
                  }}
                >
                  Xóa hình ảnh
                </button>
              </div>
            )}
            {!values.hinhAnh && (
              <input
                className="mb-5"
                onChange={(event) => {
                  let urlImage = URL.createObjectURL(event.target.files[0]);
                  console.log(urlImage);
                  setImageUrl(URL.createObjectURL(event.target.files[0]));
                  setFieldValue("hinhAnh", event.target.files[0]);
                }}
                type="file"
              />
            )}
          </div>
          <div className="animation_addMovie my-auto w-7/12">
            <Lottie options={defaultOptions} height={400} width={600} />
          </div>
        </div>
        <div style={{ display: "grid", placeItems: "center" }}>
          <button
            // onClick={() => {
            //   notify("Thêm phim thành công!");
            // }}
            className="box"
            type="submit"
          >
            Cập nhật
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
