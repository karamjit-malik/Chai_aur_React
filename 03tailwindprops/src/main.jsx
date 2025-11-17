import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { useEffect, useState } from "react";
import Myapp from './Mine.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Hero from './Hero.jsx'
import AnimeModal from './AnimeModel.jsx';

function MainApp() {
  const [animeList, setAnimeList] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/anime")
      .then((res) => res.json())
      .then((data) => setAnimeList(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <Header onSearch={setQuery} />

        <Hero />
      </div>

     {animeList.length === 0 ? (
      <p className="text-white text-3xl mt-20">Loading...</p>
    ) : (
      <div
        id="featured"
        className="flex flex-wrap justify-center gap-10 mt-20"
      >
  {animeList
    .filter(anime => anime.title.toLowerCase().includes(query.toLowerCase()))
    .map((anime) => (
      <Myapp
        key={anime.mal_id}
        title={anime.title}
        image={anime.images.jpg.large_image_url}
        score={anime.score}
        episodes={anime.episodes}
        genres={anime.genres}
        synopsis={anime.synopsis}
        trailer={anime.trailer}
        onClick={() => setSelectedAnime(anime)}
      />
    ))}
</div>
      )}

      {selectedAnime && (
        <AnimeModal 
          anime={selectedAnime}
          onClose={() => setSelectedAnime(null)}
        />
      )}

      <Footer />
    </>
  );
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainApp />
  </StrictMode>
);
