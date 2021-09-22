import React, { useRef } from 'react';
import Slider from 'react-slick';
import { MovieCard } from '../Movie'
import { Link } from 'react-router-dom';
import { removeCards } from '../../utils'

// eslint-disable-next-line react/prop-types
export const MovieList = ({ title, movies }) => {
  const sliderRef = useRef(null)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  }  

  return (
    <div className="movie-list-wrapper">
      <Link className="movie-list-title" to="/">{title}</Link>
      <div className="movie-list">
        <div className="slider-container">
          <button className="btn-previous" onClickCapture={() => {
            removeCards('.floating-card-wrapper')
            sliderRef.current?.slickPrev()
          }} />
          <Slider {...settings} ref={sliderRef}>
            {movies.map((data) => {
              return (
                <MovieCard key={data.id} data={data} />
            )})}
          </Slider>
          <button className="btn-next" onClickCapture={() => {
            removeCards('.floating-card-wrapper')
            sliderRef.current?.slickNext()
          }} />
        </div>
      </div>
    </div>
  );
};