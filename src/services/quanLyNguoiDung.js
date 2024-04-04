import { http } from "./config";
import { getLocalStorage } from "../utils/util";

export const quanLyNguoiDungServ = {
  dangNhap: (data) => {
    // khi sử dụng các phương thức từ axios đã được config(được cấu hình), tham số đầu tiên sẽ luôn là end point cho phần domain gọi tới api, tham số thứ 2 sẽ là dữ liệu được gửi lên cho backend và lưu ý tham số này luôn đặt tên là data
    return http.post("/QuanLyNguoiDung/DangNhap", data);
  },
  dangKy: (data) => {
    return http.post("/QuanLyNguoiDung/DangKy", data);
  },
  layThongTinNguoiDung: () => {
    return http.post(`/QuanLyNguoiDung/ThongTinTaiKhoan`);
  },
  datVe: (maLichChieu, danhSachVe) => {
    return http.post(`/QuanLyDatVe/DatVe`, { maLichChieu, danhSachVe });
  },
  getListUser: () => {
    return http.get("/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01");
  },
  findUser: (data) => {
    return http.get("QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01", data);
  },
  deleteUser: (taiKhoan) => {
    const userLocal = getLocalStorage("user");
    return http.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`, {
      headers: {
        Authorization: `bearer ${userLocal.accessToken}`,
      },
    });
  },
  addUser: (userData) => {
    const userLocal = getLocalStorage("user");
    return http.post("/QuanLyNguoiDung/ThemNguoiDung", userData, {
      headers: {
        Authorization: `bearer ${userLocal.accessToken}`,
      },
    });
  },
  getInfoUser: (taiKhoan) => {
    return http.get(
      `https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${taiKhoan}`
    );
  },
  updateUser: (userData) => {
    const userLocal = getLocalStorage("user");
    return http.post(
      "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      userData,
      {
        headers: {
          Authorization: `bearer ${userLocal.accessToken}`,
        },
      }
    );
  },
};
