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
  const [genre, setGenre] = useState(null);
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Fetch Anime (handles search + genre + top + infinite scroll)
  const fetchAnime = (reset = false) => {
    if (loading) return;
    setLoading(true);

    let url = `https://api.jikan.moe/v4/anime?page=${page}`;

    if (query.trim() !== "") {
      url = `https://api.jikan.moe/v4/anime?q=${query}&page=${page}`;
    } 
    else if (genre !== null) {
      url = `https://api.jikan.moe/v4/anime?genres=${genre}&page=${page}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (reset) {
          setAnimeList(data.data);
        } else {
          setAnimeList((prev) => [...prev, ...data.data]);
        }

        setHasMore(data.pagination.has_next_page);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  // Initial load (Top anime)
  useEffect(() => {
    fetchAnime(true);
  }, []);

  // Search listener
  useEffect(() => {
    setPage(1);
    fetchAnime(true);
  }, [query]);

  // Genre listener
  useEffect(() => {
    setPage(1);
    fetchAnime(true);
  }, [genre]);

  // Infinite scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 200 >=
        document.documentElement.scrollHeight
      ) {
        if (hasMore && !loading) {
          setPage((prev) => prev + 1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading]);

  // When page changes → fetch next page  
  useEffect(() => {
    if (page > 1) fetchAnime();
  }, [page]);

  return (
    <>
      <Header onSearch={setQuery} onGenreSelect={setGenre} />
      <Hero />

      <div id="featured" className="flex flex-wrap justify-center gap-10 mt-20">
        {animeList.map((anime) => (
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

      {loading && <p className="text-white mt-10">Loading more...</p>}

      {selectedAnime && (
        <AnimeModal anime={selectedAnime} onClose={() => setSelectedAnime(null)} />
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
