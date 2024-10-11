import { FaRegEye, FaRegHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import { addToWishlist } from "../slices/wishlistSlice";

/* eslint-disable react/prop-types */
function ProductCart({ data }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const isInCart = cartItems.some((item) => item.id === data.id);
  const isInWishlist = wishlistItems.some((item) => item.id === data.id);

  const handleAddtoCart = () => {
    if (!isInCart) {
      dispatch(addToCart(data));
    }
  };
  const handleAddtoWishlist = () => {
    if (!isInWishlist) {
      dispatch(addToWishlist(data));
    }
  };

  return (
    <div className="w-full h-full cursor-pointer group">
      <div className="relative overflow-hidden">
        <img src={data.images[0]} alt={data.name} />
        <div className="absolute -bottom-20 group-hover:bottom-2 transition-all duration-500 ease-in-out w-full">
          <button
            onClick={handleAddtoCart}
            className={`w-11/12 block mx-auto ${
              isInCart
                ? "bg-gray-400 hover:bg-gray-500 "
                : "bg-teal-400  hover:bg-teal-500"
            }  font-semibold text-white transition-colors duration-500 py-2`}
          >
            {isInCart ? "Item in Cart" : "Add to Cart"}
          </button>
        </div>
        <div className="p-2 text-xl flex flex-col absolute top-2 -right-20 group-hover:right-2 transition-all duration-500 ease-in-out gap-3">
          <button
            onClick={handleAddtoWishlist}
            className={` ${
              isInWishlist
                ? "bg-gray-400 hover:bg-gray-500"
                : "bg-teal-200 hover:bg-teal-400"
            } p-3 rounded-full  transition-colors duration-500`}
          >
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
