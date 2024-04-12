import { getLocalStorage } from "../utils/util";
import { http } from "./config";

export const quanLyRapServ = {
  getAllThongTinCumRap() {
    return http.get("/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01");
  },
  getInfoHeThongRap() {
    return http.get("/QuanLyRap/LayThongTinHeThongRap");
  },
 
  getInfoCumRapHeThong(maHeThongRap) {
    return http.get(
      `/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
    );
  },
  layThongTinLichChieuPhim(maPhim) {
    return http.get(`/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`);
  },
 
  layThongTinHeThongRap() {
    return http.get(`/QuanLyRap/LayThongTinHeThongRap`);
  },
  layThongTinCumRap(maHeThongRap) {
    return http.get(
      `/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
    );
  },

  createShowTime(thongTinLichChieu) {
    const userLocal = getLocalStorage("user");
    return http.post("/QuanLyDatVe/TaoLichChieu", thongTinLichChieu, {
      headers: {
        Authorization: `bearer ${userLocal.accessToken}`,
      },
    });
  },
};
