import React from "react";
import "./css/Footer.css";
import { CiInstagram, CiLocationOn, CiMail } from "react-icons/ci";
import { FaFacebook, FaTelegramPlane } from "react-icons/fa";

function Footer() {
  return (
    <div className="container">
      <div className="footer">
        <div className="info__section">
          <h4>
            Bizning mobil ilovamiz AppGallery, App store va Google play-da
          </h4>
          <div className="footer__apps">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Google_Play_2022_logo.svg/2560px-Google_Play_2022_logo.svg.png"
              alt=""
              className="google__play"
            />
            <img
              src="https://www.logo.wine/a/logo/App_Store_(iOS)/App_Store_(iOS)-Badge-Alternative-Logo.wine.svg"
              alt=""
              className="app__store"
            />
            <img
              src="https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/tablets/matepad-pro-11/img/icon/ag-app.svg"
              alt=""
              className="app__gallery"
            />
          </div>
        </div>
        <div className="image__section">
          <img src="https://olcha.uz/_nuxt/footer-img.745872f8.webp" alt="" />
        </div>
      </div>
      <div className="footer__container">
        <ul className="footer__collections">
          Qovun
          <li className="footer__item">Qo'llab-quvvatlash raqami</li>
          <li>+998 (93) 513 63 30</li>
          <li className="footer__location">
            <CiLocationOn />
            <span>Namangan sh, Namangan</span>
          </li>
          <li className="footer__mail">
            <CiMail />
            <span>info@qovun.uz</span>
          </li>
        </ul>
        <ul className="footer__collections">
          Ma'lumot
          <li className="footer__item">Biz haqimizda</li>
          <li className="footer__item">Bo'sh ish o'rinlari</li>
          <li className="footer__item">
            To'lovni qaytarish va tovarlarni almashtirish
          </li>
          <li className="footer__item">Muddatli to'lov shartlari</li>
          <li className="footer__item">Yordam</li>
          <li className="footer__item">Yetkazib berish</li>
        </ul>
        <ul className="footer__collections">
          <li className="footer__item">Eco-friendly</li>
          <li className="footer__item">Bonus va aksiyalar</li>
          <li className="footer__item">To'lov va yetkazib berish</li>
          <li className="footer__item">Olchada soting</li>
          <li className="footer__item">Servis markazi</li>
        </ul>
      </div>
      <hr />
      <div className="policy">
        <p>© 2017-2023. ООО "Qovun store"</p>
        <p>Ommaviy oferta</p>
        <p>Maxfiylik siyosati</p>
        <div>
          <CiInstagram />
          <FaTelegramPlane />
          <FaFacebook />
        </div>
      </div>
    </div>
  );
}

export default Footer;
