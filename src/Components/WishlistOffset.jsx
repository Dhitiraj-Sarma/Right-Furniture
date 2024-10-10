import { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

function WishlistOffset() {
  const [open, SetOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => SetOpen(true)}
        className="bg-teal-100 h-10 w-10 cursor-pointer flex justify-center items-center rounded-full hover:bg-teal-200 transition-colors duration-500"
      >
        <FaRegHeart />
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
              <h1 className="font-bold">My Wishlist</h1>
            </div>
            <div className="w-1/12">
              <button onClick={() => SetOpen(false)} className="p-3">
                <IoMdClose />
              </button>
            </div>
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

export default WishlistOffset;
