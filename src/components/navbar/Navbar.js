import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

import "./css/Navbar.css";
import Sidebar from "../sidebar/Sidebar";
import { useSelector } from "react-redux";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleSidebar = () => {
    setShow(true);
  };
  document.body.style.overflow = show ? "hidden" : "auto";

  const heart = useSelector((s) => s.heart.value);
  const cart = useSelector((s) => s.cart.value);

  return (
    <>
      <div className="container navbar__main">
        <Link to={"/"} className="nav__logo">
          Qovun.uz
        </Link>
        <button className="nav__btn" onClick={handleSidebar}>
          <AiOutlineMenu />
          <span>Katalog</span>
        </button>
        <div className="nav__search">
          <input type="text" placeholder="Kategoriyalar bo'ylab qidirish..." />
          <button>
            <AiOutlineSearch />
          </button>
        </div>
        <div className="nav__collection">
          <Link to={"/"} className="nav__item">
            <AiOutlineHome />
            <span>Bosh sahifa</span>
          </Link>
          <Link className="nav__item" to={"/wishlist"}>
            <div className="nav__wishlist">
              <AiOutlineHeart />
              <p className="heart__counter">{heart.length}</p>
            </div>
            <span>Saralanganlar</span>
          </Link>
          <Link to={"/cart"} className="nav__item">
            <div className="nav__wishlist">
              <AiOutlineShoppingCart />
              <p className="heart__counter">{cart.length}</p>
            </div>
            <span>Savatcha</span>
          </Link>
          <Link to={"/admin"} className="nav__item">
            <AiOutlineUser />
            <span>Kirish</span>
          </Link>
        </div>
      </div>
      <Sidebar show={show} setShow={setShow} />
    </>
  );
}

export default Navbar;
