import React from "react";
import Empty from "../../components/empty/Empty";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { AiFillHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import WishlistWrapper from "../../components/wishlist-wrapper/WishlistWrapper";

function Wishlist() {
  const heart = useSelector((s) => s.heart.value);
  return (
    <div>
      <Navbar />
      {heart.length ? (
        <WishlistWrapper />
      ) : (
        <Empty text={"Sevimlilar"} icon={<AiFillHeart />} />
      )}
      <Footer />
    </div>
  );
}

export default Wishlist;
