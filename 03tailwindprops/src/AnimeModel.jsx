import React from "react";

function AnimeModal({ anime, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-[999]">

      {/* Modal Box */}
      <div className="w-[40rem] bg-[#111] rounded-xl shadow-2xl p-6 relative animate-scaleIn">

        {/* CLOSE BUTTON */}
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-white text-3xl hover:text-red-500 transition"
        >
          &times;
        </button>

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-cyan-300 mb-4">
          {anime.title}
        </h1>

        {/* POSTER + INFO */}
        <div className="flex gap-6">
          
          {/* POSTER */}
          <img 
            src={anime.images.jpg.large_image_url}
            className="w-[12rem] rounded-lg shadow-lg"
          />

          {/* DETAILS */}
          <div className="text-gray-300 text-sm flex flex-col gap-2">
            <p><span className="text-white">Rating:</span> ⭐ {anime.score}</p>
            <p><span className="text-white">Episodes:</span> {anime.episodes ?? "Unknown"}</p>

            <p><span className="text-white">Genres: </span>
              {anime.genres.map(g => g.name).join(", ")}
            </p>

            <p className="mt-2 text-gray-400 leading-relaxed">
              {anime.synopsis.length > 300
                ? anime.synopsis.slice(0, 300) + "..."
                : anime.synopsis}
            </p>

            {/* TRAILER BUTTON */}
            {anime.trailer?.url && (
              <a 
                href={anime.trailer.url}
                target="_blank"
                className="mt-4 w-fit px-4 py-2 rounded-lg bg-cyan-400 text-black
                           font-semibold hover:bg-cyan-300 transition"
              >
                Watch Trailer →
              </a>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}

export default AnimeModal;
