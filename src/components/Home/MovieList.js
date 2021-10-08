import React, { useRef } from 'react'
import Slider from 'react-slick'
import { isEmpty } from 'lodash'
import { MovieCard } from '../Movie'
import { Link } from 'react-router-dom'
import { removeCards } from '../../utils'
import { gaEvent } from '../../services/GA'

const responsive = [
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
]

const MovieList = React.memo(({ title, movies = [] }) => {
  const sliderRef = useRef(null) 
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    responsive,
    onSwipe: () => gaEvent('movieList', 'swipe a movie list'),
  }

  const onSliderClick = (type) => {
    removeCards()
    gaEvent('movieList', `slide to ${type} list`, { value: title })
    type === 'previous' ? sliderRef.current?.slickPrev() : sliderRef.current?.slickNext()
  }

  return (
    <div className="movie-list-wrapper">
      {isEmpty(movies) ? <div /> : (<><Link className="movie-list-title" to="/">{title}</Link>
      <div className="movie-list">
        <div className="slider-container">
          <button className="btn-previous" onClick={() => onSliderClick('previous')} />
          <Slider {...settings} ref={sliderRef}>
            {movies.map((data) => {
              return (
                <MovieCard key={data.main_taiwan_name} data={data} />
            )})}
          </Slider>
          <button className="btn-next" onClick={() => onSliderClick('next')} />
        </div>
      </div></>)}
    </div>
  )
})

export default MovieList