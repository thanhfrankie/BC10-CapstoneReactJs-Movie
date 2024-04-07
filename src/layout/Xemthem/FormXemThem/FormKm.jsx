import React from "react";
import "./FormDienAnh.css";
const FormKm = () => {
  return (
    <div className="wrapper container">
      {/* Hàng thứ nhất */}
      <div className="grid grid-cols-2 gap-5 ">
        <div className="col">
          <div className="top-content ">
            <img
              className="w-full"
              src="https://s3img.vcdn.vn/123phim/2019/10/123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang-15712976725554.jpg"
              alt="Image"
            />
          </div>
          <div className="bottom-content">
            <a href="#">
              [123Phim] NHẬP MÃ 'BKT' - Giảm ngay 20k khi đặt vé Bắc Kim Thang
            </a>
            <p>
              123Phim đồng hành cùng phim Việt - Giảm ngay 20k mỗi giao dịch khi
              đặt vé Bắc Kim Thang trên ứng dụng 123Phim.
            </p>
          </div>
        </div>
        <div className="col">
          <div className="top-content">
            <img
              className="w-full"
              src="https://s3img.vcdn.vn/123phim/2019/08/sinh-nhat-mega-gs-15663933683466.jpg"
              alt="Image"
            />
          </div>
          <div className="bottom-content">
            <a href="">Sinh Nhật Mega GS</a>
            <p>
              Đến hẹn lại lên, vậy là một năm nữa đã trôi qua và chúng ta lại
              đến tháng 8, tháng sinh nhật của Mega GS Cinemas.
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
              src="https://s3img.vcdn.vn/123phim/2019/05/123phim-tixshop-tro-lai-qua-xin-hon-xua-15583511037699.jpg"
              alt="Image"
            />
          </div>
          <div className="bottom-content">
            <a href="#">[123Phim] TixShop trở lại, quà ‘xịn’ hơn xưa</a>
            <p className="">
              Nhiều Tix làm gì, để tiêu vào TixShop chứ còn chờ chi.
            </p>
          </div>
        </div>
        <div className="col">
          <div className="top-content">
            <img
              src="https://s3img.vcdn.vn/123phim/2019/05/galaxy-trang-thi-xem-phim-hay-say-qua-tang-15572160162243.jpg"
              alt="Image"
            />
          </div>
          <div className="bottom-content">
            <a href="#">[Galaxy Tràng Thi] Xem Phim Hay, Say Quà Tặng</a>
            <p>
              Nhân dịp khai trương Galaxy Tràng Thi, Galaxy Cinema dành tặng các
              Stars Hà Nội loạt phần quà siêu hấp dẫn.
            </p>
          </div>
        </div>
        <div className="col ">
          <div className="row">
            <div className="col mb-3 flex flex-wrap">
              <div className="top-content2 w-1/4  ">
                <img
                  src="https://s3img.vcdn.vn/123phim/2019/04/mua-2-ve-cinestar-qua-zalopay-chi-1-000d-ve-15563607309238.jpg"
                  alt="Image"
                />
              </div>
              <div className="bottom-content w-2/3 ml-2 ">
                <a href="#">Mua 2 Vé Cinestar Qua ZaloPay Chỉ 1.000đ/vé</a>
              </div>
            </div>
            <div className="col mb-3 flex flex-wrap">
              <div className="top-content2 w-1/4 ">
                <img
                  src="https://s3img.vcdn.vn/123phim/2019/04/123phim-ban-la-fan-cung-marvel-15562538560772.jpg"
                  alt="Image"
                />
              </div>
              <div className="bottom-content w-2/3 ml-2">
                <a href="#">[123Phim] Bạn Là Fan Cứng Marvel?</a>
              </div>
            </div>
            <div className="col mb-3 flex flex-wrap">
              <div className="top-content2 w-1/4">
                <img
                  src="https://s3img.vcdn.vn/123phim/2019/04/galaxy-trang-thi-trai-nghiem-bom-tan-cang-dong-cang-vui-15561704693167.jpg"
                  alt="Image"
                />
              </div>
              <div className="bottom-content w-2/3 ml-2 ">
                <a href="#">
                  [Galaxy Tràng Thi] Trải Nghiệm Bom Tấn Càng Đông Càng Vui
                </a>
              </div>
            </div>
            <div className="col mb-3 flex flex-wrap">
              <div className="top-content2 w-1/4">
                <img
                  src="https://s3img.vcdn.vn/123phim/2019/04/mua-ve-bhd-star-tren-123phim-bang-zalopay-1-000d-ve-15547979641987.jpg"
                  alt="Image"
                />
              </div>
              <div className="bottom-content w-2/3 ml-2">
                <a href="#">
                  Mua Vé BHD Star Trên 123Phim Bằng ZaloPay: 1.000đ/vé
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

export default FormKm;
