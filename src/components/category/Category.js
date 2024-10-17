import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Category.css";

// import required modules
import { Pagination } from "swiper";

function Category() {
  return (
    <div className="container category__slider">
      <Swiper
        spaceBetween={30}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1360: {
            slidesPerView: 9,
          },
          1160: {
            slidesPerView: 8,
          },
          960: {
            slidesPerView: 7,
          },
          760: {
            slidesPerView: 6,
          },
          560: {
            slidesPerView: 5,
          },
          360: {
            slidesPerView: 3,
          },
          260: {
            slidesPerView: 2,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="category__slider__item">
          <img
            src="https://olcha.uz/image/128x128/category/CKZsoYyBZe0yjbVeweAfqdN37DUoniYtoaP6axHXjmP8mL1sdfHJViYxE9oC."
            alt=""
          />
          <p>Televizor, foto-video va audio</p>
        </SwiperSlide>
        <SwiperSlide className="category__slider__item">
          <img
            src="https://olcha.uz/image/128x128/category/ANjR66Mftj98kEBx8CWVVnQLdFQuJ4pSr3QKP4n9msN9OAwp25zPtdDyLxi5."
            alt=""
          />
          <p>Noutbuk, printer, kompyuterlar</p>
        </SwiperSlide>
        <SwiperSlide className="category__slider__item">
          <img
            src="https://olcha.uz/image/128x128/category/ZUL8nBr5B3s2XNEX8MYx7lQz52QDpTpOOEf31vUDjN5Zxt0nkHEDuxyNNvuJ."
            alt=""
          />
          <p>Smartfon, telefon, gadget, aksesuarlar</p>
        </SwiperSlide>
        <SwiperSlide className="category__slider__item">
          <img
            src="https://olcha.uz/image/128x128/category/BCoCpVZoqpqJzQC4aiRpGVE115PG3XEqtSsF4AfxYn9sruh9BLoqUenR5IAi."
            alt=""
          />
          <p>Maishiy texnika</p>
        </SwiperSlide>
        <SwiperSlide className="category__slider__item">
          <img
            src="https://olcha.uz/image/128x128/category/BMBNZQhTuA1GZumMwimF96GL1kiCPWrmAqAqHjYJ9hMB1uuofjrF9GHH0cli."
            alt=""
          />
          <p>Barchasi oshxona uchun</p>
        </SwiperSlide>
        <SwiperSlide className="category__slider__item">
          <img
            src="https://olcha.uz/image/128x128/category/9fCLiZeH7QOJDKz24ZZg9h7lNbSMlWNuZKCYZueqB0bGSDpx9AbodQuBhmoa."
            alt=""
          />
          <p>Sport anjomlari</p>
        </SwiperSlide>
        <SwiperSlide className="category__slider__item">
          <img
            src="https://olcha.uz/image/128x128/category/Yj9TQjVam8Cv1fiH09UBzA38z6ei92xvBC7BCvhyS3CS5b2XZVd3dRwvMUVQ."
            alt=""
          />
          <p>Go'zallik va salomatlik</p>
        </SwiperSlide>
        <SwiperSlide className="category__slider__item">
          <img
            src="https://olcha.uz/image/128x128/category/1Yxv7H4MED8VfZPun78QtIrbJz7ZSC2VWMVAc9i5952ZDmdlN4SP9Lkr0bCh.png"
            alt=""
          />
          <p>Chet eldan tovarlar</p>
        </SwiperSlide>
        <SwiperSlide className="category__slider__item">
          <img
            src="https://olcha.uz/image/128x128/category/N3iMWPyvXRIXTqwloVhRb4oe2PEn38unPptNWZVenY7DJS2GYY5py94DRAX6."
            alt=""
          />
          <p>Avto jihozlar</p>
        </SwiperSlide>
        <SwiperSlide className="category__slider__item">
          <img
            src="https://olcha.uz/image/128x128/category/tS7u52PvR1Zaw3xRLQ0h1zBH9sSevOAQt3FdXmyQ4DfUo8cgruPXuvyyAHmO."
            alt=""
          />
          <p>Barchasi ofis, uy va bog' uchun</p>
        </SwiperSlide>
        <SwiperSlide className="category__slider__item">
          <img
            src="https://olcha.uz/image/128x128/category/LzTnOeBLuEdD8SZNP60rVzei8wxGzi1UcbaalLAls45FQODwUdmXnzgsBgFR."
            alt=""
          />
          <p>Bolalar uchun o'yinchoq va mahsulotlar</p>
        </SwiperSlide>
        <SwiperSlide className="category__slider__item">
          <img
            src="https://olcha.uz/image/128x128/category/jTPPyG1D9fziqBW0yJXQd3RpyCUSRd6AbthM5l0CRxLFbJhrlxOmcqI48LMZ."
            alt=""
          />
          <p>Kiyim va poyabzallar</p>
        </SwiperSlide>
        <SwiperSlide className="category__slider__item">
          <img
            src="https://olcha.uz/image/128x128/category/eMGaqVMlhSpffNNjX3KglXrMRvO0LKRyIFiHhujkihjkukwIMRPUgqvkB5rf."
            alt=""
          />
          <p>Kitoblar</p>
        </SwiperSlide>
        <SwiperSlide className="category__slider__item">
          <img
            src="https://olcha.uz/image/128x128/category/QABgOzSh1WTWkoFrE0KbcjWEucVaAwQBJgQjklPAtXaKwjp0v9ZYkF34uVPv."
            alt=""
          />
          <p>Mebel</p>
        </SwiperSlide>
        <SwiperSlide className="category__slider__item">
          <img
            src="https://olcha.uz/image/128x128/category/78jAtnkAgDOlj2JhxYHV8kV3mFfBtYEXkNLPYZCCBsOzr4C4HZpgVxT659DJ."
            alt=""
          />
          <p>Gamerlar uchun</p>
        </SwiperSlide>
        <SwiperSlide className="category__slider__item">
          <img
            src="https://olcha.uz/image/128x128/category/difdCHCdbpndST221TZmKFNSGUiwYIjRB8KPJRl1kVkTt2jyN4f8hnFgk68Q."
            alt=""
          />
          <p>Barchasi ta'mirlash va qurilish uchun</p>
        </SwiperSlide>
        <SwiperSlide className="category__slider__item">
          <img
            src="https://olcha.uz/image/128x128/category/hxPoXdRO3Fn00lAaiVuWbLM54oI81GeLrZF69z3kj3p1BuSdTMlddg27hxYX."
            alt=""
          />
          <p>Kantselyariya tovarlari</p>
        </SwiperSlide>
        <SwiperSlide className="category__slider__item">
          <img
            src="https://olcha.uz/image/128x128/category/KhQzj5jBMlUUQGQg3Pz5471WDpUa2nP1sOs2kdLPeuWE1FbdWKb84GLSMpQg."
            alt=""
          />
          <p>Elektrotransport</p>
        </SwiperSlide>
        <SwiperSlide className="category__slider__item">
          <img
            src="https://olcha.uz/image/128x128/category/7T2pcLY5hthpqtyllhQ3vpdFx9fqjoX0pvqaXSIbwjdRcumTH45wouMf006x."
            alt=""
          />
          <p>Sovg'alar va suvenirlar</p>
        </SwiperSlide>
        <SwiperSlide className="category__slider__item">
          <img
            src="https://olcha.uz/image/128x128/category/KlAd7LlcRu6bhfH6HNVboeRjIkNWhiAoM5WRDOs4r9TSI6uHaTcXB38MCvTR."
            alt=""
          />
          <p>Aqlli uy</p>
        </SwiperSlide>
        <SwiperSlide className="category__slider__item">
          <img
            src="https://olcha.uz/image/128x128/category/KmzkMXdYxyl1vNOjsdM2Ar4MXmfagR3Xu5pChXJ0h32P0VKbs8yXgNNC0B81."
            alt=""
          />
          <p>Qulay takliflar</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Category;
