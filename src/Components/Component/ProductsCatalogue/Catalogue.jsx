import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActiveSection } from "../../../Redux/Actions";
import Product from "./Product";
import "../../../Styles/Components/Catalogue.scss";
const allstore = require("../../../Data/products.json");

export default function Catalogue() {
  const dispatch = useDispatch();

  useEffect(() => {
    const onScroll = (e) => {
      var section = document.getElementsByTagName("SECTION");
      var bScroll = window.pageYOffset;
      for (var i = 0; i < section.length; i++) {
        var sHeight = section[i].offsetHeight;
        var offsets = section[i].offsetTop - 110;
        if (bScroll > offsets && bScroll < offsets + sHeight) {
          dispatch(setActiveSection(section[i].id));
        } else {
          section[i].className = "";
        }
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [dispatch]);

  return (
    <div className="catalogue-container full-width">
      <div className="column">
        {allstore.map((categories) => {
          return (
            <section
              className="section"
              key={categories.id}
              name={categories.category}
              id={categories.category}
            >
              <div className="row space-between section">
                <span className="section-name">
                  {categories.category}
                  <span className="section-icon">{categories.icon}</span>
                </span>
              </div>
              <div className="row space-beetween products-container">
                {categories.products.map((product) => {
                  return <Product product={product} key={product.id} />;
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
