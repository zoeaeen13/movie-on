import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Banner, MovieList } from '../../components/Home';

const Home = () => {
  const [currentMovie, setCurrentMovie] = useState({ id: '', x: 0, y: 0 })
  return (
    <div>
      {currentMovie.id && (
        <Link
          className="movie-floating-card"
          to="/"
          style={{ top: currentMovie.y, left: currentMovie.x }}
        >
          <div className="movie-card-info">
            <iframe
              src={`https://www.youtube.com/embed/${currentMovie.id}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <div className="content">
              <div className="content-top">
                <h4>測試標題</h4>
                <div className="scores">分數</div>
              </div>
              <p className="preference">95% 適合您</p>
              <div className="tags">
                <p>機智風趣</p>
                <p>喜劇</p>
                <p>劇情片</p>
              </div>
            </div>
          </div>
        </Link>
      )}
      <Banner />
      <MovieList
        currentId={currentMovie.id}
        setCurrentMovie={setCurrentMovie}
      />
    </div>
  );
};

export default Home;
