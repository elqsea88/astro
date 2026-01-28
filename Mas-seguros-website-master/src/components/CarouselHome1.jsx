import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "../styles/swiper-carousel.css";
import { Pagination } from "swiper/modules";

export default function CarouselHome1() {
  const updatePaginationVisibility = (swiper) => {
    if (!swiper?.pagination?.el) return;
    swiper.pagination.el.style.display = swiper.isLocked ? "none" : "flex";
  };

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      watchOverflow
      grabCursor={true}
      pagination={{
        type: "custom",
        renderCustom: (_swiper, current, total) => {
          const safeTotal = total || 1;
          const index = Math.max(current - 1, 0);
          return `
            <div class="swiper-pagination-track mt-[10px]" style="--pagination-steps:${safeTotal};--pagination-index:${index}">
              <span class="swiper-pagination-indicator bg-[#FAB951]"></span>
            </div>
          `;
        }
      }}
      breakpoints={{
        360: { 
          slidesPerView: 1,
          spaceBetween: 0
        },
        728: {
          slidesPerView: 2,
          spaceBetween: 0
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 0
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 0
        }
      }}
      onInit={updatePaginationVisibility}
      onResize={updatePaginationVisibility}
      onBreakpoint={updatePaginationVisibility}
      onSlideChange={updatePaginationVisibility}
      onLock={updatePaginationVisibility}
      onUnlock={updatePaginationVisibility}
      modules={[Pagination]}
      className="mySwiper equalHeightSwiper"
    >
      <SwiperSlide className="equalHeightSlide">
        <div className="equalHeightCard flex w-full flex-col py-[32px] px-[24px] desktop:mx-[10px] tablet:mx-[15px] mobile:mx-[22px] bg-[#FAFAFA] rounded-[8px] shadow-[0px_1px_4px_rgba(12,12,13,0.1),0px_1px_4px_rgba(12,12,13,0.05)]">
          <img src="/images/slider-home-1/icono-1.svg" className="mb-[24px] w-[70px]" />
          <h5 className="desktop:text-h5 laptop:text-h5 tablet:text-[20px] mobile:text-[24px] mb-[12px]">
            Protección estratégica
          </h5>
          <p>
            Somos tu broker de seguros, especializado en soluciones tecnológicas para proteger tu operación, validado por más de 71 mil unidades aseguradas.
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide className="equalHeightSlide">
        <div className="equalHeightCard flex w-full flex-col py-[32px] px-[24px] desktop:mx-[10px] tablet:mx-[15px] mobile:mx-[22px] bg-[#FAFAFA] rounded-[8px] shadow-[0px_1px_4px_rgba(12,12,13,0.1),0px_1px_4px_rgba(12,12,13,0.05)]">
          <img src="/images/slider-home-1/icono-2.svg" className="mb-[24px] w-[77px]" />
          <h5 className="desktop:text-h5 laptop:text-h5 tablet:text-[20px] mobile:text-[24px] mb-[12px]">
            Tarifas inmejorables
          </h5>
          <p>Las garantías esenciales para tu empresa al mejor precio.</p>
        </div>
      </SwiperSlide>

      <SwiperSlide className="equalHeightSlide">
        <div className="equalHeightCard flex w-full flex-col py-[32px] px-[24px] desktop:mx-[10px] tablet:mx-[15px] mobile:mx-[22px] bg-[#FAFAFA] rounded-[8px] shadow-[0px_1px_4px_rgba(12,12,13,0.1),0px_1px_4px_rgba(12,12,13,0.05)]">
          <img src="/images/slider-home-1/icono-3.svg" className="mb-[24px] w-[71px]" />
          <h5 className="desktop:text-h5 laptop:text-h5 tablet:text-[20px] mobile:text-[24px] mb-[12px]">
            Personal comprometido
          </h5>
          <p>Garantizamos atención personalizada y soluciones a tu medida. </p>
        </div>
      </SwiperSlide>

      <SwiperSlide className="equalHeightSlide">
        <div className="equalHeightCard flex w-full flex-col py-[32px] px-[24px] desktop:mx-[10px] tablet:mx-[15px] mobile:mx-[22px] bg-[#FAFAFA] rounded-[8px] shadow-[0px_1px_4px_rgba(12,12,13,0.1),0px_1px_4px_rgba(12,12,13,0.05)]">
          <img src="/images/slider-home-1/icono-4.svg" className="mb-[24px] w-[68px]" />
          <h5 className="desktop:text-h5 laptop:text-h5 tablet:text-[20px] mobile:text-[24px] mb-[12px]">
            Calidad certificada
          </h5>
          <p>Nuestros más de 5 mil clientes nos califican con un NPS superior a 80.</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
