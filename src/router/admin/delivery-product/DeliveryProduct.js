import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../server";
import { Link } from "react-router-dom";
import {
  AiFillHeart,
  AiFillShopping,
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FiMessageSquare, FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addToHeart, removeFromHeart } from "../../../context/wishlist";
import { addToCart, removeFromCart } from "../../../context/cart";
import Skeleton from "../../../components/skeleton/Skeleton";
import { toggle } from "../../../context/proReload";
import { toast } from "react-toastify";
import "number-brm";

function DeliveryProduct() {
  const [data, setData] = useState([]);
  const productRef = collection(db, "delivery");

  const deliveredPro = collection(db, "delivered");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (id, item) => {
    try {
      setLoading(true);
      await addDoc(deliveredPro, item);
      await deleteDoc(doc(db, "delivery", id));
      dispatch(toggle());
      toast.success("Mahsulot yetkazildi!");
      setLoading(false);
    } catch (error) {
      console.log("Error deleting document:", error);
      toast.error("Qandaydir xatolik");
    }
  };

  const admin = true;

  const proReload = useSelector((s) => s.proReload.value);

  useEffect(() => {
    const getProducts = async () => {
      const fetchData = await getDocs(productRef);
      setData(fetchData.docs.map((item) => ({ id: item.id, ...item.data() })));
    };
    getProducts();
  }, [proReload]);

  const dispatch = useDispatch();
  const heart = useSelector((s) => s.heart.value);

  const cart = useSelector((s) => s.cart.value);

  const handleDelete = async (id) => {
    try {
      setLoading(false);
      await deleteDoc(doc(db, "delivery", id));
      dispatch(toggle());
      toast.warn("Mahsulot yetkazib berilishi bekor qilindi!");
      setLoading(true);
    } catch (error) {
      console.log("Error deleting document:", error);
    }
  };

  return (
    <div style={{ margin: 30 }}>
      {data?.length ? (
        <div className="field">
          <h3 style={{ color: "gray" }}>Buyurtma berilgan mahsulotlar</h3>
          {data.map((item) => (
            <div key={item.id} className="product__wrapper__container">
              <div className="deliveryInfo">
                <div className="detail">
                  <p>Buyurtmachi:</p>
                  <span>{item.buyer.buyerName}</span>
                </div>
                <div className="detail">
                  <p>Telefon raqami:</p>
                  <span>+{item.buyer.buyerPhone}</span>
                </div>
                <div className="detail">
                  <p>Manzili: </p>
                  <span>{item.buyer.buyerAddress}</span>
                </div>
              </div>
              <h5 style={{ marginTop: 20 }}>
                {item.buyer.buyerName}ning umumiy hisobi:{" "}
                {item.hisob.brm("int")} so'm
              </h5>
              <div className="product__wrapper">
                {item.cart?.map((cartItem) => (
                  <div key={cartItem.id} className="card">
                    <Link
                      to={`/product/${cartItem.id}`}
                      className="card__image"
                      state={cartItem}
                    >
                      <img src={cartItem.url} alt="" />
                    </Link>
                    <button className="card__heart">
                      {heart.some((i) => i.id === cartItem.id) ? (
                        <AiFillHeart
                          style={{ color: "#218dff" }}
                          onClick={() => dispatch(removeFromHeart(cartItem))}
                        />
                      ) : (
                        <AiOutlineHeart
                          onClick={() => dispatch(addToHeart(cartItem))}
                        />
                      )}
                    </button>
                    <div className="card__cart">
                      {admin ? (
                        <button
                          className="btn m-0 p-0"
                          onClick={() => handleDelete(item.id)}
                        >
                          <FiTrash2 />
                        </button>
                      ) : cart.some((i) => i.id === cartItem.id) ? (
                        <AiFillShopping
                          style={{ color: "#218dff" }}
                          onClick={() => dispatch(removeFromCart(cartItem))}
                        />
                      ) : (
                        <AiOutlineShoppingCart
                          onClick={() => dispatch(addToCart(cartItem))}
                        />
                      )}
                    </div>

                    <h3>{cartItem.title && cartItem.title.slice(0, 48)}</h3>
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
                        <del>
                          {Math.round(cartItem.price * 1.5).brm("int")} so'm
                        </del>
                        <p>{cartItem.price.brm("int")} so'm</p>
                      </div>
                      <div className="card__monthly">
                        <span>
                          {Math.round((cartItem.price * 1.44) / 12).brm("int")}{" "}
                          so'm/oyiga
                        </span>
                      </div>
                    </div>
                    <hr />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Soni:</p>
                      <p>{cartItem.quantity}</p>
                    </div>
                    <br />
                    <br />
                    <button
                      onClick={() => handleSubmit(item.id, item)}
                      className="btn btn-primary mb-2 taptoCart"
                      disabled={loading}
                    >
                      <p>{loading ? "Kuting" : "Buyurtma yetkazildi"}</p>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Skeleton />
      )}
    </div>
  );
}

export default DeliveryProduct;
