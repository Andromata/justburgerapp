import { setActiveSlider } from "../../../../Redux/Actions/index";

export function autoSlide(dispatch, checkedRadio, dataSlider) {
    if (Number(checkedRadio) === dataSlider.length - 1) {
      dispatch(setActiveSlider("0"));
    } else {
      dispatch(setActiveSlider(Number(checkedRadio) + 1));
    }
  }

export function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }