import React, { useContext } from "react";
import InputCustom from "../../components/Input/InputCustom";
import * as registerAnimation from "./../../assets/animation/register.json";
import Lottie from "react-lottie";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import { quanLyNguoiDungServ } from "../../services/quanLyNguoiDung";
import { NotifyContext } from "../../template/UserTemplate/UserTemplate";
import { useNavigate } from "react-router-dom";
import { saveLocalStorage, validationMessage } from "../../utils/util";
const SignUp = () => {
  const notify = useContext(NotifyContext);
  const navigate = useNavigate();
  const { handleChange, handleBlur, values, errors, touched, handleSubmit } =
    useFormik({
      initialValues: {
        hoTen: "",
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
      },
      onSubmit: async (values) => {
        console.log(values);
        // đưa dữ liệu lên backend xử lí và hiển thị thông báo cho người dùng
        try {
          // gửi dữ liệu lên backend
          const res = await quanLyNguoiDungServ.dangKy(values);
          console.log(res);
          notify("Đăng ký thành công, vui lòng đăng nhập để tiếp tục");
          setTimeout(() => {
            navigate("/sign-in");
          }, 1000);
        } catch (error) {
          console.log(error);
          notify(error.response.data.content);
        }
      },
      validationSchema: Yup.object({
        hoTen: Yup.string().required("Vui lòng nhập họ và tên"),
        taiKhoan: Yup.string()
          .matches(/^[^\W_]+$/, "Tài khoản không thể chứa ký tự đặc biệt")
          .required("Vui lòng nhập tài khoản")
          .min(6, "Vui lòng nhập tối thiểu 6 ký tự")
          .max(16, "vui lòng nhập tối đa 16 ký tự"),
        matKhau: Yup.string()
          .required("Vui lòng nhập mật khẩu")
          .min(6, "Mật khẩu yêu cầu tối thiểu 6 ký tự")
          .max(15, "Mật khẩu chỉ gồm tối đa 15 ký tự")
          .matches(
            /.*[^\w\s].*/,
            "Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt"
          ),

        email: Yup.string()
          .email("Vui lòng kiểm tra định dạng email")
          .required("Vui lòng nhập email"),
        soDt: Yup.string()
          .matches(
            /^(0[2|3|5|7|8|9])+([0-9]{8,10})$/,
            "Vui lòng nhập đúng số điện thoại"
          )
          .required("Vui lòng nhập số điện thoại"),
      }),
    });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: registerAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="form_signIn w-5/12 flex items-center justify-center flex-col">
      <div className="p-10 border border-gray-400 rounded-md space-y-5">
        <h1>Đăng ký thành viên</h1>
        <form onSubmit={handleSubmit} className="space-y-5 spa">
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
            placeholder="Tài khoản *"
            id="taiKhoan"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.taiKhoan}
            touched={touched.taiKhoan}
            name="taiKhoan"
            value={values.taiKhoan}
          />
          <div className="border-red-50">
            <InputCustom
              placeholder="Mật khẩu *"
              id="matKhau"
              onChange={handleChange}
              type="password"
              onBlur={handleBlur}
              error={errors.matKhau}
              touched={touched.matKhau}
              name="matKhau"
              value={values.matKhau}
              className="relative"
            />
            <button type="button" className="absolute">
              <i class="fa-solid fa-eye"></i>
            </button>
            <button type="button" className="absolute">
              <i class="fa-solid fa-eye-slash"></i>
            </button>
          </div>

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
          <div>
            <button
              type="submit"
              className="py-2 px-5 bg-black text-white rounded-md w-full mt-2"
            >
              Đăng ký
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
