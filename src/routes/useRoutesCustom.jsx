import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import SignIn from "../pages/SignIn/SignIn";
import UserTemplate from "../template/UserTemplate/UserTemplate";
import AdminTemplate from "../template/AdminTemplate/AdminTemplate";
import MovieManager from "../pages/MovieManager/MovieManager";
import AddMovie from "../pages/AddMovie/AddMovie";
import Edit from "../pages/Edit/Edit";
import ShowTime from "../pages/ShowTime/ShowTime";
import UserManagerment from "../pages/UserManagerment/UserManagerment";
import AddUser from "../pages/UserManagerment/AddUser";
import EditUser from "../pages/UserManagerment/EditUser";
import SignUp from "../pages/SignUp/SignUp";
import Purchase from "../layout/Purchase/Purchase";
import LichSuDatVe from "../components/LichSuDatVe/LichSuDatVe";
import Detail from "../pages/Detail/Detail";
const useRoutesCustom = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <UserTemplate />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "sign-in",
          element: <SignIn />,
        },
        {
          path: "sign-up",
          element: <SignUp />,
        },
        {
          path: "ticket-room/:maLichChieu",
          element: <Purchase />,
        },
        {
          path: "account",
          element: <LichSuDatVe />,
        },
        {
          path: "detail/:id",
          element: <Detail />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminTemplate />,
      children: [
        {
          path: "/admin/quan-li-phim",
          element: <MovieManager />,
        },
        {
          // path: "them-phim",
          element: <MovieManager />,
          index: true,
        },
        {
          path: "them-phim",
          element: <AddMovie />,
        },
        {
          path: "/admin/quan-li-phim/edit/:id",
          element: <Edit />,
        },
        {
          path: "/admin/quan-li-phim/showtime/:id/:tenphim",
          element: <ShowTime />,
        },
        {
          path: "/admin/quan-li-nguoi-dung",
          element: <UserManagerment />,
        },
        {
          path: "/admin/quan-li-nguoi-dung/them-nguoi-dung",
          element: <AddUser />,
        },
        {
          path: `/admin/quan-li-nguoi-dung/edit-nguoi-dung/:taiKhoan`,
          element: <EditUser />,
        },
      ],
    },
  ]);
  return routes;
};

export default useRoutesCustom;
