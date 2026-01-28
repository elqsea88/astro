import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "../styles/swiper-carousel.css";
import { Pagination } from "swiper/modules";

export default function CarouselNosotrosHistoria() {
  const swiperRef = useRef(null);

  const slides = [
    {
      title: "1980's",
      body: "Se crea MAS Seguros con la visión de ampliar una promotoría de seguros a un consorcio corporativo, integrando nuevos servicios al sector asegurador."
    },
    {
      title: "1990's",
      body: "Se crea MAS Seguros con la visión de ampliar una promotoría de seguros a un consorcio corporativo, integrando nuevos servicios al sector asegurador."
    },
    {
      title: "2000's",
      body: "Lanza productos innovadores para la mejor administración de riesgos. Aumenta su personal calificado y se compromete de forma entusiasta con sus clientes. Fortalece su negocio de líneas personales y lanza MAS Satelital y MAS Assistance."
    },
    {
      title: "2010's",
      body: "Nueva área de Servicio al Cliente enfocada en brindar acompañamiento cercano, ágil y especializado."
    },
    {
      title: "2020's",
      body: "MAS Seguros sigue creciendo y adaptándose a las necesidades del mercado como especialistas en equipo pesado con presencia a nivel nacional."
    }
  ];

  const loopSlides = [...slides, ...slides];

  const updatePaginationVisibility = (swiper) => {
    if (!swiper?.pagination?.el) return;
    swiper.pagination.el.style.display = swiper.isLocked ? "none" : "flex";
  };

  const updateCenterSlide = (swiper) => {
    if (!swiper?.slides?.length || !swiper?.el) return;

    requestAnimationFrame(() => {
      const containerRect = swiper.el.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      let closestSlide = null;
      let closestDistance = Number.POSITIVE_INFINITY;

      swiper.slides.forEach((slide) => {
        const rect = slide.getBoundingClientRect();
        if (!rect.width) return;
        const slideCenter = rect.left + rect.width / 2;
        const distance = Math.abs(slideCenter - containerCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSlide = slide;
        }
      });

      if (!closestSlide) return;

      swiper.slides.forEach((slide) => slide.classList.remove("is-center"));
      closestSlide.classList.add("is-center");
    });
  };

  const getEffectiveSlidesPerView = (swiper) => {
    const spv = swiper?.params?.slidesPerView;

    if (typeof spv === "number") return spv;

    if (typeof swiper?.slidesPerViewDynamic === "function") {
      const dyn = swiper.slidesPerViewDynamic();
      return typeof dyn === "number" && dyn > 0 ? dyn : 1;
    }

    return 1;
  };

  const centerClickedSlide = (swiper) => {
    if (!swiper) return;

    if (swiper.allowClick === false) return;

    const clickedIndex = swiper.clickedIndex;
    if (typeof clickedIndex !== "number" || clickedIndex < 0) return;

    const spv = getEffectiveSlidesPerView(swiper);
    const offset = Math.floor(spv / 2);
    const targetIndex = clickedIndex - offset;

    swiper.slideTo(targetIndex, 500);
  };

  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={15}
      grabCursor={true}
      loop={true}
      loopAdditionalSlides={slides.length}
      allowTouchMove={false}
      pagination={{
        type: "custom",
        renderCustom: (_swiper, current, total) => {
          const safeTotal = total || 1;
          const index = Math.max(current - 1, 0);
          return `
            <div class="swiper-pagination-track mt-[20px]" style="--pagination-steps:${safeTotal};--pagination-index:${index}">
              <span class="swiper-pagination-indicator bg-[#FAB951]"></span>
            </div>
          `;
        }
      }}
      breakpoints={{
        360: { slidesPerView: 1 },
        728: { slidesPerView: 3 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 5 }
      }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      onInit={(swiper) => {
        updatePaginationVisibility(swiper);
        updateCenterSlide(swiper);
      }}
      onResize={(swiper) => {
        updatePaginationVisibility(swiper);
        updateCenterSlide(swiper);
      }}
      onBreakpoint={(swiper) => {
        updatePaginationVisibility(swiper);
        updateCenterSlide(swiper);
      }}
      onSlideChangeTransitionEnd={(swiper) => {
        updatePaginationVisibility(swiper);
        updateCenterSlide(swiper);
      }}
      onTransitionEnd={updateCenterSlide}
      onLoopFix={updateCenterSlide}
      onLock={(swiper) => {
        updatePaginationVisibility(swiper);
        updateCenterSlide(swiper);
      }}
      onUnlock={(swiper) => {
        updatePaginationVisibility(swiper);
        updateCenterSlide(swiper);
      }}
      onClick={(swiper) => centerClickedSlide(swiper)}
      modules={[Pagination]}
      className="mySwiper equalHeightSwiper carouselNosotrosHistoria"
    >
      {loopSlides.map((slide, index) => (
        <SwiperSlide className="equalHeightSlide" key={`${slide.title}-${index}`}>
          <div className="equalHeightCard flex w-full flex-col justify-center py-[32px] px-[24px] bg-[#fff] rounded-[4px]">
            <h4 className="desktop:text-h4 laptop:text-h4 tablet:text-[24px] mobile:text-[30px] font-[500] text-center mb-[20px]">
              {slide.title}
            </h4>
            <p className="text-center text-[15px]">{slide.body}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
