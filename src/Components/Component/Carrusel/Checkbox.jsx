import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveSlider, setAutoSlide } from "../../../Redux/Actions/index";
import '../../../Styles/Components/Checkboxs.scss'
const data = require("../../../Data/slider.json");

export default function Checkbox() {
  const { checkedRadio } = useSelector((store) => store.reducerCheckbox);
  const { autoSlide } = useSelector((store) => store.reducerCheckbox);
  const dispatch = useDispatch();

  const changeRadio = (e) => {
    dispatch(setActiveSlider(e.target.value));
    if(autoSlide){
      dispatch(setAutoSlide())
    }
  };
  return (
    <>
      <div className="pagination">
          {data.map((img, index) => {
            return (
              <div className="checkbox-container" key={img.id}>
              <input
             
                className="bulletpoint"
                name="bulletpoints"
                type="radio"
                value={index}
                checked={Number(checkedRadio) === index}
                onChange={changeRadio}
              /><span className="customRadio"></span>
              </div>
            );
          })}
      </div>
    </>
  );
}
