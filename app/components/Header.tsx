import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaChevronDown,
  FaTwitter,
  FaHeart,
} from "react-icons/fa";

export default function Header() {
  return (
    <header>
      {/* Top bar */}
      <div className="bg-[#03484c] text-white">
        <div className="mx-auto max-w-300 px-4 flex items-center justify-between h-12.5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className="text-[22px] font-bold text-white tracking-tight">
              <span className="text-[#1cbbb4]">W</span>IN
            </span>
            <span className="text-[11px] text-gray-300 -ml-0.5 mt-1">
              store
            </span>
          </Link>

          {/* Search bar */}
          <div className="hidden md:flex items-center flex-1 max-w-125 mx-8">
            <input
              type="text"
              placeholder="Search Products Here....."
              className="w-full h-9 px-4 text-sm text-gray-700 bg-white rounded-l-sm outline-none"
            />
            <button className="h-9 w-11 flex items-center justify-center bg-[#1cbbb4] rounded-r-sm hover:bg-[#18a8a2] transition-colors">
              <FaSearch className="text-white text-sm" />
            </button>
          </div>

          <div className="flex items-center gap-6 text-white">
            <button
              aria-label="Account"
              className="hover:text-[#1cbbb4] transition-colors"
            >
              <FaUser className="text-[15px]" />
            </button>
            <button
              aria-label="Account"
              className="hover:text-[#1cbbb4] transition-colors"
            >
              <FaHeart className="text-[15px]" />
            </button>
            <button
              aria-label="Cart"
              className="relative hover:text-[#1cbbb4] transition-colors"
            >
              <FaShoppingCart className="text-[15px]" />
              <span className="absolute -top-2 -right-2 bg-[#1cbbb4] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#0e3b3e] text-white">
        <div className="mx-auto max-w-300 justify-between px-4 flex items-center h-10.5 gap-6">
          <button className="flex items-center gap-2 bg-[#1cbbb4] h-full px-4 text-sm font-medium hover:bg-[#18a8a2] transition-colors">
            <span>Browse by Category</span>
            <FaChevronDown className="text-[10px]" />
          </button>
          <div className="hidden md:flex items-center gap-6 text-[13px]">
            <Link
              href="/"
              className="hover:text-[#1cbbb4] transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="#"
              className="hover:text-[#1cbbb4] transition-colors capitalize"
            >
              Easy monthly installments
            </Link>
            <Link
              href="#"
              className="hover:text-[#1cbbb4] transition-colors capitalize"
            >
              shop by brands
            </Link>
            <Link
              href="#"
              className="hover:text-[#1cbbb4] transition-colors capitalize"
            >
              become a vendor
            </Link>
          </div>
          <div className="hidden lg:flex items-center  gap-5 text-gray-300">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-white transition-colors"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-white transition-colors"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-white transition-colors"
            >
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
