import React, { Component } from "react";
import Slider from "react-slick";
import Film_Flip from "../Phim/Film_Flip";
import { useDispatch, useSelector } from "react-redux";
import styleSlick from "./MultipleRowSlick.module.css";
import {
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
} from "../../redux/types/QuanLyPhimType";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

const MultipleRowSlick = (props) => {
  const dispatch = useDispatch();
  const { dangChieu, sapChieu } = useSelector(
    (state) => state.QuanLyPhimReducer
  );

  const renderPhims = () => {
    return props.arrPhim.map((item, index) => {
      return (
        <div className="mt-2" key={index}>
          <Film_Flip item={item} />
        </div>
      );
    });
  };
  let activeClassDC = dangChieu === true ? "active_Film" : "none_active_Film";

  let activeClassSC = sapChieu === true ? "active_Film" : "none_active_Film";
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <button
        type="button"
        className={`${styleSlick[activeClassDC]}px-8 py-3 font-semibold rounded bg-gray-400 text-white mr-2`}
        onClick={() => {
          const action = { type: SET_FILM_DANG_CHIEU };
          dispatch(action);
        }}
      >
        PHIM CHIẾU RẠP
      </button>
      <button
        type="button"
        className={`${styleSlick[activeClassSC]}px-8 py-3 font-semibold rounded bg-white text-gray-400 border-gray-800 border`}
        onClick={() => {
          const action = { type: SET_FILM_SAP_CHIEU };
          dispatch(action);
        }}
      >
        PHIM SẮP CHIẾU
      </button>
      <Slider {...settings}>{renderPhims()}</Slider>
    </div>
  );
};

export default MultipleRowSlick;
