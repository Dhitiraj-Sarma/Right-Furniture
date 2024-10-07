import { Link } from "react-router-dom";

import { FaCartShopping, FaRegHeart } from "react-icons/fa6";

function Navbar() {
  const navItems = [
    {
      label: "Shop",
      path: "/shop",
    },
    {
      label: "Cart",
      path: "/cart",
    },
    {
      label: "Wishlist",
      path: "/wishlist",
    },
  ];
  return (
    <div className="w-full h-20 flex justify-center py-4 items-center">
      <div className="w-10/12 flex justify-center py-4 px-2 items-center">
        <div className="flex-1 ">
          <h1 className="logo font-bold text-2xl">
            <Link to="/">
              <img src="./img/logo.png" alt="logo" className="w-28 h-auto" />
            </Link>
          </h1>
        </div>
        <div className="flex-1 flex justify-center items-center ">
          <ul className="flex uppercase font-bold justify-center items-center gap-5">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 text-xl gap-5 flex justify-end items-center">
          <FaRegHeart />
          <FaCartShopping />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
