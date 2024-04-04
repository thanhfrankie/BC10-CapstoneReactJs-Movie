import { http } from "./config";
import { getLocalStorage } from "../utils/util";

export const quanLyPhimServ = {
  getAllBanner: () => {
    return http.get("/QuanLyPhim/LayDanhSachBanner");
  },
  getAllMovie: (tenPhim = "") => {
    if (tenPhim.trim() != "") {
      return http.get(
        `/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${tenPhim}`
      );
    }
    return http.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
  },
  themPhimUploadHinh: (data) => {
    return http.post("/QuanLyPhim/ThemPhimUploadHinh", data);
  },
  getInfoFilm: (maPhim) => {
    return http.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  },
  updateFilmUpload: (formData) => {
    const userLocal = getLocalStorage("user");
    return http.post("/QuanLyPhim/CapNhatPhimUpload", formData, {
      headers: {
        Authorization: `bearer ${userLocal.accessToken}`,
      },
    });
  },
  deleteFilm: (maPhim) => {
    const userLocal = getLocalStorage("user");
    return http.delete(`/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`, {
      headers: {
        Authorization: `bearer ${userLocal.accessToken}`,
      },
    });
  },
};
