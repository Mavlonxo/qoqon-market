import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { BsApple, BsFacebook, BsGoogle } from "react-icons/bs";
import "./css/Login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username,
      password,
    };
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("user", JSON.stringify(newUser));
      navigate("/admin");
      toast.success("Tizimga kirdingiz");
    } else {
      toast.error("Parol yoki Email xato");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="login__container">
          <div className="social">
            <div className="social__items">
              <BsFacebook />
              Facebook orqali kirish
            </div>
            <div className="social__items">
              <BsApple />
              Apple orqali kirish
            </div>
            <div className="social__items">
              <BsGoogle />
              Google orqali kirish
            </div>
          </div>
          <p>Yoki</p>
          <form onSubmit={handleSubmit} className="email__container">
            <label>
              Email yoki telefon raqami
              <br />
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Email"
              />
            </label>
            <br />
            <label>
              Parol
              <br />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </label>
            <br />
            <a>Parolni unutdingizmi!</a>
            <br />
            <button>Kirish</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
