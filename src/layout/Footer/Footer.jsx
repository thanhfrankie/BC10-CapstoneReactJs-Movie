import React, { useState, useEffect } from "react";
import { quanLyRapServ } from "../../services/quanLyRap";
import { Footer } from "flowbite-react";
import logo from "../../assets/img/logofooter.png"
import logo2 from "../../assets/img/logobct.png"
import "./Footer.css";

import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const customTheme: CustomFlowbiteTheme = {
  root: {
    base: "w-full bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
    container: "w-full p-6",
    bgDark: "bg-gray-800",
  },
  groupLink: {
    base: "flex flex-wrap text-sm text-gray-500 dark:text-white",
    link: {
      base: "me-4 last:mr-0 md:mr-6",
      href: "hover:underline",
    },
    col: "flex-col space-y-4",
  },
  icon: {
    base: "text-gray-500 dark:hover:text-white",
    size: "h-5 w-5",
  },
  title: {
    base: "mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white",
  },
  divider: {
    base: "my-6 w-full border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8",
  },
  copyright: {
    base: "text-sm text-gray-500 dark:text-gray-400 sm:text-center",
    href: "ml-1 hover:underline",
    span: "ml-1",
  },
  brand: {
    base: "mb-4 flex items-center sm:mb-0",
    img: "mr-3 h-8",
    span: "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white",
  },
};

const Pooter = () => {
    const [logos, setLogos] = useState([]);
  
    useEffect(() => {
      // Gọi API để lấy thông tin về tất cả các logo
      quanLyRapServ.layThongTinHeThongRap()
      
        .then(response => {
          const data = response.data;
          if (data?.content) {
            // Cập nhật state với mảng chứa tất cả các logo
            setLogos(data.content);
          }
          
        })
        .catch(error => {
          console.error("Error ", error);
        });
    }, []);
  
    return (
      <Footer className="no-borderRadiusImportant" container theme={{ theme: customTheme }}>
        <div className="w-full no-borderRadiusImportant">
          <div className="grid w-full justify-around sm:flex sm:justify-around md:flex md:grid-cols-1">
            <div className="grid grid-cols-4 gap-8 sm:mt-6 sm:grid-cols-4 sm:gap-6">
              <div>
                <Footer.Title title="tix" style={{ fontSize: "18px", color: "GrayText" }} />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">FAQ</Footer.Link>
                  <Footer.Link href="#">Brand Guidelines</Footer.Link>
                  <Footer.Link href="#">Thỏa thuận sử dụng</Footer.Link>
                  <Footer.Link href="#">Chính sách bảo mật</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Đối tác" style={{ fontSize: "18px", color: "GrayText" }} />
                <div className="grid grid-cols-2 " >
                  
                  {/* Hiển thị tất cả các logo */}
                  {logos.map((logo, index) => (
                    <div className="jss hover:bg-zinc-100 justify-center items-center  " key={index}><img src={logo.logo}   alt="Đối tác" /></div>
                  
                  ))}
                  
                </div>
              </div>
              <div>
                <Footer.Title title="mobile app" style={{ fontSize: "18px", color: "GrayText" }} />
                <Footer.LinkGroup   >
                  <Footer.Link   href="#" ><i style={{fontSize:"30px"}}  class="fa-brands fa-apple  opacity-80 hover:opacity-100"></i></Footer.Link>
                  <Footer.Link  href="#"><i style={{fontSize:"30px"}}  class="fa-brands fa-android opacity-80 hover:opacity-100"></i></Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div >
              <Footer.Title title="social" style={{ fontSize: "18px", color: "GrayText" }} />
              <Footer.LinkGroup  className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center" >
              <Footer.Icon href="https://www.facebook.com/"  icon={BsFacebook} />
              <Footer.Icon href="https://www.instagram.com/" icon={BsInstagram} />
              <Footer.Icon href="https://twitter.com/" icon={BsTwitter} />
              <Footer.Icon href="https://github.com/" icon={BsGithub} />
              <Footer.Icon href="https://dribbble.com/" icon={BsDribbble} />
              </Footer.LinkGroup>
            </div>
            </div>
          </div>
          <Footer.Divider />
          <div className=" container w-full sm:flex sm:items-center sm:justify-around">
            <div>
           <a href="#" className="flex items-center">
            <img src={logo} className="mr-3 w-full sm:h-9 " alt="" />
           </a>
           </div>
           <div style={{color:"white"}}>
           <p>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
           <p>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</p>
           <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
           <p>đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.</p>
           <p>Số Điện Thoại (Hotline): 1900 545 436</p>
           </div>
           <div>
            <img style={{width:"120px",height:"50px"}} src={logo2} alt="" />
           </div>
          </div>
          
        </div>
      </Footer>
    );
  };
  
  export default Pooter;
