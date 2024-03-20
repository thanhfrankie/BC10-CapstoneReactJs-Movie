import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
export const NotifyContext = React.createContext(null);
const UserTemplate = () => {
  const [closeTime, setCloseTime] = useState(2000);
  const renderNotify = (notify) => {
    return toast(notify);
  };
  const handleCloseTime = (time) => {
    setCloseTime(time);
  };
  return (
    <NotifyContext.Provider
      // value={{
      //   renderNotify,
      //   handleCloseTime,
      // }}
      value={renderNotify}
    >
      <Outlet />
      <ToastContainer autoClose={closeTime} theme="dark" />
    </NotifyContext.Provider>
  );
};

export default UserTemplate;
