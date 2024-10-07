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
            <SwiperSlide key={slide.id} className="max-h-[90vh] relative">
              <img src={slide.image} alt={slide.title} />
              <div className="absolute top-[34%] text-center w-full h-full">
                <h1 className="font-bold text-5xl text-slate-800">
                  {slide.title}
                </h1>
                <p className="text-base italic py-3 text-slate-700 font-semibold">
                  {slide.subtitle}
                </p>
                <Link to={slide.link}>
                  <button className="bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-400 transition duration-300 ease-in-out transform hover:scale-105">
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
