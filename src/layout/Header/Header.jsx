import React, { useEffect, useState } from "react";
import logo from "./../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import { getLocalStorage } from "../../utils/util";
import { Link } from "react-scroll";




const Header = () => {



  
  
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userLocal = getLocalStorage("user");
  useEffect(() => {
    const checkLocalStorage = () => {
      return userLocal !== null;
    };
    // Kiểm tra và cập nhật trạng thái đăng nhập khi component được mount
    setIsLoggedIn(checkLocalStorage());
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };
  return (
    <header>
      <nav className="fixed top-0 left-0 z-20 w-full bg-white border-gray-200 px-4 lg:px-6 py-2.5 h-20 pt-4">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <NavLink to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="CyberSoft Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap ">
              CyberSoft Movie
            </span>
          </NavLink>
          <div className="flex items-center lg:order-2">
         
            {isLoggedIn ? (
              <div className="flex items-center justify-center">
                <p>{userLocal.hoTen}</p>
                <button
                  onClick={handleLogout}
                  className="text-gray-800 bg-slate-400 hover:bg-gray-500  hover:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 ml-2"
                >
                  Đăng xuất
                </button>
              </div>
            ) : (
              <div>
              <NavLink
                to="/sign-in"
                className="text-gray-800 bg-slate-400 hover:bg-gray-500  hover:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
              >
                Đăng nhập
              </NavLink>
              <NavLink
            to="/sign-up"
            className="text-gray-800 bg-slate-400 hover:bg-gray-500  hover:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
          >
            Đăng Ký
          </NavLink>
              </div>
              
            )  }
           
          </div>
          <div
           
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                 activeClass="active"
                 to="lichChieu"
                 spy={true}
                 smooth={true}
                 offset={-70}
                 duration={500}
                  className="block  py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-cyan-600 lg:p-0"
                  aria-current="page"
                >
                  Lịch Chiếu
                </Link>
              </li>
              <li>
                <Link
                 activeClass="active"
                 to="cumRap"
                 spy={true}
                 smooth={true}
                 offset={-70}
                 duration={500}
                  className="block  py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-cyan-600 lg:p-0"
                  aria-current="page"
                >
                  Cụm rạp
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="tinTuc"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block  py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-cyan-600 lg:p-0"
                  aria-current="page"
                >
                  Tin tức
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="ungDung"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block  py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-cyan-600 lg:p-0"
                  aria-current="page"
                >
                  Ứng dụng
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
