"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 sticky top-0 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">Satya-Dharmma</Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <ul
          className={`flex flex-col md:flex-row md:space-x-6 absolute md:static bg-gray-800 w-full md:w-auto left-0 top-16 md:top-0 transition-transform transform ${
            isOpen ? "translate-y-0" : "hidden md:flex md:translate-y-0"
          }`}
        >
          <li className={`border-b md:border-none ${pathname === "/" ? "text-green-400" : ""}`}>
            <Link
              href="/"
              className="block py-2 px-4 hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className={`border-b md:border-none ${pathname === "/books" ? "text-green-400" : ""}`}>
            <Link
              href="/books"
              className="block py-2 px-4 hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              Books
            </Link>
          </li>
          <li className={`border-b md:border-none ${pathname === "/photo" ? "text-green-400" : ""}`}>
            <Link
              href="/photo"
              className="block py-2 px-4 hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              Photo
            </Link>
          </li>

          <li className={`border-b md:border-none ${pathname === "/biography" ? "text-green-400" : ""}`}>
            <Link
              href="/biography"
              className="block py-2 px-4 hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              Biography
            </Link>
          </li>
          <li className={`border-b md:border-none ${pathname === "/about" ? "text-green-400" : ""}`}>
            <Link
              href="/about"
              className="block py-2 px-4 hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li className={`border-b md:border-none ${pathname === "/services" ? "text-green-400" : ""}`}>
            <Link
              href="/services"
              className="block py-2 px-4 hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li className={`border-b md:border-none ${pathname === "/contact" ? "text-green-400" : ""}`}>
            <Link
              href="/contact"
              className="block py-2 px-4 hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
