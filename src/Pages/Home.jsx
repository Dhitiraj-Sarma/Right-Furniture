import Footer from "../Components/Footer";
import BestSeller from "../Components/Home/BestSeller";
import Category from "../Components/Home/Category";
import FeaturedProduct from "../Components/Home/FeaturedProduct";
import HomeSlider from "../Components/Home/HomeSlider";
import OfficeBanner from "../Components/Home/OfficeBanner";
import NewsLetter from "../Components/NewsLetter";

function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full">
        <HomeSlider />
      </div>
      <div className="w-11/12 py-5">
        <div className="py-2">
          <h1 className="title font-bold text-3xl text-center">
            Find Your Style: Furniture Categories
          </h1>
        </div>
        <Category />
      </div>
      <div className="w-11/12 py-5">
        <div className="py-2">
          <h1 className="title font-bold text-3xl text-center">
            Discover Our Featured Products
          </h1>
        </div>
        <FeaturedProduct />
      </div>
      <div className="w-11/12 py-5">
        <OfficeBanner />
      </div>
      <div className="w-11/12 py-5">
        <div className="py-2">
          <h1 className="title font-bold text-3xl text-center">
            Discover Our Best Seller
          </h1>
        </div>
        <BestSeller />
      </div>
      <div className="w-11/12 py-5">
        <NewsLetter />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
