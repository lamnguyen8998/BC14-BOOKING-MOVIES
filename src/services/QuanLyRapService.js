import { GROUP } from "../ultil/settings/config";
import { baseService } from "./baseService";

export class QuanLyRapService extends baseService {
  constructor() {
    super();
  }
  layDanhSachHeThongRap = () => {
    return this.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP}`
    );
  };
  layThongTinLichChieuPhim = (maPhim) => {
    return this.get(`/api/QuanLyRap/layThongTinLichChieuPhim?maPhim=${maPhim}`);
  };
}

export const quanLyRapService = new QuanLyRapService();
