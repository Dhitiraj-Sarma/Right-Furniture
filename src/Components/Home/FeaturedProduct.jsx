import { useEffect, useState } from "react";
import ProductCart from "../ProductCart";

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
    <div className="w-full grid grid-cols-4 py-5 gap-2 px-2">
      {data.length > 0 &&
        data.map((product) => (
          <div key={product.id}>
            <ProductCart data={product} />
          </div>
        ))}
    </div>
  );
}

export default FeaturedProduct;
