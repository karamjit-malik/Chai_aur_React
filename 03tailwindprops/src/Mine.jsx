import React from "react";

function Myapp({ title, image, score, episodes, synopsis, genres, trailer, onClick })
{
  return (
    <div onClick={onClick} className="relative w-[20rem] rounded-xl overflow-hidden bg-[#0E0E10] shadow-xl 
                    hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group">

      {/* IMAGE */}
      <div className="h-[28rem] w-full overflow-hidden">
        <img
          src={image}
          className="h-full w-full object-cover group-hover:brightness-75 transition-all duration-300"
        />
      </div>

      {/* TOP BADGE (Rating) */}
      <div className="absolute top-2 right-2 bg-black/70 backdrop-blur px-3 py-1 rounded-lg 
                      text-yellow-400 font-bold text-sm border border-yellow-500/40">
        ⭐ {score ?? "N/A"}
      </div>

      {/* GRADIENT OVERLAY ON HOVER */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0
                      group-hover:opacity-100 transition-all duration-300"></div>

      {/* BOTTOM INFO SECTION */}
      <div className="absolute bottom-0 w-full p-4 text-left 
                      flex flex-col gap-1 z-10">

        {/* TITLE */}
        <h2 className="text-white text-xl font-semibold group-hover:text-cyan-300 transition-all">
          {title}
        </h2>

        {/* EPISODE COUNT */}
        <p className="text-gray-300 text-sm">
          Episodes: {episodes ?? "Unknown"}
        </p>

        {/* BUTTON */}
        <button 
          className="mt-2 w-fit px-4 py-1 rounded-lg border border-cyan-400 text-cyan-300
                     hover:bg-cyan-400 hover:text-black transition-all text-sm font-semibold shadow">
          More Info →
        </button>
      </div>

    </div>
  );
}

export default Myapp;
