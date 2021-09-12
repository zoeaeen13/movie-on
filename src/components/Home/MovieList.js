import React, { useState, useRef } from 'react';
import Slider from 'react-slick';

const fakeList = [
  'mbsrf4OICR4',
  'wBr2O6_es2U',
  'gj-VU9oK2Yo',
  '0AUFyFEt35g',
  'gUWDiXBNohY',
  'A5H8zBb3iao',
  'tyrVtwE8Gv0',
  'WkuHLzMMTZM',
  'azr7saygKng',
  'TxlDDhQq8zM',
  'W14UHY9esZM',
  'O8Xq4xfH2ro',
  '6MEyBnVss9Q',
  'JDTQL9qowzA',
]

// eslint-disable-next-line react/prop-types
export const MovieList = ({ currentId, setCurrentMovie }) => {
  const [enterTime, setEnterTime] = useState(0)
  const sliderRef = useRef(null)
  const settings = {
    dots: false,
    infinite: false,
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
  };

  const handleMouseEvent = (e) => {
    setEnterTime(new Date().getSeconds())
    console.log('in', new Date().getSeconds())

    const element = e.currentTarget
    setCurrentMovie({
      id: element.dataset.id,
      x: element.getBoundingClientRect().left,
      y: element.getBoundingClientRect().top,
    })
  };

  const handleMouseLeave = (e) => {
    const time  = new Date().getSeconds()
    console.log('leave', time)

    setTimeout(() => {
      if (time - enterTime <= 1) return
      setCurrentMovie({
        id: '',
        x: 0,
        y: 0,
      })
    }, 1000)
  };
  

  return (
    <div className="movie-list">
      <h3>現正熱播</h3>
      <div className="slider-container">
        <button className="btn-previous" onClickCapture={() => sliderRef.current?.slickPrev()}>左</button>
        <Slider {...settings} ref={sliderRef}>
          {fakeList.map((data) => {
            return (
              <div className="movie-card" key={data} data-id={data} onMouseEnter={handleMouseEvent} onMouseLeave={handleMouseLeave}>
              {/* <div className="movie-card-img" onMouseEnter={(e) => console.log(`${data} (${e.screenX},${e.screenX})`)} onMouseLeave={(e) => console.log(`${data} (${e.screenX},${e.screenX})`)} /> */}
            </div>
          )})}
        </Slider>
        <button className="btn-next" onClickCapture={() => sliderRef.current?.slickNext()}>右邊</button>
      </div>
    </div>
  );
};