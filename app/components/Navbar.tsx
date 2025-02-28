"use client"; // Add this directive at the top to mark it as a Client Component

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Use usePathname instead of useRouter

interface NavItem {
  name: string;
  path: string;
}

const navItems: NavItem[] = [
  { name: 'Engagement Rings', path: '/engagement-rings' },
  { name: 'Wedding Rings', path: '/wedding-rings' },
  { name: 'Diamonds', path: '/diamonds' },
  { name: 'Gemstones', path: '/gemstones' },
  { name: 'Jewelry', path: '/jewelry' },
  { name: 'Gifts', path: '/gifts' },
  { name: 'About', path: '/about' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Use usePathname to get the current path

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-white shadow-md">
      {/* Top banner */}
      <div className="bg-emerald-900 text-white text-sm p-2 text-center">
        ENDS SOON! Receive up to $450 of Jewelry with Purchase Over $1,000. Use Code SPARKLE in Cart.
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side - Phone number and location */}
          <div className="flex items-center space-x-8 mb-4 md:mb-0">
            <span className="text-sm text-gray-600">111.222.3333</span>
            <span className="text-sm text-gray-600 flex items-center gap-1">
            <svg
                className="w-5 h-5"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.4"
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                />
              </svg>
                Store Location{' '}

                </span>
          </div>

          {/* Logo - Centered at all times */}
          <div className="flex justify-center mb-4 md:mb-0 md:flex-1">
            <Link href="/" className="text-2xl font-bold">
              PROTOTYPE
            </Link>
          </div>

          {/* Right side - Search, Account, Cart, Currency, Hamburger */}
          <div className="flex items-center space-x-9">
            {/* <input
              type="text"
              placeholder="Search"
              className="border rounded p-2 hidden md:block"
            /> */}
            <button className="text-gray-600 flex items-center gap-1 hover:text-gray-800">
              <svg
                className="w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.4"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
            <button className="text-gray-600 flex items-center gap-1 hover:text-gray-800">
              <svg
                className="w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.4"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
            <select className="text-gray-600">
              <option value="USD">USD 🇺🇸</option>
            </select>

            {/* Hamburger menu for mobile */}
            <button
              className="md:hidden text-gray-600"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation items */}
      <div className="border-t flex items-center justify-center border-gray-200">
        <div className="container  flex items-center justify-center">
          {/* Desktop navigation */}
          <ul className="hidden md:flex space-x-4 py-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`text-gray-700 text-sm uppercase hover:text-gray-900 px-4 py-2 ${
                    pathname === item.path ? 'font-bold border-b-2 border-darkGreen' : ''
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile navigation */}
          <div
            className={`md:hidden ${
              isMenuOpen ? 'max-h-screen' : 'max-h-0'
            } overflow-hidden transition-max-height duration-300 ease-in-out`}
          >
            <ul className="py-4">
              {navItems.map((item) => (
                <li key={item.path} className="py-2">
                  <Link
                    href={item.path}
                    className={`block px-4 text-gray-700 hover:text-gray-900 ${
                      pathname === item.path ? 'font-bold' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;