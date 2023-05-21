
import {  useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import { FreeMode, Navigation, Thumbs } from "swiper";




const ProductImages = ({data}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        // style={{
        //   "--swiper-navigation-color": "#fff",
        //   "--swiper-pagination-color": "#fff",
        // }}
        spaceBetween={10}
        loop={true}
        // navigation={true}
        pagination={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {
          data?.gallery?.map((item, i) => (
            <SwiperSlide key={i} className="bg-[#F5F5F5] rounded-3xl">
            <img src={item} className="w-full h-full pt-6 md:pt-[35px] pb-[14px] md:pb-6 px-[45px] md:px-[86px]"/>
          </SwiperSlide>
          ))
        }
       
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {
          data?.gallery?.map((item, i) => (
            <SwiperSlide key={i} className="bg-[#F5F5F5] rounded-xl border border-primary_3 h-[166px] overflow-hidden">
            <img src={item} className="w-full"/>
          </SwiperSlide>
          ))
        }
       
      </Swiper>
    </>
      );
};

export default ProductImages;