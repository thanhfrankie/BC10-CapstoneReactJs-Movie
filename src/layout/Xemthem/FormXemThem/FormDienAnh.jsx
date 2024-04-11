import React from "react";
import "./FormDienAnh.css"

const FormDienAnh = () => {
  return (
    <div className="wrapper container">
      {/* Hàng thứ nhất */}
      <div className="grid grid-cols-2 gap-5 ">
        <div className="col">
          <div className="top-content ">
            <img className="w-full"
              src="https://s3img.vcdn.vn/123phim/2020/07/tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam-15959320391357.png"
              alt="Image"
            />
          </div>
          <div className="bottom-content">
            <a href="#">
              TENET công bố ngày khởi chiếu chính thức tại Việt Nam
            </a>
            <p>
              Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra thông báo
              chính thức về ngày khởi chiếu cho bom tấn TENET tại các thị trường
              bên ngoài Bắc Mỹ, trong đó có Việt Nam.
            </p>
          </div>
        </div>
        <div className="col">
          <div className="top-content">
            <img className="w-full"
              src="https://s3img.vcdn.vn/123phim/2020/07/khi-phu-nu-khong-con-o-the-tron-chay-cua-nan-nhan-15943683481617.jpg"
              alt="Image"
            />
          </div>
          <div className="bottom-content">
            <a href="">Khi phụ nữ không còn ở thế trốn chạy của nạn nhân</a>
            <p>
              Là bộ phim tâm lý li kỳ với chủ đề tội phạm, Bằng Chứng Vô Hình
              mang đến một góc nhìn mới về hình ảnh những người phụ nữ thời hiện
              đại. Điều đó được thể hiện qua câu chuyện về hai người phụ nữ cùng
              hợp sức để vạch
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
              src="https://s3img.vcdn.vn/123phim/2020/07/gerard-butler-cung-bo-cu-deadpool-tham-gia-greenland-15937528932506.png"
              alt="Image"
            />
          </div>
          <div className="bottom-content">
            <a href="#">Gerard Butler cùng bồ cũ Deadpool tham gia Greenland</a>
            <p className="">
              Bộ phim hành động mang đề tài tận thế Greenland: Thảm Họa Thiên
              Thạch đến từ nhà sản xuất của loạt phim John Wick đã tung ra
            </p>
          </div>
        </div>
        <div  className="col">
          <div  className="top-content">
            <img
              src="https://s3img.vcdn.vn/123phim/2020/07/dien-vien-dac-biet-cua-bang-chung-vo-hinh-15937518743844.png"
              alt="Image"
            />
          </div>
          <div className="bottom-content">
            <a href="#">Diễn viên đặc biệt của Bằng Chứng Vô Hình</a>
            <p>
              Bằng Chứng Vô Hình tiết lộ thêm với khán giả một diễn viên vô cùng
              đặc biệt, đi diễn như đi chơi và không hề nghe theo sự chỉ đạo của
              đạo diễn Trịnh Đình Lê Minh. Đó chính là chú chó{" "}
            </p>
          </div>
        </div>
        <div className="col ">
          <div className="row">
            <div className="col mb-3 flex flex-wrap">
              <div className="top-content2 w-1/4  ">
                <img
                  src="https://s3img.vcdn.vn/123phim/2020/07/pee-nak-2-van-kiep-thien-thu-di-tu-khong-het-nghiep-15937498464029.png"
                  alt="Image"
                />
              </div>
              <div className="bottom-content w-2/3 ml-2 ">
                <a href="#">
                  Pee Nak 2 - Vạn kiếp thiên thu, đi tu không hết nghiệp!
                </a>
              </div>
            </div>
            <div className="col mb-3 flex flex-wrap">
              <div className="top-content2 w-1/4 ">
                <img
                  src="https://s3img.vcdn.vn/123phim/2020/07/loat-phim-kinh-di-khong-the-bo-lo-trong-thang-7-15937470779379.png"
                  alt="Image"
                />
              </div>
              <div className="bottom-content w-2/3 ml-2">
                <a href="#">Loạt phim kinh dị không thể bỏ lỡ trong tháng 7!</a>
              </div>
            </div>
            <div className="col mb-3 flex flex-wrap">
              <div className="top-content2 w-1/4">
                <img
                  src="https://s3img.vcdn.vn/123phim/2020/06/rom-tung-trailer-he-lo-cuoc-song-cua-dan-choi-so-de-15929959532579.jpg"
                  alt="Image"
                />
              </div>
              <div className="bottom-content w-2/3 ml-2 ">
                <a href="#">
                  RÒM tung trailer hé lộ cuộc sống của dân chơi số đề
                </a>
              </div>
            </div>
            <div className="col mb-3 flex flex-wrap">
              <div className="top-content2 w-1/4">
                <img
                  src="https://s3img.vcdn.vn/123phim/2020/06/antebellum-trailer-cuoi-cung-khong-he-lo-bat-cu-thong-tin-gi-them-15929866818923.jpg"
                  alt="Image"
                />
              </div>
              <div className="bottom-content w-2/3 ml-2">
                <a href="#">
                  Antebellum - Trailer cuối cùng không hé lộ bất cứ thông tin gì
                  thêm
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

export default FormDienAnh;
