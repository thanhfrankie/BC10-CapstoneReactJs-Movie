import React, { useContext } from "react";
import Header from "../../layout/Header/Header";
import Banner from "../../layout/Banner/Banner";
import ListMovie from "../../layout/ListMovie/ListMovie";
import LichChieuCumRap from "../../layout/LichChieuCumRap/LichChieuCumRap";
import { NotifyContext } from "../../template/UserTemplate/UserTemplate";
import Xemthem from"../../layout/Xemthem/Xemthem";
import Footer from"../../layout/Footer/Footer";
import Application from "../../layout/Application/Application"
const HomePage = () => {
  // const notify = useContext(NotifyContext);
  return (
    <div>
      {/* header  */}
      <Header />
      {/* <button
        onClick={() => {
          notify("Tui test thôi");
        }}
      >
        Bấm thử nè
      </button> */}
      {/* banner  */}
      <Banner />
      {/* list movie  */}
      <div className="container">
        <ListMovie className="container"/>
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
    </div>
  );
};

export default HomePage;
