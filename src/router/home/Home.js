import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Products from "../../components/products/Products";
import Slider from "../../components/slider/Slider";
import Category from "../../components/category/Category";
import { AiOutlineArrowUp } from "react-icons/ai";

function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Category />
      <Products />
      <Footer />
      <a href="#" className="toTopButton">
        <AiOutlineArrowUp />
      </a>
    </div>
  );
}

export default Home;
