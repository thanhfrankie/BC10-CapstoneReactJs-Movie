import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Select } from "antd";
import { DatePicker } from "antd";
import { InputNumber } from "antd";
import { quanLyRapServ } from "../../services/quanLyRap";
import { useFormik } from "formik";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import { NotifyContext } from "../../template/AdminTemplate/AdminTemplate";
import * as Yup from "yup";

const ShowTime = () => {
  const notify = useContext(NotifyContext);
  const { id, tenphim } = useParams();
  // console.log(tenphim);
  const formik = useFormik({
    initialValues: {
      maPhim: id,
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: "",
      heThongRap: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      try {
        const result = await quanLyRapServ.createShowTime(values);
        notify("Thêm lịch chiếu thành công");
      } catch (error) {
        console.log("error", error.respone?.data);
      }
    },
    validationSchema: Yup.object({
      ngayChieuGioChieu: Yup.string().required("Vui lòng không bỏ trống"),
      giaVe: Yup.string()
        .required("Vui lòng không bỏ trống")
        .min(75000)
        .max(150000),
      heThongRap: Yup.string().required("Vui lòng không bỏ trống"),
      cumRap: Yup.string().required("Vui lòng không bỏ trống"),
    }),
  });
  const [state, setStage] = useState({
    heThongRapChieu: [],
    cumRapChieu: [],
  });
  // console.log(state.heThongRapChieu);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let result = await quanLyRapServ.getInfoHeThongRap();
        setStage({ ...state, heThongRapChieu: result.data.content });
      } catch (error) {}
    };
    fetchData();
  }, []);

  const handleChangeHeThongRap = async (value) => {
    //! từ hệ thống rạp call API lấy thông tin rạp
    try {
      let result = await quanLyRapServ.getInfoCumRapHeThong(value);
      //! gán giá trị cụm rạp vào state.cumRap
      setStage({
        ...state,
        cumRapChieu: result.data.content,
      });
    } catch (error) {
      console.log("error", error.respone?.data);
    }
  };
  const handleChangeCumRap = (value) => {
    formik.setFieldValue("maRap", value);
  };
  const onOk = (values) => {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      dayjs(values).format("DD/MM/YYYY hh:mm:ss")
    );
    console.log("values", dayjs(values).format("DD/MM/YYYY hh:mm:ss"));
  };
  const onChangeDate = (values) => {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      dayjs(values).format("DD/MM/YYYY hh:mm:ss")
    );
    console.log("values", dayjs(values).format("DD/MM/YYYY hh:mm:ss"));
  };
  const onChangePrice = (values) => {
    formik.setFieldValue("giaVe", values);
  };

  let film = {};
  if (localStorage.getItem("filmParams")) {
    film = JSON.parse(localStorage.getItem("filmParams"));
  }
  // console.log(errors);
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onSubmitCapture={formik.handleSubmit}
    >
      <h3 className="text-2xl mb-5">Tạo lịch chiếu - {tenphim}</h3>
      <div className="flex">
        <img
          className="basis-2/6 mr-5"
          src={film.hinhAnh}
          alt="..."
          width={200}
          height={100}
        />
        <div className=" basis-4/6">
          <Form.Item label="Hệ thống rạp">
            <Select
              options={state.heThongRapChieu?.map((item, index) => ({
                label: item.maHeThongRap,
                value: item.maHeThongRap,
              }))}
              onChange={handleChangeHeThongRap}
              name="heThongRap"
              placeholder="Chọn hệ thống rạp"
              onBlur={formik.handleBlur}
            />
            {/* {formik.errors.heThongRap && formik.touched.heThongRap ? (
              <p className="text-red-500 text-sm">{formik.errors.heThongRap}</p>
            ) : null} */}
          </Form.Item>
          <Form.Item label="Cụm rạp">
            <Select
              options={state.cumRapChieu?.map((item, index) => ({
                label: item.tenCumRap,
                value: item.maCumRap,
              }))}
              onChange={handleChangeCumRap}
              placeholder="Chọn cụm rạp"
              name="cumRap"
              onBlur={formik.handleBlur}
            />
            {/* {formik.errors.cumRap && formik.touched.cumRap ? (
              <p className="text-red-500 text-sm">{formik.errors.cumRap}</p>
            ) : null} */}
          </Form.Item>
          <Form.Item label="Ngày giờ chiếu">
            <DatePicker
              format="DD/MM/YYYY hh:mm:ss"
              showTime
              name="ngayChieuGioChieu"
              onChange={onChangeDate}
              onOk={onOk}
              onBlur={formik.handleBlur}
            />
            {formik.errors.ngayChieuGioChieu &&
            formik.touched.ngayChieuGioChieu ? (
              <p className="text-red-500 text-sm">
                {formik.errors.ngayChieuGioChieu}
              </p>
            ) : null}
          </Form.Item>
          <Form.Item label="Giá vé">
            <InputNumber
              onBlur={formik.handleBlur}
              name="giaVe"
              onChange={onChangePrice}
            />
            {formik.errors.giaVe && formik.touched.giaVe ? (
              <p className="text-red-500 text-sm">{formik.errors.giaVe}</p>
            ) : null}
          </Form.Item>
          <Form.Item label="Chức năng">
            <Button htmlType="submit">Tạo lịch chiếu</Button>
          </Form.Item>
        </div>
      </div>
    </Form>
  );
};

export default ShowTime;
