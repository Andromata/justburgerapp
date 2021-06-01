import React from "react";
import "../../Styles/Components/Navbar.scss";
import * as GiIcons from "react-icons/gi";
import * as HiIcons from "react-icons/hi"
import * as BiIcons from "react-icons/bi"

function Navbar() {
  return (
    <div className="navbarTop navbarTopSecondary">
      <div className="navbar-inner">
        <button className="btn-burger">
          <GiIcons.GiHamburgerMenu className="burgerIcon" />
        </button>
        <span>
          <a href="http://localhost:3001" className="logo-container">
            <img
              src="https://cdn.mer-cat.com/justburger/img/settings/logojb846_1607001569.png"
              alt="Logo"
            />
          </a>
        </span>
        <div className="row navbar-inner-center">
          <div className="row middle end center">
            <button className="btn-options active">
              <span>Delivery</span>
            </button>
            <button className="btn-options">
              <span>Retiro</span>
            </button>
          </div>
        </div>
        <button className="btn-login">
            <HiIcons.HiOutlineUserCircle className="userIcon" />
            <span>Iniciar Sesión</span>
        </button>
        <button className="btn-cart">
            <BiIcons.BiShoppingBag className="cartIcon"/>
            <span>0 items</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
