import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./Application.css";
import banner1 from "../../assets/img/banner1.png";
import banner2 from "../../assets/img/banner2.png";
import banner3 from "../../assets/img/banner3.png";
import banner4 from "../../assets/img/banner4.png";

const Application = () => {
  const [index, setIndex] = useState(0);
  const images = [banner1, banner2, banner3, banner4];

  const springProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000 },
    reset: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="appliMovie w-full">
      <div className="appTitle w-full container grid grid-cols-2 justify-center items-center">
        <div className="col-span-1 flex flex-col justify-center items-center">
          <h1>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h1>
          <p>
            Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
            đổi quà hấp dẫn.
          </p>
          <button className="group-hover:opacity-100 transition-opacity duration-300 px-10 py-5 bg-red-700 hover:bg-red-900 rounded text-white text-lg font-semibold">
            App Miễn Phí Tải Về Ngay
          </button>
          <p>TIX có hai phiên bản IOS & Android</p>
        </div>
        <div className="col-span-1">
          <animated.img
            className="imgslider"
            src={images[index]}
            style={springProps}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Application;
