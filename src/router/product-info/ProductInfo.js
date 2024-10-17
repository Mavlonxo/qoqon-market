import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import {
  AiFillHeart,
  AiFillShopping,
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import {
  BsFacebook,
  BsInstagram,
  BsTelegram,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import "./css/ProductInfo.css";
import { useDispatch, useSelector } from "react-redux";
import { addToHeart, removeFromHeart } from "../../context/wishlist";
import { addToCart, removeFromCart } from "../../context/cart";
import ProductWrapper from "../../components/product-wrapper/ProductWrapper";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../server";
import "number-brm";

function ProductInfo() {
  const { state } = useLocation();

  const [mainImage, setMainImage] = useState(state.url);

  const handleImage = (item) => {
    setMainImage(item);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const heart = useSelector((s) => s.heart.value);
  const cart = useSelector((s) => s.cart.value);

  const [data, setData] = useState([]);
  const productRef = collection(db, "products");

  useEffect(() => {
    const getProducts = async () => {
      const fetchData = await getDocs(productRef);
      setData(fetchData.docs.map((item) => ({ id: item.id, ...item.data() })));
    };
    getProducts();
  }, []);

  const filteredData = data.filter((item) => {
    const firstWord = item.title.split(" ")[0].toLowerCase();
    return firstWord.includes(state.title.split(" ")[0].toLowerCase());
  });

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="product__info__container">
          {
            <div className="product__info">
              <div className="additional__images">
                {state.additionalImages.map((item, id) => (
                  <div className="div" key={id}>
                    <img src={item} alt="" onClick={() => handleImage(item)} />
                  </div>
                ))}
              </div>
              <div className="main__image">
                <img src={mainImage} alt="" />
              </div>
              <div className="product__info__section">
                <h3 className="title">{state.title}</h3>
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
                    <del>{Math.round(state.price * 1.5).brm("int")} so'm</del>
                    <p>{state.price.brm("int")} so'm</p>
                  </div>
                  <div className="card__monthly">
                    <span>
                      {Math.round((state.price * 1.44) / 12).brm("int")}{" "}
                      so'm/oyiga
                    </span>
                  </div>
                </div>
                <div className="brend">
                  <p>Brend:</p> <span>Qovun.uz</span>
                </div>
                <div className="status">
                  <p>Holati: </p> <span>Sotuvda bor</span>
                </div>
                <div className="share">
                  <p>Ulashish: </p>
                  <span>
                    <BsFacebook />
                    <BsTelegram />
                    <BsTwitter />
                    <BsWhatsapp />
                  </span>
                </div>
                <div className="product__info__actions">
                  <button className="product__info__heart btn btn-warning">
                    {heart.some((i) => i.id === state.id) ? (
                      <div onClick={() => dispatch(removeFromHeart(state))}>
                        <AiFillHeart style={{ color: "#218dff" }} />
                        Saralangandan o'chirish
                      </div>
                    ) : (
                      <div onClick={() => dispatch(addToHeart(state))}>
                        <AiOutlineHeart />
                        Saralanganlarga qo'shish
                      </div>
                    )}
                  </button>
                  <button className="btn btn-primary">
                    {cart.some((i) => i.id === state.id) ? (
                      <div onClick={() => dispatch(removeFromCart(state))}>
                        <AiFillShopping style={{ color: "#fff" }} />
                        Savatchadan olish
                      </div>
                    ) : (
                      <div onClick={() => dispatch(addToCart(state))}>
                        <AiOutlineShoppingCart />
                        Savatchaga qo'shish
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          }
        </div>
        <h3>Mahsulot haqida batafsil</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          corporis cum porro recusandae incidunt accusamus fuga officia
          reprehenderit debitis, repudiandae optio deserunt provident vero nam
          explicabo eaque numquam in distinctio esse dignissimos! Facere harum
          blanditiis aliquam illo quod autem atque hic nam placeat molestias,
          delectus officiis et quis quibusdam odio, consectetur numquam ducimus.
          Aspernatur, quo quam nisi ad iure pariatur accusamus in vel aliquam
          laborum quod, odit sed rem voluptatibus, quisquam aliquid quasi iste
          vero architecto repudiandae suscipit deserunt? Eius nam culpa ea
          aspernatur pariatur ipsa amet voluptas fugit asperiores? Ipsa nesciunt
          placeat eius quaerat odio suscipit dolorem iure recusandae.
        </p>
        <br />
        <br />
        <h3>Tavsiya qilaman</h3>
        <ProductWrapper
          product={
            filteredData.length > 1
              ? filteredData.slice(0, 4)
              : data.slice(0, 4)
          }
        />
      </div>
      <Footer />
    </>
  );
}

export default ProductInfo;
