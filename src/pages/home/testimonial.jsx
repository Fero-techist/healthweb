import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const testimonial = [
  {
    id: 1,
    img: "/assets/Ellipse 13.png",
    name: "Sarah Ali Khan",
    category: "Cardiologist patient",
  },
  {
    id: 2,
    img: "/assets/Ellipse 15.png",
    name: "Simon Targett",
    category: "Neurologistgist patient",
  },
  {
    id: 3,
    img: "/assets/Ellipse 17.png",
    name: "Sarah Ali Khan",
    category: "Cardiologist patient",
  },
  {
    id: 4,
    img: "/assets/Ellipse 13.png",
    name: "Simon Targett",
    category: "Neurologist patient",
  },
  {
    id: 5,
    img: "/assets/Ellipse 15.png",
    name: "Sarah Ali Khan",
    category: "Cardiologist patient",
  },
  {
    id: 6,
    img: "/assets/Ellipse 17.png",
    name: "Simon Targett",
    category: "Neruologist patient",
  },
];

const Testimonial = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="py-6 lg:mx-24"
    >
      {testimonial.map((item) => (
        <SwiperSlide
          className="bg-white rounded-lg shadow-xl py-5 my-3 px-4 flex items-start gap-2"
          key={item.id}
        >
          <img src={item.img} className="md:w-[6rem] w-[2rem]" alt="" />
          <div>
            <h1 className="md:text-xl text-[0.7rem] text font-semibold">
              {item.name}
            </h1>
            <p className="py-1 text-sm">{item.category}</p>
            <img src="assets/Raiting.png" className="w-[5rem]" alt="" />
            <p className="md:text-[0.7rem] text-[0.4rem] text-deepGrey py-1">
              Thanks for all the services, no doubt it is the best hospital.
            </p>
          </div>
        </SwiperSlide>
      ))}

      {/* <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
    </Swiper>
  );
};

export default Testimonial;
