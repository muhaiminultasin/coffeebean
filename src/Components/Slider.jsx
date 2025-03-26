import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


const Carousel = () => {
  const sliderDetails = [
    { clone: "1", text: "Discover the beauty of nature with breathtaking landscapes and serene views." },
    { clone: "2", text: "Technology is evolving every day, shaping the future in unimaginable ways." },
    { clone: "3", text: "Healthy living starts with a balanced diet and regular physical activity." },
    { clone: "4", text: "Travel the world and experience different cultures, foods, and traditions." },
    { clone: "5", text: "Books open up new worlds, enriching the mind with knowledge and imagination." },
    { clone: "6", text: "Music has the power to heal, inspire, and bring people together." },
    { clone: "7", text: "Innovation drives progress, making life more efficient and exciting." },
    { clone: "8", text: "Art is a reflection of human emotions, history, and creativity." },
    { clone: "9", text: "Education is the key to unlocking one's true potential and achieving success." },
    { clone: "10", text: "Mindfulness and meditation can help reduce stress and improve well-being." }
  ];

  useEffect(() => {
    const swiperContainer = document.querySelector(".swiper");

    if (swiperContainer) {
      new Swiper(swiperContainer, {
        modules: [Navigation, Pagination, Autoplay],
        loop: true,
        autoplay: { delay: 3000, disableOnInteraction: true },
        pagination: { el: ".swiper-pagination", clickable: true },
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        breakpoints : {
          640:{
            slidesPerView:'1',
          },
          768:{
            slidesPerView:'2',
          },
          900:{
            slidesPerView:'3'
          }
        }
      });
    }
  }, []);

  return (
    <div className="w-full flex items-center px-10 md:px-20 mx-auto h-auto ">
      <div className="swiper min-w-lg">
        <div className="swiper-wrapper h-auto">
          {sliderDetails.map(({ clone, text }, i) => (
            <div key={i} className="swiper-slide h-auto text-secondary text-center flex flex-col items-center justify-center  p-4 my-5">
              <p className="text-4xl 2xl:text-[6rem]">{clone}</p>
              <p className="text-lg 2xl:text-[4rem] text-center mt-2 2xl:mt-14">{text}</p>
            </div>
          ))}
        </div>
        <div className="swiper-pagination h-auto "></div>
      </div>
    </div>
  );
};

export default Carousel;
