import React from "react";
import InputCustom from "../../components/Input/InputCustom";
import { DatePicker, Switch, Rate } from "antd";
const AddMovie = () => {
  return (
    <div>
      <form>
        <InputCustom label="Tên phim" placeholder="Nhập tên phim" />
        <InputCustom label="Trailer" placeholder="Nhập trailer" />
        <InputCustom label="Mô tả" placeholder="Nhập mô tả" />
        <div>
          <label htmlFor="">Nhập ngày chiếu</label>
          <DatePicker />
        </div>
        <div>
          <label htmlFor="">Đang chiếu</label>
          <Switch defaultChecked />
        </div>
        <div>
          <label htmlFor="">Sắp chiếu</label>
          <Switch defaultChecked />
        </div>
        <div>
          <label htmlFor="">Hot</label>
          <Switch defaultChecked />
        </div>
        <div>
          <label htmlFor="">Đánh giá</label>
          <Rate />
        </div>
        <div>
          <label htmlFor="">Hình ảnh</label>
          <input type="file" />
          <img src="" alt="" />
        </div>
        <div>
          <button>Thêm phim</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
