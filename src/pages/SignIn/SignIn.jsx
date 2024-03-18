import React from "react";
import InputCustom from "../../components/Input/InputCustom";
import * as registerAnimation from "./../../assets/animation/register.json";
import Lottie from "react-lottie";
import { useFormik } from "formik";
import * as Yup from "yup";
const SignIn = () => {
  const { handleChange, handleBlur, values, errors, touched, handleSubmit } =
    useFormik({
      initialValues: {
        taiKhoan: "",
        matKhau: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: Yup.object({
        taiKhoan: Yup.string().required("Vui lòng nhập mật khẩu"),
        matKhau: Yup.string().required("Vui lòng nhập mật khẩu"),
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
    <div className="h-screen flex">
      <div className="animation_signIn w-7/12 flex items-center justify-center">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      <div className="form_signIn w-5/12 flex items-center justify-center flex-col">
        <div className="p-10 border border-gray-400 rounded-md space-y-5">
          <h1>Đăng nhập vào movie CyberSoft</h1>
          <form className="space-y-5">
            <InputCustom
              placeholder="Vui lòng nhập tài khoản"
              id="taiKhoan"
              label="Tài khoản"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.taiKhoan}
              touched={touched.taiKhoan}
              name="taiKhoan"
            />
            <InputCustom
              placeholder="Vui lòng nhập mật khẩu"
              id="matKhau"
              label="Mật khẩu"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.matKhau}
              touched={touched.matKhau}
              name="matKhau"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
