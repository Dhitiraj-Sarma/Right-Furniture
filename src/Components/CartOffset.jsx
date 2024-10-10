import { FaCartShopping } from "react-icons/fa6";

function CartOffset() {
  return (
    <div>
      <button className="bg-teal-100 h-10 w-10 flex justify-center items-center rounded-full hover:bg-teal-200 transition-colors duration-500">
        <FaCartShopping />
      </button>
      <div className="w-full h-full max-h-screen z-50 fixed top-0 right-0">
        <div className="bg-white w-full z-[9] max-w-sm h-full ml-auto relative"></div>
        <div className="h-full w-full z-[8] bg-gray-300 fixed top-0 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 "></div>
      </div>
    </div>
  );
}

export default CartOffset;
