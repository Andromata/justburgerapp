import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveSection } from "../../../Redux/Actions";
import "../../../Styles/Components/CategoriesBar.scss";
const allstore = require("../../../Data/products.json");

export default function CategoriesBar() {
const dispatch = useDispatch()
const { activeSection } = useSelector((store) => store.reducerSection)

  const scrollTo = (id) => {
    var section = document.getElementById(id);
    window.scrollTo(0, section.offsetTop - 100);
    dispatch(setActiveSection(id))
  };

  return (
    <div className="categoriesbar-container">
      <div className="categoryBar row space-around">
        {allstore.map((section) => {
          return (
            <div key={section.id}>
              <span
                className="column center"
                key={section.id}
                onClick={() => scrollTo(section.category)}
                href="#"
              >
                <span className={activeSection === section.category ? "btn-category active" : "btn-category"}>
                  {section.category} {section.icon}
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
