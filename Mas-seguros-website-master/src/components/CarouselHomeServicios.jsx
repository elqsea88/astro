import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "../styles/swiper-carousel.css";
import { Pagination } from "swiper/modules";

export default function CarouselHomeServicios() {
  const bulletIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-[24px] w-[24px] shrink-0"
    >
      <g clipPath="url(#clip0_800_3937)">
        <path
          d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12Z"
          fill="#FAB951"
        />
        <path
          d="M17.0297 8.47008C17.3227 8.76305 17.3227 9.23648 17.0297 9.52945L11.0297 15.5295C10.7367 15.8224 10.2633 15.8224 9.97031 15.5295L6.96966 12.5295C6.67678 12.2365 6.67678 11.763 6.96966 11.4701C7.26258 11.1771 7.73742 11.1771 8.03039 11.4701L10.4789 13.938L15.9703 8.47008C16.2633 8.17664 16.7367 8.17664 17.0297 8.47008Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_800_3937">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
  const updatePaginationVisibility = (swiper) => {
    if (!swiper?.pagination?.el) return;
    swiper.pagination.el.style.display = swiper.isLocked ? "none" : "flex";
  };

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      watchOverflow
      pagination={{
        type: "custom",
        renderCustom: (_swiper, current, total) => {
          const safeTotal = total || 1;
          const index = Math.max(current - 1, 0);
          return `
            <div class="swiper-pagination-track" style="--pagination-steps:${safeTotal};--pagination-index:${index}">
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
          slidesPerView: 3,
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
          <div className="equalHeightCard group relative flex w-full flex-col desktop:mx-[10px] tablet:mx-[15px] mobile:mx-[22px] bg-[#FAFAFA] rounded-[8px] overflow-hidden shadow-[0px_1px_4px_rgba(12,12,13,0.1),0px_1px_4px_rgba(12,12,13,0.05)]">
            <input id="more-1" type="checkbox" className="peer hidden" />

            <img src="/images/slider-home-servicios/imagen-1.jpg" className="w-full tablet:h-[300px] mobile:h-[300px] object-cover" />

            <div className="py-[28px] px-[24px]">
              <h5 className="desktop:text-h5 laptop:text-h5 tablet:text-[20px] mobile:text-[20px] mb-[12px] text-[#1A767B]">
                MAS equipo pesado
              </h5>
              <p className="text-[#494949]">
                Equipo Pesado es un servicio que integra el seguro, MAS áreas especializadas para dar el mejor servicio.
              </p>

              <label
                htmlFor="more-1"
                className="mt-[16px] inline-flex cursor-pointer items-center gap-[6px] text-[16px] font-medium text-[#1A767B] laptop:hidden"
              >
                <span className="peer-checked:hidden inline-flex items-center gap-[6px] font-[600]">
                  Ver más
                  <svg
                    width="15"
                    height="9"
                    viewBox="0 0 15 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 8.61738C7.21783 8.61738 6.96106 8.50452 6.72968 8.27878L0.28781 1.68454C0.191874 1.59424 0.11851 1.49266 0.0677201 1.3798C0.0225734 1.26129 0 1.13431 0 0.998871C0 0.812641 0.0423251 0.643341 0.126975 0.490971C0.217269 0.3386 0.335779 0.22009 0.482506 0.13544C0.629233 0.0451467 0.795711 0 0.981941 0C1.25282 0 1.48984 0.10158 1.693 0.30474L7.91479 6.67889H7.09368L13.307 0.30474C13.5102 0.10158 13.7472 0 14.0181 0C14.2043 0 14.3708 0.0451467 14.5175 0.13544C14.6642 0.22009 14.7799 0.3386 14.8646 0.490971C14.9549 0.643341 15 0.812641 15 0.998871C15 1.26411 14.9041 1.49266 14.7122 1.68454L8.27032 8.27878C8.16309 8.39165 8.04458 8.4763 7.91479 8.53273C7.78499 8.58917 7.64673 8.61738 7.5 8.61738Z"
                      fill="#1A767B"
                    />
                  </svg>
                </span>
                <span className="hidden peer-checked:inline">Ver menos</span>
              </label>
            </div>

            <div
              className="
                absolute inset-0 bg-[#ffffff] text-color-negro flex flex-col justify-between py-[28px] px-[20px]  
                transition-transform duration-500 ease-out
                translate-y-full
                peer-checked:translate-y-0
                laptop:peer-checked:translate-y-full
                laptop:group-hover:translate-y-0
                laptop:group-focus-within:translate-y-0
              "
            >
              <div>
                <h5 className="text-[25px] font-[500] mb-[12px] text-[#1A767B]">MAS equipo pesado</h5>
                <p className="text-[17px] mb-[16px]">
                  Equipo Pesado es un servicio que integra el seguro, MAS áreas especializadas para dar el mejor servicio.
                </p>
                <ul className="space-y-[16px] tablet:text-[17px] mobile:text-[15px]">
                  <li className="flex items-start gap-[10px]">
                    {bulletIcon}
                    <span>Rastreo Satelital SIN COSTO con 90% de probabilidad de recuperación.</span>
                  </li>
                  <li className="flex items-start gap-[10px]">
                    {bulletIcon}
                    <span>Prevención, seguridad vial y asistencia legal 24/7.</span>
                  </li>
                  <li className="flex items-start gap-[10px]">
                    {bulletIcon}
                    <span>Respaldo comprobado con más de 71 mil unidades aseguradas y más de 5 mil clientes. </span>
                  </li>
                </ul>
              </div>

              <div className="mt-[24px]">
                <button class="flex items-center w-full justify-center gap-3 text-[16px] font-[500] text-white bg-color-verde rounded-[4px] px-[40px] py-[12px]">
                  <img src="/images/whatsapp-logo.svg" alt="WhatsApp" class="h-[24px] w-[24px]" />
                  Consulta a un asesor
                </button>

                <label
                  htmlFor="more-1"
                  className="mt-[10px] w-full block text-center py-[10px] rounded-[6px] border border-[#ccc] text-color-negro cursor-pointer laptop:hidden"
                >
                  Cerrar
                </label>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="equalHeightSlide">
          <div className="equalHeightCard group relative flex w-full flex-col desktop:mx-[10px] tablet:mx-[15px] mobile:mx-[22px] bg-[#FAFAFA] rounded-[8px] overflow-hidden shadow-[0px_1px_4px_rgba(12,12,13,0.1),0px_1px_4px_rgba(12,12,13,0.05)]">
            <input id="more-2" type="checkbox" className="peer hidden" />

            <img src="/images/slider-home-servicios/imagen-2.jpg" className="w-full tablet:h-[300px] mobile:h-[300px] object-cover" />

            <div className="py-[28px] px-[24px]">
              <h5 className="desktop:text-h5 laptop:text-h5 tablet:text-[20px] mobile:text-[20px] mb-[12px] text-[#1A767B]">
                MAS autos
              </h5>
              <p className="text-[#494949]">
                Plataforma digital de seguros automotrices que permite contratar de forma rápida y sencilla la mejor tarifa del mercado, integrando servicios de seguridad y respaldo legal que van más allá de la póliza tradicional.
              </p>

              <label
                htmlFor="more-2"
                className="mt-[16px] inline-flex cursor-pointer items-center gap-[6px] text-[16px] font-medium text-[#1A767B] laptop:hidden"
              >
                <span className="peer-checked:hidden inline-flex items-center gap-[6px] font-[600]">
                  Ver más
                  <svg
                    width="15"
                    height="9"
                    viewBox="0 0 15 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 8.61738C7.21783 8.61738 6.96106 8.50452 6.72968 8.27878L0.28781 1.68454C0.191874 1.59424 0.11851 1.49266 0.0677201 1.3798C0.0225734 1.26129 0 1.13431 0 0.998871C0 0.812641 0.0423251 0.643341 0.126975 0.490971C0.217269 0.3386 0.335779 0.22009 0.482506 0.13544C0.629233 0.0451467 0.795711 0 0.981941 0C1.25282 0 1.48984 0.10158 1.693 0.30474L7.91479 6.67889H7.09368L13.307 0.30474C13.5102 0.10158 13.7472 0 14.0181 0C14.2043 0 14.3708 0.0451467 14.5175 0.13544C14.6642 0.22009 14.7799 0.3386 14.8646 0.490971C14.9549 0.643341 15 0.812641 15 0.998871C15 1.26411 14.9041 1.49266 14.7122 1.68454L8.27032 8.27878C8.16309 8.39165 8.04458 8.4763 7.91479 8.53273C7.78499 8.58917 7.64673 8.61738 7.5 8.61738Z"
                      fill="#1A767B"
                    />
                  </svg>
                </span>
                <span className="hidden peer-checked:inline">Ver menos</span>
              </label>
            </div>

            <div
              className="
                absolute inset-0 bg-[#ffffff] text-color-negro flex flex-col justify-between py-[28px] px-[20px]  
                transition-transform duration-500 ease-out
                translate-y-full
                peer-checked:translate-y-0
                laptop:peer-checked:translate-y-full
                laptop:group-hover:translate-y-0
                laptop:group-focus-within:translate-y-0
              "
            >
              <div>
                <h5 className="text-[25px] font-[500] mb-[12px] text-[#1A767B]">MAS autos</h5>
                <p className="text-[17px] mb-[16px]">
                  Producto respaldado por MAS SEGUROS. MAS Protegido, imposible.
                </p>
                <ul className="space-y-[16px] tablet:text-[17px] mobile:text-[15px]">
                  <li className="flex items-start gap-[10px]">
                    {bulletIcon}
                    <span>Mejor tarifa garantizada, con una multi-cotización de 9 aseguradoras líderes.</span>
                  </li>
                  <li className="flex items-start gap-[10px]">
                    {bulletIcon}
                    <span>Seguridad y respaldo que incluye Rastreo Satelital SIN COSTO y Asistencia Legal 24/7.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-[24px]">
                <button class="flex items-center w-full justify-center gap-3 text-[16px] font-[500] text-white bg-color-verde rounded-[4px] px-[40px] py-[12px]">
                  <img src="/images/whatsapp-logo.svg" alt="WhatsApp" class="h-[24px] w-[24px]" />
                  Consulta a un asesor
                </button> 

                <label
                  htmlFor="more-2"
                  className="mt-[10px] w-full block text-center py-[10px] rounded-[6px] border border-[#ccc] text-color-negro cursor-pointer laptop:hidden"
                >
                  Cerrar
                </label>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="equalHeightSlide">
          <div className="equalHeightCard group relative flex w-full flex-col desktop:mx-[10px] tablet:mx-[15px] mobile:mx-[22px] bg-[#FAFAFA] rounded-[8px] overflow-hidden shadow-[0px_1px_4px_rgba(12,12,13,0.1),0px_1px_4px_rgba(12,12,13,0.05)]">
            <input id="more-3" type="checkbox" className="peer hidden" />

            <img src="/images/slider-home-servicios/imagen-3.jpg" className="w-full tablet:h-[300px] mobile:h-[300px] object-cover" />

            <div className="py-[28px] px-[24px]">
              <h5 className="desktop:text-h5 laptop:text-h5 tablet:text-[20px] mobile:text-[20px] mb-[12px] text-[#1A767B]">
                MAS personal y empresarial
              </h5>
              <p className="text-[#494949]">
                Broker integral especializado en brindar protección financiera y operativa mediante soluciones de seguros competitivas y totalmente personalizadas.
              </p>

              <label
                htmlFor="more-3"
                className="mt-[16px] inline-flex cursor-pointer items-center gap-[6px] text-[16px] font-medium text-[#1A767B] laptop:hidden"
              >
                <span className="peer-checked:hidden inline-flex items-center gap-[6px] font-[600]">
                  Ver más
                  <svg
                    width="15"
                    height="9"
                    viewBox="0 0 15 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 8.61738C7.21783 8.61738 6.96106 8.50452 6.72968 8.27878L0.28781 1.68454C0.191874 1.59424 0.11851 1.49266 0.0677201 1.3798C0.0225734 1.26129 0 1.13431 0 0.998871C0 0.812641 0.0423251 0.643341 0.126975 0.490971C0.217269 0.3386 0.335779 0.22009 0.482506 0.13544C0.629233 0.0451467 0.795711 0 0.981941 0C1.25282 0 1.48984 0.10158 1.693 0.30474L7.91479 6.67889H7.09368L13.307 0.30474C13.5102 0.10158 13.7472 0 14.0181 0C14.2043 0 14.3708 0.0451467 14.5175 0.13544C14.6642 0.22009 14.7799 0.3386 14.8646 0.490971C14.9549 0.643341 15 0.812641 15 0.998871C15 1.26411 14.9041 1.49266 14.7122 1.68454L8.27032 8.27878C8.16309 8.39165 8.04458 8.4763 7.91479 8.53273C7.78499 8.58917 7.64673 8.61738 7.5 8.61738Z"
                      fill="#1A767B"
                    />
                  </svg>
                </span>
                <span className="hidden peer-checked:inline">Ver menos</span>
              </label>
            </div>

            <div
              className="
                absolute inset-0 bg-[#ffffff] text-color-negro flex flex-col justify-between py-[28px] px-[20px]  
                transition-transform duration-500 ease-out
                translate-y-full
                peer-checked:translate-y-0
                laptop:peer-checked:translate-y-full
                laptop:group-hover:translate-y-0
                laptop:group-focus-within:translate-y-0
              "
            >
              <div>
                <h5 className="text-[25px] font-[500] mb-[12px] text-[#1A767B]">MAS personal y empresarial</h5>
                <p className="text-[17px] mb-[16px]">
                  MAS Líneas Personales ofrece el mismo respaldo y experiencia de más de 30 años en seguros:
                </p>
                <ul className="space-y-[16px] tablet:text-[17px] mobile:text-[15px]">
                  <li className="flex items-start gap-[10px]">
                    {bulletIcon}
                    <span>La mejor cobertura y precio, con una multi-cotización avanzada de 17 aseguradoras líderes.</span>
                  </li>
                  <li className="flex items-start gap-[10px]">
                    {bulletIcon}
                    <span>Experiencia comprobada de más de tres décadas estructurando pólizas y gestionando siniestros complejos.</span>
                  </li>
                  <li className="flex items-start gap-[10px]">
                    {bulletIcon}
                    <span>Solución integral con una sola plataforma para seguros personales, empresariales y de protección financiera.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-[24px]">
                <button class="flex items-center w-full justify-center gap-3 text-[16px] font-[500] text-white bg-color-verde rounded-[4px] px-[40px] py-[12px]">
                  <img src="/images/whatsapp-logo.svg" alt="WhatsApp" class="h-[24px] w-[24px]" />
                  Consulta a un asesor
                </button>

                <label
                  htmlFor="more-3"
                  className="mt-[10px] w-full block text-center py-[10px] rounded-[6px] border border-[#ccc] text-color-negro cursor-pointer laptop:hidden"
                >
                  Cerrar
                </label>
              </div>
            </div>
          </div>
        </SwiperSlide>



    </Swiper>
  );
}
