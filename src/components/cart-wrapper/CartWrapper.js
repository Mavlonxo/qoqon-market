import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./css/CartWrapper.css";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import {
  decrementCart,
  addToCart,
  removeAll,
  removeFromCart,
} from "../../context/cart";
import { addToHeart, removeFromHeart } from "../../context/wishlist";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../server";

import "number-brm";

function CartWrapper() {
  const dispatch = useDispatch();
  const cart = useSelector((s) => s.cart.value);
  const heart = useSelector((s) => s.heart.value);

  const [loading, setLoading] = useState(false);

  const notify = () =>
    toast(
      "Mahsulotlar qabul qilindi! Operatorlar tez orada aloqaga chiqishadi",
      {
        autoClose: 2000,
      }
    );

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const productRef = collection(db, "delivery");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = "5752445722:AAFhH0ErXbPX-paOy3u6-pVCdtccSwVw6Qc";
    const chat_id = -975698408;

    const order = `%0A Qovun Market Buyurtma %0A 👤Xaridor: ${name} %0A 📱Telefon raqami: ${phone} %0A 📌Manzil: ${address} %0A %0A📜Buyurtma Berilgan mahsulotlar:%0A ${cart
      ?.map(
        (item) =>
          `%0A Nomi: ${item.title} %0A Soni: ${item.quantity} %0A Naxi: ${(
            item.quantity * item.price
          ).brm("int")} so'm %0A`
      )
      .join("")}%0AUmumiy Xisob: ${cart
      ?.reduce((a, b) => a + b.price * b.quantity, 0)
      .brm("int")} so'm `;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${order}`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    const data = {
      cart: cart,
      hisob: cart?.reduce((a, b) => a + b.price * b.quantity, 0),
      buyer: {
        buyerName: name,
        buyerPhone: phone,
        buyerAddress: address,
      },
    };

    await addDoc(productRef, data)
      .then((res) => console.log("success"))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));

    dispatch(removeAll(cart));
    notify();
  };

  const reversedCart = cart.slice().reverse();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="container">
      <h3>Savatda {cart.length} ta mahsulot bor</h3>
      <div className="cart__wrapper__container">
        <div className="cart__wrapper">
          {reversedCart?.map((item) => (
            <React.Fragment key={item.id}>
              <div className="cart__wrapper__item">
                <div className="image">
                  <img src={item.url} alt="" />
                </div>
                <div className="title">
                  <h3>{item.title}</h3>
                </div>
                <div className="card__price">
                  <div>
                    <del>{Math.round(item.price * 1.5).brm("int")} so'm</del>
                    <p>{(item.quantity * item.price).brm("int")} so'm</p>
                  </div>
                  <div className="card__monthly">
                    <span>
                      {Math.round((item.price * 1.44) / 12).brm("int")}{" "}
                      so'm/oyiga
                    </span>
                  </div>
                </div>
                <div className="center__section">
                  <button
                    className="btn btn-danger"
                    disabled={item.quantity <= 1}
                    onClick={() => dispatch(decrementCart(item))}
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    +
                  </button>
                </div>
                <div className="actions">
                  <button className="btn btn-warning">
                    {heart.some((i) => i.id === item.id) ? (
                      <div onClick={() => dispatch(removeFromHeart(item))}>
                        <AiFillHeart style={{ color: "#218dff" }} />
                        Saralangandan o'chirish
                      </div>
                    ) : (
                      <div onClick={() => dispatch(addToHeart(item))}>
                        <AiOutlineHeart />
                        Saralanganlarga qo'shish
                      </div>
                    )}
                  </button>
                  <button
                    onClick={() => dispatch(removeFromCart(item))}
                    className="product__info__cart btn btn-primary"
                  >
                    <AiOutlineShoppingCart />
                    <span>Savatchadan o'chirish</span>
                  </button>
                </div>
              </div>
              <hr />
            </React.Fragment>
          ))}
        </div>
        <div className="forma">
          <form onSubmit={handleSubmit}>
            <h4>Malumotlaringizni kiriting</h4>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Ismingiz"
            />
            <input
              type="number"
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="Telefon raqamingiz"
            />
            <input
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              required
              placeholder="Manzilingiz"
            />
            <button disabled={loading} className="btn btn-primary">
              {loading ? "Jo'natilyapti" : "Jo'natish"}
            </button>
          </form>
          <div className="information">
            <h4>Harid qilinayotgan mahsulotlar haqida malumot</h4>
            <div>
              <div className="details">
                <h5>Umumiy hisob: </h5>
                <p>
                  {" "}
                  {reversedCart
                    ?.reduce((a, b) => a + b.price * b.quantity, 0)
                    .brm("int")}{" "}
                  so'm
                </p>
              </div>
              <div className="details">
                <h6>Promokod:</h6>
                <p>0 so'm</p>
              </div>
              <div className="details">
                <h6>Ishlatilgan bonus:</h6>
                <p>0 so'm</p>
              </div>
              <div className="details">
                <h6>Naqd pul to'lash uchun komissiya miqdori:</h6>
                <p>0%</p>
              </div>
              <div className="details">
                <h6>Yetkazib berish summasi:</h6>
                <p>0 so'm</p>
              </div>
              <hr />
              <div className="details">
                <h6>Yetkazib berish</h6>
                <p>Kuryer orqali</p>
              </div>
              <div className="details">
                <h6>Buyurtma turi:</h6>
                <p>To'liq to'lash</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartWrapper;
