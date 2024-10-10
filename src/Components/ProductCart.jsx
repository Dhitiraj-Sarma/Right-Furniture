import { FaRegEye, FaRegHeart } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

/* eslint-disable react/prop-types */
function ProductCart({ data }) {
  const dispatch = useDispatch();

  const handleAddtoCart = () => {
    dispatch(addToCart(data));
  };

  return (
    <div className="w-full h-full cursor-pointer group">
      <div className="relative overflow-hidden">
        <img src={data.images[0]} alt={data.name} />
        <div className="absolute -bottom-20 group-hover:bottom-2 transition-all duration-500 ease-in-out w-full">
          <button
            onClick={handleAddtoCart}
            className="w-11/12 block mx-auto bg-teal-400 text-white font-semibold hover:bg-teal-500 transition-colors duration-500 py-2"
          >
            Add to Cart
          </button>
        </div>
        <div className="p-2 text-xl flex flex-col absolute top-2 -right-20 group-hover:right-2 transition-all duration-500 ease-in-out gap-3">
          <button className="bg-teal-200 p-3 rounded-full hover:bg-teal-400 transition-colors duration-500">
            <FaRegHeart />
          </button>
          <button className="bg-teal-200 p-3 rounded-full hover:bg-teal-400 transition-colors duration-500">
            <FaRegEye />
          </button>
        </div>
      </div>
      <div className="py-3">
        <div className="flex justify-between items-center">
          <h1 className="font-bold">{data.name}</h1>
          <h4 className="font-bold text-lime-700">${data.price}</h4>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
