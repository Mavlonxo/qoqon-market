import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import CartWrapper from "../../components/cart-wrapper/CartWrapper";
import Empty from "../../components/empty/Empty";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

function Cart() {
  const cart = useSelector((s) => s.cart.value);

  return (
    <div>
      <ToastContainer />
      <Navbar />
      {cart.length ? (
        <CartWrapper data={cart} />
      ) : (
        <Empty text={"Savatcha"} icon={<AiOutlineShoppingCart />} />
      )}
      <Footer />
    </div>
  );
}

export default Cart;
