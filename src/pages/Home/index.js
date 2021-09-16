import React, { useState, useEffect } from 'react';
import { Banner, MovieList } from '../../components/Home';
import { getPhotos } from '../../api'

const Home = () => {
  const [photos, setPhotos] = useState([])
  const fetchPhoto = async () => {
    const { data } = await getPhotos()
    setPhotos(data.results)
  }
  useEffect(() => {
    fetchPhoto()
  }, [])

  return (
    <>
      <Banner/>
      <div className="home-content-wrapper">
        <MovieList photos={photos}/>
        <MovieList photos={photos}/>
      </div>
    </>
  );
};

export default Home;
