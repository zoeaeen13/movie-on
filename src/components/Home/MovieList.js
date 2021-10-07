import React, { useRef } from 'react'
import Slider from 'react-slick'
import { isEmpty } from 'lodash'
import { MovieCard } from '../Movie'
import { Link } from 'react-router-dom'
import { removeCards } from '../../utils'

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
        slidesToShow: 8,
        slidesToScroll: 8,
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
        slidesToShow: 6,
        slidesToScroll: 6,
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
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
  ],
}

const MovieList = ({ title, movies = [] }) => {
  const sliderRef = useRef(null) 

  return (
    <div className="movie-list-wrapper">
      {isEmpty(movies) ? <div /> : (<><Link className="movie-list-title" to="/">{title}</Link>
      <div className="movie-list">
        <div className="slider-container">
          <button className="btn-previous" onClickCapture={() => {
            removeCards()
            sliderRef.current?.slickPrev()
          }} />
          <Slider {...settings} ref={sliderRef}>
            {movies.map((data) => {
              return (
                <MovieCard key={data.main_taiwan_name} data={data} />
            )})}
          </Slider>
          <button className="btn-next" onClickCapture={() => {
            removeCards()
            sliderRef.current?.slickNext()
          }} />
        </div>
      </div></>)}
    </div>
  );
};

export { MovieList }