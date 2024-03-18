import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import SignIn from "../pages/SignIn/SignIn";
const useRoutesCustom = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "sign-in",
      element: <SignIn />,
    },
  ]);
  return routes;
};

export default useRoutesCustom;
