import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTittle from "../../Shared/SectionTittle/SectionTittle";

const Categories = () => {
  return (
    <section>
      <SectionTittle
        subHead="From 11:00AM to 10:00PM"
        mainHead="order online"
      />
      <div className="swipeBody px-10 md:px-24 lg:px-32 pb-20">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper "
        >
          <SwiperSlide className="py-12">
            <img src={slide1} className="max-h-[450px] max-w-[310px]" alt="" />
            <p className="absolute bottom-24 text-lg md:text-2xl lg:text-3xl text-white font-semibold">
              SALADS
            </p>
          </SwiperSlide>
          <SwiperSlide className="py-12">
            <img src={slide2} className="max-h-[450px] max-w-[310px]" alt="" />
            <p className="absolute bottom-24 text-lg md:text-2xl lg:text-3xl text-white font-semibold">
              PIZZAS
            </p>
          </SwiperSlide>
          <SwiperSlide className="py-12">
            <img src={slide3} className="max-h-[450px] max-w-[310px]" alt="" />
            <p className="absolute bottom-24 text-lg md:text-2xl lg:text-3xl text-white font-semibold">
              SOUP
            </p>
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <img src={slide4} className="max-h-[450px] max-w-[310px]" alt="" />
            <p className="absolute bottom-24 text-lg md:text-2xl lg:text-3xl text-white font-semibold">
              CAKE
            </p>
          </SwiperSlide>
          <SwiperSlide className="py-12">
            <img src={slide5} className="max-h-[450px] max-w-[310px]" alt="" />
            <p className="absolute bottom-24 text-lg md:text-2xl lg:text-3xl text-white font-semibold">
              VEG
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Categories;
