import { http } from "./config";

export const quanLyMuaVeServ = {
  getAllTicKet: (maLichChieu) => {
    //mã lịch chiếu lấy từ url
    return http.get(
      `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
  },
  layThongTinNguoiDung: () => {
    // const data = { taiKhoan: taiKhoan };
    // do tren swagger can 2 cai token thoi chu ko can truyen du lieu j het
    return http.post(`/QuanLyNguoiDung/ThongTinTaiKhoan`, null, {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWxwaGFtZXRhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoiYWxwaGFtZXRhYUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiS2hhY2hIYW5nIiwiYWxwaGFtZXRhYUBnbWFpbC5jb20iLCJHUDAxIl0sIm5iZiI6MTcxMTc2NTE1MCwiZXhwIjoxNzExNzY4NzUwfQ.WzfA5Ne73zGraS7v9qDSAO7x2AuE8OgtAA1QLi-Koqk",
    });
  },
};
