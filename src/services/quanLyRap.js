import { getLocalStorage } from "../utils/util";
import { http } from "./config";

export const quanLyRapServ = {
  getAllThongTinCumRap() {
    return http.get("/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01");
  },
  getInfoHeThongRap() {
    return http.get("/QuanLyRap/LayThongTinHeThongRap");
  },
  getAllLogoRap: () => {
    return http.get("/QuanLyRap/LayThongTinHeThongRap?maHeThongRap");
  },
  getInfoCumRapHeThong(maHeThongRap) {
    return http.get(
      `/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
    );
  },
  getAllMaPhimRap: () => {
    return http.get("QuanLyRap/LayThongTinLichChieuPhim?MaPhim");
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
