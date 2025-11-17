import React, { useState, useEffect } from "react";

function Header({ onSearch }) {
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [query, setQuery] = useState("");


  // Hide / Show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrollUp(current < lastScroll || current < 10); 
      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[200] transition-all duration-300
      ${scrollUp ? "translate-y-0" : "-translate-y-full"}
      bg-black/50 backdrop-blur-lg border-b border-white/10 shadow-lg`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-cyan-400 cursor-pointer">
          AnimeVerse
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-lg text-white">
          <li>
            <a 
              href="#home"
              className="hover:text-cyan-300 transition cursor-pointer"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#featured"
              className="hover:text-cyan-300 transition cursor-pointer"
            >
              Top Anime
            </a>
          </li>

          <li className="hover:text-cyan-300 transition cursor-pointer">
            Trending
          </li>

          <li className="hover:text-cyan-300 transition cursor-pointer">
            Watchlist
          </li>
        </ul>


        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search anime..."
          onChange={(e) => onSearch(e.target.value)}
          className="hidden md:block px-4 py-2 rounded-lg bg-[#222] text-white border border-gray-700 
                     focus:outline-none focus:border-cyan-400 transition"
        />

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-3xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111] border-t border-gray-800 py-4 px-6 space-y-3 text-white">
          <p className="hover:text-cyan-300">Home</p>
          <p className="hover:text-cyan-300">Top Anime</p>
          <p className="hover:text-cyan-300">Upcoming</p>
          <p className="hover:text-cyan-300">Movies</p>
          <p className="hover:text-cyan-300">Genres</p>
          <input
            type="text"
            placeholder="Search anime..."
            onChange={(e) => onSearch(e.target.value)}
            className="px-4 py-2 rounded-lg bg-[#222] text-white border border-gray-700 w-full
                       focus:outline-none focus:border-cyan-400 transition"
          />
        </div>
      )}
    </header>
  );
}

export default Header;
