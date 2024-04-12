import React, { useContext } from "react";
import Header from "../../layout/Header/Header";
import Banner from "../../layout/Banner/Banner";
import ListMovie from "../../layout/ListMovie/ListMovie";
import LichChieuCumRap from "../../layout/LichChieuCumRap/LichChieuCumRap";
import { NotifyContext } from "../../template/UserTemplate/UserTemplate";
import Xemthem from"../../layout/Xemthem/Xemthem";
import Footer from"../../layout/Footer/Footer";
import Application from "../../layout/Application/Application"
import ScrollToTopButton from "../../layout/ScrollToTopButton/ScrollToTopButton";



const HomePage = () => {
  // const notify = useContext(NotifyContext);
  return (
    <div>
      {/* header  */}
      <Header />
   
      {/* banner  */}
      <Banner />
      {/* list movie  */}
      <div className="container">
        <ListMovie />
        <LichChieuCumRap  />
      </div>
      <div className=" m-12">
        <Xemthem/>
      </div>
      <div >
        <Application />
      </div>
      {/* footer */}
      <Footer />
      <ScrollToTopButton/>
    </div>
  );
};

export default HomePage;
