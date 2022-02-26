import React, { useState } from "react";

export default function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  window.addEventListener("scroll", function () {
    if (window.pageYOffset >= 30) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  });
  return (
    <div
      className={`w-full fixed shadow-md z-50 transition-all duration-300${
        isScroll ? " bg-indigo-900" : ""
      }`}
    >
      <div
        className={`container mx-auto px-6 transition-all duration-300 flex justify-between items-center${
          isScroll ? " py-4" : " py-6"
        }`}
      >
        <a
          href="/"
          className={`text-xl ${
            isScroll ? "text-indigo-50" : "text-indigo-900"
          } font-semibold`}
        >
          Portfo<span className="text-cyan-200">lio. </span>
        </a>
        <div id="menu" className="space-x-2 hidden">
          <a
            href="/"
            className="text-white px-4 py-2 hover:bg-indigo-100 hover:text-indigo-500 rounded-full"
          >
            Home
          </a>
          <a
            href="/"
            className="text-white px-4 py-2 hover:bg-indigo-100 hover:text-indigo-500 rounded-full"
          >
            About
          </a>
          <a
            href="/"
            className="text-white px-4 py-2 hover:bg-indigo-100 hover:text-indigo-500 rounded-full"
          >
            Skills
          </a>
          <a
            href="/"
            className="text-white px-4 py-2 hover:bg-indigo-100 hover:text-indigo-500 rounded-full"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
