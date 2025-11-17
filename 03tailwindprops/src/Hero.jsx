import React from "react";

function Hero() {
  return (
    <>
    <header
      id="home"
      className="
        relative h-screen w-screen
        flex flex-col items-center justify-center text-center text-white
        bg-[url('/back.webp')]
        bg-no-repeat bg-cover bg-center
        overflow-hidden
      "
    >
      {/* overlay to darken the background */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* content */}
      <div className="relative z-10 px-4">
        <h1 className="font-bold text-5xl md:text-6xl mb-4">Anime World</h1>
        <p className="text-lg md:text-xl max-w-lg mx-auto">
          A place to binge all your favorite anime
        </p>
      </div>
    </header>
    <div>
        <h3 className="relative m-20 text-6xl font-semibold text-[#e94560] after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[.3rem] after:bg-[#e94560] after:rounded-full">
        Featured Anime
        </h3>
    </div>
    </>
  );
}

export default Hero;
