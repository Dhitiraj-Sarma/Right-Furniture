import Category from "../Components/Home/Category";
import FeaturedProduct from "../Components/Home/FeaturedProduct";
import HomeSlider from "../Components/Home/HomeSlider";
import OfficeBanner from "../Components/Home/OfficeBanner";

function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full">
        <HomeSlider />
      </div>
      <div className="w-11/12 py-5">
        <div className="py-2">
          <h1 className="title font-bold text-3xl">
            Find Your Style: Furniture Categories
          </h1>
        </div>
        <Category />
      </div>
      <div className="w-11/12 py-5">
        <div className="py-2">
          <h1 className="title font-bold text-3xl">
            Discover Our Featured Products
          </h1>
        </div>
        <FeaturedProduct />
      </div>
      <div className="w-11/12 py-5">
        <OfficeBanner />
      </div>
    </div>
  );
}

export default Home;
