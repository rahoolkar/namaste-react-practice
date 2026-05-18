import { Link } from "react-router-dom";
import { SWIGGY_HEADER_LOGO } from "../utils/constant";
import LoginButton from "./LoginButton";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="mx-auto flex h-20 max-w-300 items-center justify-between px-4 lg:px-0">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center">
            <img
              src={SWIGGY_HEADER_LOGO}
              alt="Swiggy Logo"
              className="h-14 w-14 cursor-pointer transition duration-300 hover:scale-105 rounded-2xl"
            />
          </Link>

          <div className="hidden cursor-pointer items-center gap-2 md:flex">
            <span className="border-b-2 border-black text-sm font-bold text-black hover:text-[#fc8019] hover:border-[#fc8019]">
              Other
            </span>

            <span className="max-w-55 truncate text-sm text-gray-500">
              Chikan, Haryana, India
            </span>

            <i className="fa-solid fa-angle-down text-sm text-[#fc8019]"></i>
          </div>
        </div>

        <nav className="flex items-center gap-8">
          <Link
            to="/search"
            className="flex items-center gap-2 text-[16px] font-medium text-[#3d4152] transition hover:text-[#fc8019]"
          >
            <i className="fa-solid fa-magnifying-glass text-lg"></i>

            <span className="hidden lg:block">Search</span>
          </Link>

          <Link
            to="/offers"
            className="flex items-center gap-2 text-[16px] font-medium text-[#3d4152] transition hover:text-[#fc8019]"
          >
            <div className="relative">
              <i className="fa-solid fa-tag text-lg"></i>

              <span className="absolute -right-3 -top-2 text-[10px] font-bold text-[#fc8019]">
                NEW
              </span>
            </div>

            <span className="hidden lg:block">Offers</span>
          </Link>

          <Link
            to="/help"
            className="flex items-center gap-2 text-[16px] font-medium text-[#3d4152] transition hover:text-[#fc8019]"
          >
            <i className="fa-regular fa-circle-question text-lg"></i>

            <span className="hidden lg:block">Help</span>
          </Link>

          <Link
            to="/signin"
            className="flex items-center gap-2 text-[16px] font-medium text-[#3d4152] transition hover:text-[#fc8019]"
          >
            <i className="fa-regular fa-user text-lg"></i>

            <span className="hidden lg:block">Sign In</span>
          </Link>

          <Link
            to="/cart"
            className="flex items-center gap-2 text-[16px] font-medium text-[#3d4152] transition hover:text-[#fc8019]"
          >
            <div className="relative">
              <i className="fa-solid fa-cart-shopping text-lg"></i>

              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#fc8019] text-[10px] font-bold text-white">
                0
              </span>
            </div>

            <span className="hidden lg:block">Cart</span>
          </Link>

          {/* Login Button */}
          <div className="hidden md:block cursor-pointer">
            <LoginButton />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
