import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./css/WishlistWrapper.css";
import { removeFromHeart } from "../../context/wishlist";
import {
  AiFillHeart,
  AiFillShopping,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { addToCart, removeFromCart } from "../../context/cart";
import "number-brm";

function WishlistWrapper() {
  const heart = useSelector((s) => s.heart.value);
  const dispatch = useDispatch();
  const cart = useSelector((s) => s.cart.value);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="container">
      <h2>Saralanganlar</h2>
      <div className="wishlist__wrapper__container">
        <div className="wishlist__wrapper">
          {heart.map((item) => (
            <>
              <div key={item.id} className="wishlist__wrapper__item">
                <div className="image">
                  <img src={item.url} alt="" />
                </div>
                <div className="title">
                  <h3>{item.title}</h3>
                </div>
                <div className="price">
                  <div>
                    <del>{Math.round(item.price * 1.5).brm("int")} so'm</del>
                    <p>{item.price.brm("int")} so'm</p>
                  </div>
                  <div className="monthly">
                    <span>
                      {Math.round((item.price * 1.44) / 12).brm("int")}{" "}
                      so'm/oyiga
                    </span>
                  </div>
                </div>
                <div className="actions">
                  <button className="btn btn-warning">
                    {
                      <div onClick={() => dispatch(removeFromHeart(item))}>
                        <AiFillHeart size={25} style={{ color: "#218dff" }} />
                        Saralangandan o'chirish
                      </div>
                    }
                  </button>
                  <button className="btn btn-primary">
                    {cart.some((i) => i.id === item.id) ? (
                      <div onClick={() => dispatch(removeFromCart(item))}>
                        <AiFillShopping size={25} style={{ color: "#fff" }} />
                        Savatchadan olish
                      </div>
                    ) : (
                      <div onClick={() => dispatch(addToCart(item))}>
                        <AiOutlineShoppingCart size={25} />
                        Savatchaga qo'shish
                      </div>
                    )}
                  </button>
                </div>
              </div>
              <hr />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WishlistWrapper;
