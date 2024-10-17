import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./router/home/Home";
import Wishlist from "./router/wishlist/Wishlist";
import Cart from "./router/cart/Cart";
import Login from "./router/login/Login";
import Admin from "./router/admin/Admin";
import ProductInfo from "./router/product-info/ProductInfo";
import Auth from "./router/admin/auth/Auth";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="product/:id" element={<ProductInfo />} />
        <Route path="/" element={<Auth />}>
          <Route path="/admin/*" element={<Admin />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
