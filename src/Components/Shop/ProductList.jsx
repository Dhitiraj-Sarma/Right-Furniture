import { useEffect, useState } from "react";
import ProductCart from "../ProductCart";
import ShopDropDown from "./ShopDropDown";

function ProductList() {
  const [InitialProducts, setInitialProducts] = useState([]);
  const [data, setData] = useState(InitialProducts);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./img/Products/products.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data.products);
        setInitialProducts(data.products);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-end items-center w-full">
        <ShopDropDown products={InitialProducts} sortedData={setData} />
      </div>
      <div className="w-full grid grid-cols-4 py-5 px-3 gap-3">
        {data.length > 0 &&
          data.map((product) => (
            <div key={product.id}>
              <ProductCart data={product} />
            </div>
          ))}
      </div>
    </>
  );
}

export default ProductList;
