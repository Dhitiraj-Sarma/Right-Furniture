import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../slices/cartSlice";

function CartOffset() {
  const [open, SetOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveitem = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <button
        onClick={() => SetOpen(true)}
        className="bg-teal-100 relative h-10 w-10 cursor-pointer flex justify-center items-center rounded-full hover:bg-teal-200 transition-colors duration-500"
      >
        <span className="bg-red-500 text-white text-xs absolute top-0 right-0 h-4 w-4 rounded-full">
          {cartItems.length}
        </span>
        <FaCartShopping />
      </button>
      <div
        className={`w-full h-full max-h-screen z-50 fixed top-0 right-0 transition-opacity duration-500 ease-in-out ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`bg-white w-full max-w-sm h-full ml-auto z-[9] fixed top-0 right-0 transition-transform duration-500 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="w-full flex justify-center items-center px-3 py-2">
            <div className="w-11/12">
              <h1 className="font-bold">My Cart</h1>
            </div>
            <div className="w-1/12">
              <button onClick={() => SetOpen(false)} className="p-3">
                <IoMdClose />
              </button>
            </div>
          </div>
          <div className="w-full p-3">
            <ul>
              {cartItems.length > 0 &&
                cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex bg-gray-50 group cursor-pointer my-2 px-2 py-3 justify-center items-center gap-4"
                  >
                    <div className="w-24 h-24 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h1 className="font-bold text-lg">{item.name}</h1>
                      <h4 className="text-lime-600 text-sm py-2">
                        $ {item.price}
                      </h4>
                    </div>
                    <div>
                      <button
                        onClick={() => handleRemoveitem(item.id)}
                        className="text-red-500 opacity-0 group-hover:opacity-100"
                      >
                        <FaRegTrashAlt />
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div
          className={`h-full w-full bg-gray-300 fixed top-0 left-0 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 transition-opacity duration-500 ease-linear z-[8] ${
            open ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default CartOffset;
