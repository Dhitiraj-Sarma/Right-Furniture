import {
  FaFacebook,
  FaRegCopyright,
  FaSquareInstagram,
  FaSquareTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full bg-slate-200">
      <div className="w-11/12 h-full mx-auto flex-wap flex-col  gap-3 px-3 py-3 md:flex-row flex md:justify-center justify-start  items-start ">
        <div className="flex flex-col flex-1">
          <h1 className="logo font-bold md:text-2xl text-xl py-2 title">
            Furniture
          </h1>
          <p className="text-sm text-slate-600 italic py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit sed, veniam quis doloremque, natus quos amet
            distinctio, odio molestiae animi molestias deleniti quo minima ea
            debitis vel officiis recusandae dolor.
          </p>
        </div>
        <div className="flex flex-col flex-1">
          <h1 className="font-bold title py-2 text-2xl">Quick Links</h1>
          <ul className="flex flex-col gap-3 w-fit">
            <Link to="/" className="font-bold hover:text-blue-600">
              Home
            </Link>
            <li className="font-bold hover:text-blue-600 cursor-pointer">
              About
            </li>
            <li className="font-bold hover:text-blue-600 cursor-pointer">
              Contact
            </li>
            <Link to="/shop" className="font-bold hover:text-blue-600">
              Shop
            </Link>
          </ul>
        </div>
        <div className="flex flex-col flex-1">
          <h1 className="font-bold title py-2 text-2xl">Terms & Conditions</h1>
          <ul className="flex flex-col gap-3 w-fit">
            <li className="font-bold hover:text-blue-600 cursor-pointer">
              Privacy Policy
            </li>
            <li className="font-bold hover:text-blue-600 cursor-pointer">
              Terms of use
            </li>
          </ul>
        </div>
        <div className="flex flex-col flex-1">
          <h1 className="font-bold title py-2 text-2xl">Social Links</h1>
          <ul className="flex text-2xl gap-3 w-fit">
            <li className="font-bold hover:text-blue-600 cursor-pointer">
              <button className="p-3 bg-teal-200 hover:bg-teal-300 transition-colors duration-500 rounded-md hover:text-white">
                <FaFacebook />
              </button>
            </li>
            <li className="font-bold hover:text-blue-600 cursor-pointer">
              <button className="p-3 bg-teal-200 hover:bg-teal-300 transition-colors duration-500 rounded-md hover:text-white">
                <FaSquareInstagram />
              </button>
            </li>
            <li className="font-bold hover:text-blue-600 cursor-pointer">
              <button className="p-3 bg-teal-200 hover:bg-teal-300 transition-colors duration-500 rounded-md hover:text-white">
                <FaSquareTwitter />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-between items-center border-t border-slate-600 w-11/12 mx-auto py-3">
        <h4 className="flex items-center justify-center gap-2 font-semibold">
          <FaRegCopyright /> All rights reserved.
        </h4>
        <img
          src="./img/card.png"
          alt="card"
          className="w-full h-full max-w-[200px]"
        />
      </div>
    </div>
  );
}

export default Footer;
