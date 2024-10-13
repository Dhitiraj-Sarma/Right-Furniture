import { useEffect, useState } from "react";
import ProductCart from "../ProductCart";
import { FaArrowRightLong } from "react-icons/fa6";

function BestSeller() {
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
      <div className="w-full lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid p-3 gap-3">
        {data.length > 0 &&
          data.slice(3, 9).map((product) => (
            <div key={product.id}>
              <ProductCart data={product} />
            </div>
          ))}
      </div>
      <button className="flex gap-2 items-center justify-center mx-auto bg-teal-400 text-white font-semibold hover:bg-teal-500 transition-colors duration-500 py-2 px-5 rounded-md">
        View More <FaArrowRightLong />
      </button>
    </>
  );
}

export default BestSeller;
