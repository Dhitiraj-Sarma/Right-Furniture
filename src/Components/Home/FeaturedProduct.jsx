import { useEffect, useState } from "react";
import ProductCart from "../ProductCart";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function FeaturedProduct() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./img/Products/products.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data.products);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 py-8 px-4">
        {data.length > 0 &&
          data.slice(0, 6).map((product) => (
            <div key={product.id} className="flex justify-center">
              <ProductCart data={product} />
            </div>
          ))}
      </div>
      <div className="flex justify-center py-5">
        <Link to="/shop">
          <button className="flex gap-2 items-center bg-teal-400 text-white font-semibold hover:bg-teal-500 transition-colors duration-500 py-3 px-6 rounded-md">
            View More <FaArrowRightLong />
          </button>
        </Link>
      </div>
    </>
  );
}

export default FeaturedProduct;
