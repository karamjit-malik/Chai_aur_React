import React from "react";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-sm text-white z-50 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide text-purple-400">
          AnimeWorld
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-lg">
          <li>
            <a
              href="#hero"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#featured-anime"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              Anime
            </a>
          </li>
          <li>
            <a
              href="#movies"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              Movies
            </a>
          </li>
          <li>
            <a
              href="#community"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              Community
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon (optional) */}
        <button className="md:hidden text-2xl focus:outline-none">
          ☰
        </button>
      </nav>
    </header>
  );
}

export default Header;
