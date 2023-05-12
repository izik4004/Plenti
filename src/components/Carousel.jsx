import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import { Navigation, Pagination, Scrollbar } from 'swiper';
// Import Swiper styles


export default () => {
  return (
    <Swiper
    modules={{Navigation, Pagination, Scrollbar}}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{clickable: true}}
      scrollbar={{draggable:true}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
    
    </Swiper>
  );
};