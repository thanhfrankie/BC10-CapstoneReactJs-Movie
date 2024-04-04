import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { useSelector } from "react-redux";
import useResponsive from "../../hooks/useResponsive";
export const NotifyContext = React.createContext(null);
const UserTemplate = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  console.log(isMobile);
  console.log(isTablet);
  console.log(isDesktop);
  const { isLoading } = useSelector((state) => state.loadingSlice);
  const [closeTime, setCloseTime] = useState(2000);
  const renderNotify = (notify) => {
    return toast(notify);
  };
  const handleCloseTime = (time) => {
    setCloseTime(time);
  };
  if (isDesktop) {
    return (
      <NotifyContext.Provider
        // value={{
        //   renderNotify,
        //   handleCloseTime,
        // }}
        value={renderNotify}
      >
        {isLoading ? <Loading /> : null}
        <Outlet />
        <ToastContainer
          position="top-center"
          autoClose={closeTime}
          theme="dark"
        />
      </NotifyContext.Provider>
    );
  } else if (isMobile) {
    return <div>Tôi đang ở mobile</div>;
  } else {
    return <div>Tôi đang ở tablet</div>;
  }
};

export default UserTemplate;
