import React, { useContext, useEffect, useState } from "react";
import InputCustom from "../../components/Input/InputCustom";
import * as registerAnimation from "./../../assets/animation/register.json";
import Lottie from "react-lottie";
import { useFormik } from "formik";
import * as Yup from "yup";
import { quanLyNguoiDungServ } from "../../services/quanLyNguoiDung";
import { NotifyContext } from "../../template/AdminTemplate/AdminTemplate";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Form, Select } from "antd";

const EditUser = () => {
  const { taiKhoan } = useParams();
  const notify = useContext(NotifyContext);
  const navigate = useNavigate();

  const {
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      hoTen: "",
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maLoai: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      // đưa dữ liệu lên backend xử lí và hiển thị thông báo cho người dùng
      try {
        const data = {
          ...values,
          maNhom: "GP01",
          maLoaiNguoiDung:
            values.maLoai === "QuanTri" ? "QuanTri" : "KhachHang",
        };
        // gửi dữ liệu lên backend
        const res = await quanLyNguoiDungServ.updateUser(data);
        console.log(res);
        notify(
          "Cập nhật thông tin user thành công, trở về trang quản lí người dùng"
        );
        setTimeout(() => {
          navigate("/admin/quan-li-nguoi-dung");
        }, 1000);
      } catch (error) {
        setTimeout(() => {
          notify(error.response.data.content);
        }, 1000);
        // console.log(error.response.data.content);
      }
    },
    validationSchema: Yup.object({
      hoTen: Yup.string().required("Vui lòng không bỏ trống"),
      taiKhoan: Yup.string()
        .matches(/^[^\W_]+$/, "Tài khoản không thể chứa ký tự đặc biệt")
        .required("Vui lòng không bỏ trống"),
      //   .min(6, "Vui lòng nhập tối thiểu 6 ký tự")
      //   .max(16, "vui lòng nhập tối đa 16 ký tự"),
      matKhau: Yup.string().required("Vui lòng không bỏ trống"),
      //   .min(6, "Mật khẩu yêu cầu tối thiểu 6 ký tự")
      //   .max(15, "Mật khẩu chỉ gồm tối đa 15 ký tự")
      //   .matches(
      //     /.*[^\w\s].*/,
      //     "Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt"
      //   ),

      email: Yup.string()
        .email("Vui lòng kiểm tra định dạng email")
        .required("Vui lòng nhập email"),
      soDt: Yup.string()
        .matches(
          /^(0[2|3|5|7|8|9])+([0-9]{8,10})$/,
          "Vui lòng nhập đúng số điện thoại"
        )
        .required("Vui lòng nhập số điện thoại"),
      maLoai: Yup.string().required("Vui lòng lựa chọn giá trị"),
    }),
  });
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await quanLyNguoiDungServ.getInfoUser(taiKhoan);
        const userData = res.data.content[0];
        if (userData) {
          setFieldValue("hoTen", userData.hoTen);
          setFieldValue("taiKhoan", userData.taiKhoan);
          setFieldValue("matKhau", userData.matKhau);
          setFieldValue("email", userData.email);
          setFieldValue("soDt", userData.soDT);
          setFieldValue("maLoai", userData.maLoaiNguoiDung);
        }
      } catch (err) {
        console.log(err.response.data.content);
      }
    };
    fetchUser();
  }, [taiKhoan, setFieldValue]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: registerAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="container ">
      <h3 className=" text-black text-3xl">Edit User</h3>
      <div className="h-screen flex">
        <div className="animation_signIn w-7/12 flex items-center justify-center">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
        <div className="form_signIn w-5/12 flex items-center justify-center flex-col">
          <div className="w-full p-10 border border-gray-400 rounded-md space-y-5">
            <form onSubmit={handleSubmit} className="space-y-5">
              <InputCustom
                placeholder="Tài khoản *"
                id="taiKhoan"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.taiKhoan}
                touched={touched.taiKhoan}
                name="taiKhoan"
                value={values.taiKhoan}
                readOnly
              />
              <InputCustom
                placeholder="Mật khẩu *"
                id="matKhau"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.matKhau}
                touched={touched.matKhau}
                name="matKhau"
                value={values.matKhau}
                // className="pl-10 pr-16"
              />
              <InputCustom
                placeholder="Họ tên *"
                id="hoTen"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.hoTen}
                touched={touched.hoTen}
                name="hoTen"
                value={values.hoTen}
              />
              <InputCustom
                placeholder="Email *"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                error={errors.email}
                touched={touched.email}
                name="email"
                value={values.email}
              />

              <InputCustom
                placeholder="Số điện thoại *"
                id="soDt"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.soDt}
                touched={touched.soDt}
                name="soDt"
                value={values.soDt}
              />
              <Form.Item label="Chọn loại người dùng">
                <Select
                  id="maLoai"
                  name="maLoai"
                  onChange={(value) => setFieldValue("maLoai", value)}
                  onBlur={handleBlur}
                  style={{
                    color: values.maLoai === "QuanTri" ? "red" : "green",
                  }}
                  value={values.maLoai}
                >
                  <Select.Option style={{ color: "red" }} value="QuanTri">
                    Quản trị
                  </Select.Option>
                  <Select.Option style={{ color: "green" }} value="KhachHang">
                    Khách hàng
                  </Select.Option>
                </Select>
                {errors.maLoai && touched.maLoai ? (
                  <p className="text-red-500 text-sm">{errors.maLoai}</p>
                ) : null}
              </Form.Item>
              <div>
                <button
                  type="submit"
                  className="py-2 px-5 bg-green-500 text-white rounded-md w-full mt-2 text-lg"
                >
                  Cập nhật User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
