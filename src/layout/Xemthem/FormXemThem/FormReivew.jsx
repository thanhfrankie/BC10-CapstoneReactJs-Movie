import React from "react";
import "./FormDienAnh.css";
const FormReivew = () => {
  return (
    <div className="wrapper container">
      {/* Hàng thứ nhất */}
      <div className="grid grid-cols-2 gap-5 ">
        <div className="col">
          <div className="top-content ">
            <img
              className="w-full"
              src="https://s3img.vcdn.vn/123phim/2020/03/review-nang-3-loi-hua-cua-cha-cau-chuyen-tinh-than-cam-dong-cua-kha-nhu-va-kieu-minh-tuan-15834049872311.jpg"
              alt="Image"
            />
          </div>
          <div className="bottom-content">
            <a href="#">
              [Review] Nắng 3: Lời Hứa Của Cha - Câu chuyện tình thân cảm động
              của Khả Như và Kiều Minh Tuấn
            </a>
            <p>
              Như hai phần phim trước, Nắng 3 tiếp tục mang đến câu chuyện tình
              cha, mẹ - con đầy nước mắt của bộ ba nhân vật chính.
            </p>
          </div>
        </div>
        <div className="col">
          <div className="top-content">
            <img
              className="w-full"
              src="https://s3img.vcdn.vn/123phim/2020/03/review-onward-khi-phep-thuat-manh-me-nhat-chinh-la-tinh-than-15832047938817.jpg"
              alt="Image"
            />
          </div>
          <div className="bottom-content">
            <a href="">
              [Review] Onward - Khi phép thuật mạnh mẽ nhất chính là tình thân
            </a>
            <p>
              Tác phẩm mới nhất của Pixar tiếp tục là câu chuyện hài hước và cảm
              xúc về tình cảm gia đình.
            </p>
          </div>
        </div>
      </div>
      <br />
      {/* Hàng thứ hai */}
      <div className="grid grid-cols-3 gap-5 ">
        <div className="col">
          <div className="top-content">
            <img
              src="https://s3img.vcdn.vn/123phim/2020/02/review-ke-vo-hinh-con-gi-dang-so-hon-ke-giet-nguoi-benh-hoan-vo-hinh-15828835353362.jpg"
              alt="Image"
            />
          </div>
          <div className="bottom-content">
            <a href="#">
              [Review] Kẻ Vô Hình - Còn gì đáng sợ hơn kẻ giết người bệnh hoạn
              vô hình?
            </a>
            <p className="">
              Phiên bản hiện đại của The Invisible Man là một trong những phim
              kinh dị xuất sắc nhất năm nay.
            </p>
          </div>
        </div>
        <div className="col">
          <div className="top-content">
            <img
              src="https://s3img.vcdn.vn/123phim/2020/02/review-cau-be-ma-2-ban-trai-cua-be-beo-la-day-chu-dau-xa-15823608583110.jpg"
              alt="Image"
            />
          </div>
          <div className="bottom-content">
            <a href="#">
              [Review] Cậu Bé Ma 2 - Bạn trai của 'bé Beo' là đây chứ đâu xa
            </a>
            <p>
              Brahms: The Boy II có những màn hù dọa ấn tượng nhưng cái kết lại
              không tương xứng với phần mở đầu hứa hẹn.
            </p>
          </div>
        </div>
        <div className="col ">
          <div className="row">
            <div className="col mb-3 flex flex-wrap">
              <div className="top-content2 w-1/4  ">
                <img
                  src="https://s3img.vcdn.vn/123phim/2020/02/review-nhim-sonic-cuoi-tha-ga-cung-chang-nhim-sieu-thanh-lay-loi-15821907793369.jpg"
                  alt="Image"
                />
              </div>
              <div className="bottom-content w-2/3 ml-2 ">
                <a href="#">
                  [Review] Nhím Sonic - Cười thả ga cùng chàng nhím siêu
                  thanh...
                </a>
              </div>
            </div>
            <div className="col mb-3 flex flex-wrap">
              <div className="top-content2 w-1/4 ">
                <img
                  src="https://s3img.vcdn.vn/123phim/2020/02/review-thang-nam-hanh-phuc-ta-tung-co-buong-bo-chua-bao-gio-la-viec-de-dang-15817967038683.jpg"
                  alt="Image"
                />
              </div>
              <div className="bottom-content w-2/3 ml-2">
                <a href="#">
                  [Review] Tháng Năm Hạnh Phúc Ta Từng Có - Buông bỏ chưa bao
                  giờ là việc dễ dàng...
                </a>
              </div>
            </div>
            <div className="col mb-3 flex flex-wrap">
              <div className="top-content2 w-1/4">
                <img
                  src="https://s3img.vcdn.vn/123phim/2020/02/review-sac-dep-doi-tra-huong-giang-ke-chuyen-doi-minh-qua-phim-anh-15817958389162.jpg"
                  alt="Image"
                />
              </div>
              <div className="bottom-content w-2/3 ml-2 ">
                <a href="#">
                  [Review] Sắc Đẹp Dối Trá - Hương Giang kể chuyện đời mình qua
                  phim ảnh...
                </a>
              </div>
            </div>
            <div className="col mb-3 flex flex-wrap">
              <div className="top-content2 w-1/4">
                <img
                  src="https://s3img.vcdn.vn/123phim/2020/02/review-birds-of-prey-15809871977193.jpg"
                  alt="Image"
                />
              </div>
              <div className="bottom-content w-2/3 ml-2">
                <a href="#">
                  [Review] Birds of Prey - Màn lột xác hoành tráng của Harley...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default FormReivew;
