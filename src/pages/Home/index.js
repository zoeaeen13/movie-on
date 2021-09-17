import React from 'react';
import { Banner, MovieList } from '../../components/Home';
import useFetchMovies from '../../hooks/useFetchMovies'
import { MOVIE_TYPE } from '../../constants'

const Home = () => {
  const [classicMovies] = useFetchMovies()
  const [romance] = useFetchMovies({ feature: MOVIE_TYPE.ROMANCE.id })
  const [mystery] = useFetchMovies({ feature: MOVIE_TYPE.MYSTERY.id })
  const [triller] = useFetchMovies({ feature: MOVIE_TYPE.THRILLER.id })

  return (
    <>
      <Banner/>
      <div className="home-content-wrapper">
        <MovieList movies={classicMovies} title="熱門經典"/>
        <MovieList movies={romance} title="浪漫愛情"/>
        <MovieList movies={mystery} title="推理懸疑"/>
        <MovieList movies={triller} title="驚悚恐怖"/>
      </div>
    </>
  );
};

export default Home;
