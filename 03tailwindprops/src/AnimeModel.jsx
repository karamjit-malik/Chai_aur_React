import React, { useState } from "react";

function AnimeModal({ anime, onClose }) {
  const [showTrailer, setShowTrailer] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-[999]">

      {/* MODAL BOX */}
      <div className="w-[40rem] bg-[#111] rounded-xl shadow-2xl p-6 relative animate-scaleIn">

        {/* CLOSE MODAL */}
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

        {/* POSTER + DETAILS */}
        <div className="flex gap-6">
          <img 
            src={anime.images.jpg.large_image_url}
            className="w-[12rem] rounded-lg shadow-lg"
          />

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

            {/* TRAILER BUTTON (LOCAL POPUP) */}
            {anime.trailer?.embed_url && (
              <button
                onClick={() => setShowTrailer(true)}
                className="mt-4 w-fit px-4 py-2 rounded-lg bg-cyan-400 text-white
                          font-semibold hover:bg-cyan-300 transition"
              >
                Watch Trailer →
              </button>
            )}
          </div>
        </div>
      </div>

      {/* TRAILER POPUP */}
      {showTrailer && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-[9999]">
          <div className="w-[40rem] h-[25rem] bg-black rounded-xl shadow-xl p-4 relative">

            <button
              onClick={() => setShowTrailer(false)}
              className="absolute -top-2 -right-2 text-white text-3xl hover:text-red-500"
            >
              ✕
            </button>

            <iframe
              width="100%"
              height="100%"
              src={anime.trailer.embed_url}
              title="Anime Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>

          </div>
        </div>
      )}

    </div>
  );
}

export default AnimeModal;
