import { Link } from "react-router-dom";

import CartOffset from "./CartOffset";
import WishlistOffset from "./WishlistOffset";
import { BsShop, BsCart4 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";

function Navbar() {
  const navItems = [
    {
      label: "Shop",
      path: "/shop",
      icon: <BsShop />,
    },
    {
      label: "Cart",
      path: "/cart",
      icon: <BsCart4 />,
    },
    {
      label: "Wishlist",
      path: "/wishlist",
      icon: <FaRegHeart />,
    },
  ];
  return (
    <div className="w-full h-20 flex justify-center py-4 items-center sticky top-0 z-[100] bg-[#f3e7d6] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
      <div className="w-10/12 flex justify-center py-4 px-2 items-center">
        <div className="flex-1 ">
          <h1 className="logo font-bold text-2xl">
            <Link to="/">
              <img
                src="./img/logo.png"
                alt="logo"
                className="w-20 sm:w-28 h-auto"
              />
            </Link>
          </h1>
        </div>
        <div className="flex-1 flex justify-center items-center ">
          <ul className="flex uppercase font-bold justify-center items-center gap-5">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>
                  <span className="sm:block hidden">{item.label}</span>

                  <span className="block sm:hidden">{item.icon}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 text-xl sm:gap-5 gap-1 flex justify-end items-center">
          <WishlistOffset />
          <CartOffset />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
