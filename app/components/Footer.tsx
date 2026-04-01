import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcDiscover,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2d2d2d] text-gray-300">
      <div className="mx-auto max-w-300 px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-1 mb-4">
              <span className="text-[22px] font-bold text-white tracking-tight">
                <span className="text-[#1cbbb4]">W</span>IN
              </span>
              <span className="text-[11px] text-gray-400 -ml-0.5 mt-1">
                store
              </span>
            </Link>
            <p className="text-[12px] leading-relaxed text-gray-400 mb-4">
              Best information about the company goes here but now lorem ipsum
              is used.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-7 h-7 rounded-full bg-[#3b5998] flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <FaFacebookF className="text-white text-[10px]" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-7 h-7 rounded-full bg-[#1da1f2] flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <FaTwitter className="text-white text-[10px]" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-7 h-7 rounded-full bg-[#0077b5] flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <FaLinkedinIn className="text-white text-[10px]" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-7 h-7 rounded-full bg-[#c13584] flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <FaInstagram className="text-white text-[10px]" />
              </a>
            </div>
          </div>

          {/* Trending */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Trending</h4>
            <ul className="space-y-2 text-[12px]">
              <li>
                <a href="#" className="hover:text-[#1cbbb4] transition-colors">
                  Smartphones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1cbbb4] transition-colors">
                  Laptops
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1cbbb4] transition-colors">
                  DSLR &amp; Drones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1cbbb4] transition-colors">
                  Home Appliances
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1cbbb4] transition-colors">
                  TV &amp; Movies
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              Information
            </h4>
            <ul className="space-y-2 text-[12px]">
              <li>
                <a href="#" className="hover:text-[#1cbbb4] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1cbbb4] transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1cbbb4] transition-colors">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1cbbb4] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1cbbb4] transition-colors">
                  Terms &amp; Condition
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              Customer Care
            </h4>
            <ul className="space-y-2 text-[12px]">
              <li>
                <a href="#" className="hover:text-[#1cbbb4] transition-colors">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1cbbb4] transition-colors">
                  Discount
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1cbbb4] transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1cbbb4] transition-colors">
                  Order History
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1cbbb4] transition-colors">
                  Order Tracking
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-600">
        <div className="mx-auto max-w-300 px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-gray-500">
            © 2021 WINstore. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3">
            <FaCcVisa className="text-2xl text-gray-400 hover:text-white transition-colors" />
            <FaCcMastercard className="text-2xl text-gray-400 hover:text-white transition-colors" />
            <FaCcAmex className="text-2xl text-gray-400 hover:text-white transition-colors" />
            <FaCcDiscover className="text-2xl text-gray-400 hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}
