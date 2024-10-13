import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomeSlider() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./img/Hero_Slider/slider.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSlides(data.heroSlider);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {slides.length > 0 &&
          slides.map((slide) => (
            <SwiperSlide key={slide.id} className="relative max-h-[90vh]">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute sm:top-[40%] top-1/2 transform -translate-y-1/2 text-center w-full px-4">
                <h1 className="font-bold text-slate-800 text-xl sm:text-2xl lg:text-5xl">
                  {slide.title}
                </h1>
                <p className="text-sm sm:text-base lg:text-lg italic py-3 text-slate-700 font-semibold">
                  {slide.subtitle}
                </p>
                <Link to={slide.link}>
                  <button className="bg-teal-500 text-white font-semibold text-sm sm:text-base px-3 py-2 sm:px-6 sm:py-3 rounded-lg shadow-lg hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-400 transition duration-300 ease-in-out transform hover:scale-105">
                    {slide.buttonText}
                  </button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default HomeSlider;
