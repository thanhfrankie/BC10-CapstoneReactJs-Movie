import React, { useContext } from "react";
import Header from "../../layout/Header/Header";
import Banner from "../../layout/Banner/Banner";
import ListMovie from "../../layout/ListMovie/ListMovie";
import LichChieuCumRap from "../../layout/LichChieuCumRap/LichChieuCumRap";
import { NotifyContext } from "../../template/UserTemplate/UserTemplate";
import Xemthem from "../../layout/Xemthem/Xemthem";
import Footer from "../../layout/Footer/Footer";
import Application from "../../layout/Application/Application";
import ScrollToTopButton from "../../layout/ScrollToTopButton/ScrollToTopButton";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HomePage = () => {

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Di chuyển đến đầu trang nếu không có hash
    }
  }, [hash]);
  // const notify = useContext(NotifyContext);

  return (
    <div>
      {/* header  */}
      <Header />
      <a href="/#lichChieu"></a>
      <a href="/#cumRap"></a>
      <a href="/#tinTuc"></a>
      <a href="/#ungDung"></a>

      {/* banner  */}
      <Banner />
      {/* list movie  */}
      <div className="container">
        <ListMovie />
        <LichChieuCumRap />
      </div>
      <div className=" m-12">
        <Xemthem />
      </div>
      <div>
        <Application />
      </div>
      {/* footer */}
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default HomePage;
