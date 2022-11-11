import React, { useContext } from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { references } from "../../constants/references"
import { Pagination } from "swiper";
import "swiper/css/pagination";

import { themeContext } from "../../Context";

const Testimonial = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="t-wrapper mx-4" id="testimonial">
      <div className="section-title">
        What my collegues get to say about me
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {references.map((reference, index) => {
          return (
            <SwiperSlide key={index}>
              <div className={'testimonial shadow pb-4 px-4 ' + (darkMode === false ? '' : 'border border-gray-600 dark')}>
                <img src={reference.img} alt="" />
                <span className="text-xl mt-1 font-bold">{reference.name}</span>
                <span className="text-sm text-gray-500">{reference.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
