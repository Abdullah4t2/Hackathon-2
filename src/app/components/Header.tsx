import { FaCartArrowDown } from "react-icons/fa";
import { LuSofa } from "react-icons/lu";
import Image from "next/image";

export default function Header() {
  return (
    <>
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-gray-200">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <LuSofa />
          <span className="text-xl font-bold">Comforty</span>
        </div>

        {/* Right: Cart Icon */}
        <div className="flex items-center space-x-4">
          <FaCartArrowDown className="text-xl text-gray-700 cursor-pointer" />
        </div>
      </header>

      {/* Navbar - Positioned Beneath the Header */}
      <nav className="bg-white w-full border-t border-gray-300">
        <div className="container mx-auto flex justify-center space-x-8 py-3">
          <a href="#" className="text-gray-700 hover:text-blue-500 transition">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500 transition">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500 transition">
            Shop
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500 transition">
            Product
          </a>
        </div>
      </nav>
    </>
  );
}
