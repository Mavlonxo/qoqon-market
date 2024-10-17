import React from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function Slider() {
  return (
    <div className="container">
      <div className="slider">
        <div className="slider__container">
          <Swiper
            navigation={false}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://olcha.uz/image/original/sliders/oz/9jVibVPeCoIX4NNj5otLURbeLVlkmedI5Ljc4CfjvP50r8mmkpbuZOiXk97T.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://olcha.uz/image/original/sliders/oz/3MppQfBpe21jpYJAGKpu5JQ4aAYTW93en84RTYXTGTmyQ8n0J0ZzgUwbJCPJ.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://olcha.uz/image/original/sliders/oz/uvEn3EO5i0IHvQSVd4NdP1syRFTU0Tq8CiUPDke7OHKOwBTrOodMpN3yo9us.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://olcha.uz/image/original/sliders/oz/xN70cAuWUDo3Per0VbjTNCzocvT8Cp96pZOJgVabzKQ2aKBQTU1YjICFSYNO.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://olcha.uz/image/original/sliders/oz/Ijkf35mnPhYkNVwIO1jCtDzmRzd5gS9cMaQKbtzWupeDiS7ZNCtLtNgxWebd.png"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="daily__products"></div>
      </div>
    </div>
  );
}

export default Slider;
