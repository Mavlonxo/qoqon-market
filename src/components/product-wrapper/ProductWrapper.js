import React from "react";
import { Link } from "react-router-dom";
import "./css/ProductWrapper.css";
import {
  AiFillHeart,
  AiFillShopping,
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FiMessageSquare, FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addToHeart, removeFromHeart } from "../../context/wishlist";
import { addToCart, removeFromCart } from "../../context/cart";

import { db } from "../../server";
import { deleteDoc, doc } from "firebase/firestore";
import { toggle } from "../../context/proReload";

import "number-brm";

function ProductWrapper({ product, admin }) {
  const dispatch = useDispatch();
  const heart = useSelector((s) => s.heart.value);

  const cart = useSelector((s) => s.cart.value);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "products", id))
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    dispatch(toggle());
  };

  return (
    <div className="product__wrapper__container">
      <h3>Mahsulotlar</h3>
      <div className="product__wrapper">
        {product?.map((item) => (
          <div key={item.id} className="card">
            <Link
              to={`/product/${item.id}`}
              className="card__image"
              state={item}
            >
              <img src={item.url} alt="" />
            </Link>
            <button className="card__heart">
              {heart.some((i) => i.id === item.id) ? (
                <AiFillHeart
                  style={{ color: "#218dff" }}
                  onClick={() => dispatch(removeFromHeart(item))}
                />
              ) : (
                <AiOutlineHeart onClick={() => dispatch(addToHeart(item))} />
              )}
            </button>
            <button className="card__cart">
              {admin ? (
                <button
                  className="btn m-0 p-0"
                  onClick={() => handleDelete(item.id)}
                >
                  <FiTrash2 />
                </button>
              ) : cart.some((i) => i.id === item.id) ? (
                <AiFillShopping
                  style={{ color: "#218dff" }}
                  onClick={() => dispatch(removeFromCart(item))}
                />
              ) : (
                <AiOutlineShoppingCart
                  onClick={() => dispatch(addToCart(item))}
                />
              )}
            </button>
            <h3>{item.title && item.title.slice(0, 48)}</h3>
            <div className="card__rating">
              <div className="card__rate">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <span>
                <FiMessageSquare /> 0 sharh
              </span>
            </div>
            <div className="card__price">
              <div>
                <del>{Math.round(item.price * 1.5).brm("int")} so'm</del>
                <p>{item.price.brm("int")} so'm</p>
              </div>
              <div className="card__monthly">
                <span>
                  {Math.round((item.price * 1.44) / 12).brm("int")} so'm/oyiga
                </span>
              </div>
            </div>
            <br />
            <br />
            <Link
              onClick={() => dispatch(addToCart(item))}
              to={"/cart"}
              className="btn btn-primary mb-2 taptoCart"
            >
              <p>Bir klikda sotib olish</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductWrapper;
