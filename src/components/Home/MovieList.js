import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import MovieCard from './MovieCard'

const fakeList = [
  {id:'mbsrf4OICR4'},
  {id:'wBr2O6_es2U'},
  {id:'gj-VU9oK2Yo'},
  {id:'0AUFyFEt35g'},
  {id:'gUWDiXBNohY'},
  {id:'A5H8zBb3iao'},
  {id:'tyrVtwE8Gv0'},
  {id:'WkuHLzMMTZM'},
  {id:'azr7saygKng'},
  {id:'TxlDDhQq8zM'},
  {id:'W14UHY9esZM'},
  {id:'O8Xq4xfH2ro'},
  {id:'6MEyBnVss9Q'},
  {id:'JDTQL9qowzA'}
]

// eslint-disable-next-line react/prop-types
export const MovieList = () => {
  const sliderRef = useRef(null)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }  

  return (
    <div className="movie-list">
      <h3>現正熱播</h3>
      <div className="slider-container">
        <button className="btn-previous" onClickCapture={() => sliderRef.current?.slickPrev()}>左</button>
        <Slider {...settings} ref={sliderRef}>
          {fakeList.map((data) => {
            return (
              <MovieCard key={data.id} data={data}/>
          )})}
        </Slider>
        <button className="btn-next" onClickCapture={() => sliderRef.current?.slickNext()}>右邊</button>
      </div>
    </div>
  );
};