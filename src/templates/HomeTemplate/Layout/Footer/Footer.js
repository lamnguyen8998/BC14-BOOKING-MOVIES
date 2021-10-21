import { AndroidFilled, YoutubeFilled } from "@ant-design/icons";
import _ from "lodash";
import React from "react";
import { useSelector } from "react-redux";

export default function Footer(props) {
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);

  const arrHeThongRap = _.map(heThongRapChieu, (heThongRap) =>
    _.pick(heThongRap, ["maHeThongRap", "tenHeThongRap", "logo"])
  );

  return (
    <footer className="py-6 bg-coolGray-100 text-coolGray-900 bg-gray-800">
      <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
        <div className="grid grid-cols-12">
          <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
            <a
              href="#"
              className="flex justify-center space-x-3 md:justify-start text-black"
            >
              <img
                src="https://iphimmoi.net/wp-content/uploads/2021/08/logo.png"
                alt="logo-footer"
              />
            </a>
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-3">
            <p className="pb-1 text-lg font-medium text-white">Cộng tác</p>
            <div className="grid grid-cols-2" style={{ color: "#fff" }}>
              {arrHeThongRap.map((htr, index) => {
                return (
                  <div key={index}>
                    <img
                      className="py-2"
                      src={htr.logo}
                      style={{ width: 50 }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-3 text-white">
            <p className="pb-1 text-lg font-medium">Kết nối với chúng tôi</p>
            <div className="flex text-white">
              <div className="mr-5">
                <AndroidFilled className="text-2xl" />
              </div>
              <div>
                <YoutubeFilled className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid justify-center pt-6 lg:justify-between text-white">
          <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
            <span>
              Copyright ® 2021. All Rights Reserved. Phim Chiếu Rạp | Phim Mới
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
