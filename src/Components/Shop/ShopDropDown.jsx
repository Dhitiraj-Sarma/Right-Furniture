/* eslint-disable react/prop-types */
import { useState } from "react";

function ShopDropDown({ products, sortedData }) {
  const [shopDropDown, setShopDropDown] = useState("");
  const handleSortChange = (e) => {
    const value = e.target.value;

    setShopDropDown(value);
    let sortedProduct = [...products];
    switch (value) {
      case "price-asc":
        sortedProduct.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sortedProduct.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        sortedProduct.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        sortedProduct.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }
    sortedData(sortedProduct);
  };
  return (
    <div>
      <select
        className="focus:outline-none border border-gray-400 py-2 px-3 rounded-md bg-[#f4ede4]"
        id="shopDropDown"
        value={shopDropDown}
        onChange={handleSortChange}
      >
        <option value="">Select...</option>
        <option value="price-asc"> Price: Low to High</option>
        <option value="price-desc"> Price: High to Low</option>
        <option value="name-asc"> Name: A to Z</option>
        <option value="name-desc"> Name: Z to A</option>
      </select>
    </div>
  );
}

export default ShopDropDown;
