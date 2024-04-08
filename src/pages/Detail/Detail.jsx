import React, { useEffect, useState } from "react";
import { Radio, Space, Tabs } from "antd";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "./circle.css";
import { NavLink } from "react-router-dom";
import { quanLyRapServ } from "../../services/quanLyRap";
import "./Detail.scss";
import DetailRap from "./DetailRap";

export default function Detail() {
  const [tabPosition, setTabPosition] = useState("left");
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  const [arrCumRap, setArrCumRap] = useState([]);
  useEffect(() => {
    quanLyRapServ
      .getAllThongTinCumRap()
      .then((res) => {
        console.log(res);
        setArrCumRap(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div >
      <div>
        <Header />
      </div>
      <div
        style={{
          marginTop: "75px",
          backgroundColor: "rgb(10, 32, 41)",
          minHeight: "80vh",
        }}
      >
        <CustomCard
          style={{ minHeight: "80vh" , paddingTop:"100px"}}
          effectColor="rgb(10, 32, 41)" // required
          color="#fff" // default color is white
          blur={15} // default blur value is 10px
          borderRadius={0} // default border radius value is 10px
        >
          <div className=" container grid grid-cols-12">
            <div className=" col-span-6 col-start-2">
              <div className=" grid grid-cols-2">
                <img  style={{width:"150px", height:"250px" ,marginLeft:"100px"}}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPi3CILqcsUaJOEl6NurLl70BxOBZ7scPhUQ&s"
                  alt="img"
                />
                <div className= " pt-12">
                  <p>Tên Phim</p>
                  <p>Mô Tả</p>
                  <div className="mt-10">
                    <NavLink>
                      <button className="  group-hover:opacity-100 transition-opacity duration-300 w-30 px-5 py-2 bg-red-700 hover:bg-red-900 rounded text-white text-lg font-semibold ">
                        Mua Vé
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-span-4 col-start-10 ">
              <div className="c100 p50 big">
                <span>10</span>

                <div className="slice">
                  <div className="bar"></div>
                  <div cclassName="fill"></div>
                </div>
                <div
                  style={{
                    fontSize: "20px",
                    display: "inline-block",
                    color: "yellow",
                    textAlign: "center",
                    paddingLeft: "35px",
                  }}
                >
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-sharp fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 container">
            <div className="danh-sach   ">
              {/* tab lịch chiếu cụm rạp  */}
              <div className="cum-rap ">
                <Tabs
                  tabPosition="left"
                  style={{
                    height: 700,
                  }}
                  items={arrCumRap?.map((cumrap, index) => {
                    return {
                      label: (
                        <div className="img-content ">
                          <img
                            className="w-16 opacity-100 hover:opacity-70 "
                            src={cumrap.logo}
                          />
                          ,
                        </div>
                      ),
                      key: cumrap.maHeThongRap,
                      children: <DetailRap cumrap={cumrap.lstCumRap} />,
                    };
                  })}
                />
              </div>
            </div>
          </div>
        </CustomCard>
      </div>

      <Footer />
    </div>
  );
}
