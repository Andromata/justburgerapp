import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { autoSlide, getWindowDimensions } from "./utils/Controllers";
import "../../../Styles/Components/Slider.scss";
import Checkbox from "./Checkbox";
const dataSlider = require("../../../Data/slider.json");

export default function Slider() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const dispatch = useDispatch();
  const { checkedRadio } = useSelector((store) => store.reducerCheckbox);
  const { checkedRadioPrev } = useSelector((store) => store.reducerCheckbox);

  

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const slider = document.getElementById("slider");
    const position =  window.pageYOffset
    
    if(position < slider.clientHeight ){
      const timeout = setTimeout(
        () => autoSlide(dispatch, checkedRadio, dataSlider),
        5000
      );
      return () => clearTimeout(timeout);
    } else {
      return
    }    
  }, [checkedRadio, dispatch]);

  return (
    <>
      <div className="slider-wrapper" id="slider">
        <Checkbox />
        <div
          key={checkedRadioPrev + "img"}
          className="slide-prev"
          style={{
            width: `${windowDimensions.width}px`,
          }}
        >
          <div
            className="slide-img"
            key={dataSlider[Number(checkedRadioPrev)].id}
            style={{
              backgroundImage: `url(${
                dataSlider[Number(checkedRadioPrev)].url
              })`,
              height: `${windowDimensions.width / 3.431}px`,
            }}
          ></div>
        </div>
        <div
          key={checkedRadio + "img"}
          className="slide"
          style={{
            width: `${windowDimensions.width}px`,
          }}
        >
          <div
            className="slide-img"
            key={dataSlider[Number(checkedRadio)].id}
            style={{
              backgroundImage: `url(${dataSlider[Number(checkedRadio)].url})`,
              height: `${windowDimensions.width / 3.431}px`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
