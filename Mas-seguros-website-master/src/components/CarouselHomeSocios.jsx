import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "../styles/swiper-carousel.css";
import { Pagination, Autoplay } from "swiper/modules";

export default function CarouselHomeSocios() {
  const updatePaginationVisibility = (swiper) => {
    if (!swiper?.pagination?.el) return;
    swiper.pagination.el.style.display = swiper.isLocked ? "none" : "flex";
  };

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={25}
      watchOverflow
      loop={true}
      speed={3500} 
      freeMode={{
        enabled: true,
        momentum: false
      }}
      autoplay={{
        delay: 0,                
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
      breakpoints={{
        360: { slidesPerView: 1 },
        728: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
        1280: { slidesPerView: 7 }
      }}
      onInit={updatePaginationVisibility}
      onResize={updatePaginationVisibility}
      onBreakpoint={updatePaginationVisibility}
      onSlideChange={updatePaginationVisibility}
      onLock={updatePaginationVisibility}
      onUnlock={updatePaginationVisibility}
      modules={[Pagination, Autoplay]}
      className="mySwiper equalHeightSwiper"
    >
      <SwiperSlide className="equalHeightSlide">
        <div className="equalHeightCard flex w-full flex-row items-center justify-center">
          <img src="/images/socios/1.png" className="w-auto max-h-[70px]" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="equalHeightSlide">
        <div className="equalHeightCard flex w-full flex-row items-center justify-center">
          <img src="/images/socios/2.png" className="w-auto max-h-[70px]" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="equalHeightSlide">
        <div className="equalHeightCard flex w-full flex-row items-center justify-center">
          <img src="/images/socios/3.png" className="w-auto max-h-[70px]" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="equalHeightSlide">
        <div className="equalHeightCard flex w-full flex-row items-center justify-center">
          <img src="/images/socios/4.png" className="w-auto max-h-[70px]" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="equalHeightSlide">
        <div className="equalHeightCard flex w-full flex-row items-center justify-center">
          <img src="/images/socios/5.png" className="w-auto max-h-[70px]" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="equalHeightSlide">
        <div className="equalHeightCard flex w-full flex-row items-center justify-center">
          <img src="/images/socios/6.png" className="w-auto max-h-[70px]" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="equalHeightSlide">
        <div className="equalHeightCard flex w-full flex-row items-center justify-center">
          <img src="/images/socios/7.png" className="w-auto max-h-[70px]" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="equalHeightSlide">
        <div className="equalHeightCard flex w-full flex-row items-center justify-center">
          <img src="/images/socios/8.png" className="w-auto max-h-[70px]" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="equalHeightSlide">
        <div className="equalHeightCard flex w-full flex-row items-center justify-center">
          <img src="/images/socios/9.png" className="w-auto max-h-[70px]" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="equalHeightSlide">
        <div className="equalHeightCard flex w-full flex-row items-center justify-center">
          <img src="/images/socios/10.png" className="w-auto max-h-[70px]" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="equalHeightSlide">
        <div className="equalHeightCard flex w-full flex-row items-center justify-center">
          <img src="/images/socios/11.png" className="w-auto max-h-[70px]" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="equalHeightSlide">
        <div className="equalHeightCard flex w-full flex-row items-center justify-center">
          <img src="/images/socios/12.png" className="w-auto max-h-[70px]" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="equalHeightSlide">
        <div className="equalHeightCard flex w-full flex-row items-center justify-center">
          <img src="/images/socios/13.png" className="w-auto max-h-[70px]" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="equalHeightSlide">
        <div className="equalHeightCard flex w-full flex-row items-center justify-center">
          <img src="/images/socios/14.png" className="w-auto max-h-[70px]" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="equalHeightSlide">
        <div className="equalHeightCard flex w-full flex-row items-center justify-center">
          <img src="/images/socios/15.png" className="w-auto max-h-[70px]" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="equalHeightSlide">
        <div className="equalHeightCard flex w-full flex-row items-center justify-center">
          <img src="/images/socios/16.png" className="w-auto max-h-[70px]" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="equalHeightSlide">
        <div className="equalHeightCard flex w-full flex-row items-center justify-center">
          <img src="/images/socios/17.png" className="w-auto max-h-[70px]" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="equalHeightSlide">
        <div className="equalHeightCard flex w-full flex-row items-center justify-center">
          <img src="/images/socios/18.png" className="w-auto max-h-[70px]" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="equalHeightSlide">
        <div className="equalHeightCard flex w-full flex-row items-center justify-center">
          <img src="/images/socios/19.png" className="w-auto max-h-[70px]" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="equalHeightSlide">
        <div className="equalHeightCard flex w-full flex-row items-center justify-center">
          <img src="/images/socios/20.png" className="w-auto max-h-[70px]" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="equalHeightSlide">
        <div className="equalHeightCard flex w-full flex-row items-center justify-center">
          <img src="/images/socios/21.png" className="w-auto max-h-[70px]" />
        </div>
      </SwiperSlide>


    </Swiper>
  );
}
