import React, { useState, useRef, useEffect } from 'react'
import { isEmpty } from 'lodash'
import MovieDetail from './MovieDetail'
import { createModel } from '../../utils'


const handleStyle = ({ width, height, top, left }) => {
  const { availWidth, availHeight } = window.screen
  const newWidth = width*1.7 > 350 ? 350 : width*1.7
  const newHeight = newWidth*1.08
  let newTop = top - ((newHeight - height) / 2)
  let newLeft = left - ((newWidth - width) / 2)
  if(top + newHeight > availHeight) newTop =  availHeight - newHeight
  if(left + newWidth > availWidth) newLeft =  availWidth*0.96 - newWidth
  if (left - 10 <= availWidth*0.04) newLeft = availWidth*0.04
  return { position: { top: Math.floor(newTop), left: Math.floor(newLeft) }, size: { width: Math.floor(newWidth), height: 'auto' }}
}

const FloatingCard = React.memo(({ data, clintRect, closeModal, setVisible }) => {
  const [firstTimeer, setFirstTimer] = useState(null)
  const [secondTimer, setSecondTimer] = useState(null)
  const cardRef = useRef(null)
  const { position, size } = handleStyle(clintRect)

  const onMouseLeave = () => {
    if (cardRef) {
      cardRef.current.classList.add('hidden')
      const id = setTimeout(() => closeModal(), 300)
      setSecondTimer(id)
    }
    setVisible(false)
  }

  const onInfoClick = () => {
    createModel(<MovieDetail id={data.internal} />)
  }

  useEffect(() => {
    const id = setTimeout(() => {
      cardRef.current.classList.remove('hidden')
    }, 500)
    setFirstTimer(id)

    return () => {
      clearTimeout(firstTimeer)
      clearTimeout(secondTimer)
    }
  }, [])
  

  const { id, main_taiwan_name, main_original_name, imdb_rating, douban_rating, tomator_rating, img, url } = data
  return (
    <div className="floating-card-wrapper" style={position}>
      <div className="floating-card hidden" style={size} onMouseLeave={onMouseLeave} ref={cardRef}>
        <div className="movie-card-info">
          {url ? <iframe
            src={`https://www.youtube.com/embed/${url}?rel=0&autoplay=1&mute=1&enablejsapi=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe> : <img src={img}/>}
          <div className="info-content">
            
            <div className="content-top">
              <h4>{`${main_taiwan_name}  `}<span>{main_original_name}</span></h4>
              <p className="preference">{`XX% 適合您`}</p>
            </div>
            <div className="tags">
              {/* <p>哈哈哈</p>
              <p>嘻嘻</p>
              <p>嘎嘎嘎</p> */}
            </div>
            <div className="buttons">
              {!isEmpty(imdb_rating) && <div className="icon-button-wrap">
                <div className="button imdb"/>
                <p className="score">{imdb_rating}</p>
              </div>}
              {!isEmpty(douban_rating) && <div className="icon-button-wrap">
                <div className="button douban"/>
                <p className="score">{douban_rating}</p>
              </div>}
              {!isEmpty(tomator_rating) && <div className="icon-button-wrap">
                <div className="button tomatoes"/>
                <p className="score">{tomator_rating}</p>
              </div>}
              <div className="button play" onClick={() => onInfoClick(id)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M6 2l52 30L6 62V2z"></path></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
})


export default FloatingCard
