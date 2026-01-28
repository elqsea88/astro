import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Manipulation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel({
  slides,
  slidesPerViewMobile = 1,
  slidesPerViewTablet = 2,
  slidesPerViewDesktop = 3,
  swiperParams = {},
  paginationContainerClass = "",
  imageClassName = "mb-4 w-full object-cover rounded",
  imageStyle = {},
  slideContainerClassName = "w-auto sm:w-full",
  slideContainerStyle = {}
}) {
  const slideRefs = useRef([]);
  const [maxHeight, setMaxHeight] = useState(0);
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  const updateHeights = () => {
    const heights = slideRefs.current.map((el) =>
      el ? el.getBoundingClientRect().height : 0
    );
    setMaxHeight(Math.max(...heights, 0));
  };

  useIsomorphicLayoutEffect(() => {
    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, [slides]);

  const defaultBreakpoints = {
    640: {
      slidesPerView: slidesPerViewTablet,
      centeredSlides: true,
      spaceBetween: swiperParams.spaceBetween ?? 16
    },
    1024: {
      slidesPerView: slidesPerViewDesktop,
      centeredSlides: false,
      spaceBetween: swiperParams.spaceBetween ?? 20,
      navigation: true
    }
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Manipulation]}
      slidesPerView={slidesPerViewMobile}
      centeredSlides={swiperParams.centeredSlides ?? true}
      spaceBetween={swiperParams.spaceBetween ?? 16}
      grabCursor={swiperParams.grabCursor ?? true}
      allowTouchMove={swiperParams.allowTouchMove ?? true}
      navigation={swiperParams.navigation ?? false}
      pagination={
        swiperParams.pagination ?? { el: ".custom-pagination", clickable: true }
      }
      breakpoints={swiperParams.breakpoints ?? defaultBreakpoints}
      style={swiperParams.style}
      className="w-full"
      wrapperClass="swiper-wrapper flex"
    >
      {slides.map((slide, idx) => {
        const descriptionHTML = slide.sup
          ? `${slide.text}<sup>${slide.sup}</sup>`
          : slide.text;

        const shadowClass = slide.shadowClassName || "";
        const borderClass = slide.borderClassName || "";

        return (
          <SwiperSlide key={idx} className="flex-shrink-0 flex justify-center">
            <div
              ref={(el) => (slideRefs.current[idx] = el)}
              className={`flex flex-col gap-2 px-6 py-8 rounded-grande ${
                slide.containerClassName || slideContainerClassName
              } ${shadowClass} ${borderClass}`}
              style={{
                height: maxHeight ? `${maxHeight}px` : undefined,
                backgroundColor: slide.bgColor,
                ...slideContainerStyle,
                ...slide.containerStyle
              }}
            >
              {slide.image && (
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={slide.imageClassName || imageClassName}
                  style={slide.imageStyle || imageStyle}
                />
              )}
              <p
                className="text-lg text-center leading-[1.3em] font-semibold"
                style={{ color: slide.titleColor }}
                dangerouslySetInnerHTML={{ __html: slide.title }}
              />
              <p
                className="text-sm text-center leading-[1.3em] whitespace-normal"
                style={{ color: slide.descColor }}
                dangerouslySetInnerHTML={{ __html: descriptionHTML }}
              />
            </div>
          </SwiperSlide>
        );
      })}

      {paginationContainerClass && (
        <div className={paginationContainerClass} />
      )}
    </Swiper>
  );
}
