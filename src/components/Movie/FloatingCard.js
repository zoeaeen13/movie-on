import React, { useState, useRef, useEffect, useCallback } from 'react'
import { isEmpty } from 'lodash'
import MovieDetail from './MovieDetail'
import { createModel } from '../../utils'
import { gaEvent } from '../../services/GA'

const handleStyle = ({ width, height, top, left }) => {
  const { availWidth, availHeight } = window.screen
  // 卡片寬高
  const newWidth = width*1.7 > 350 ? 350 : width*1.7
  const newHeight = newWidth*1.08
  // 卡片距離
  let newTop = top - ((newHeight - height) / 2)
  let newLeft = left - ((newWidth - width) / 2)
  if (newTop < 60) newTop = 60
  if ((newHeight + newTop) > availHeight) newTop = availHeight - newHeight
  if(left + newWidth > availWidth) newLeft =  availWidth*0.96 - newWidth
  if (left - 10 <= availWidth*0.04) newLeft = availWidth*0.04
  return {
    position: { top: newTop, left: newLeft },
    size: { width: newWidth, height: 'auto' }
  }
}

const RankingIcon = React.memo(({ type, id, rating }) => {
  const onRatingClick = useCallback(() => {
    const pathname = window.location.pathname.replace('/', '')
    gaEvent(isEmpty(pathname) ? 'home' : pathname, 'Click movie-ranking type', { value: id, label: type })
  }, [])

  return (
    <div className="icon-button-wrap" onClick={onRatingClick}>
      <div className={`button ${type}`} />
      <p className="score">{rating}</p>
    </div>
  )
})

const FloatingCard = ({ data, clintRect, closeModal, setVisible }) => {
  const [firstTimeer, setFirstTimer] = useState(null)
  const [secondTimer, setSecondTimer] = useState(null)
  const cardRef = useRef(null)
  const { position, size } = handleStyle(clintRect)

  const onMouseLeave = () => {
    if (cardRef) {
      cardRef.current.classList.add('disappear')
      const id = setTimeout(() => closeModal(), 500)
      setSecondTimer(id)
    }
    setVisible(false)
  }

  const onInfoClick = () => {
    const id = data.internal
    const pathname = window.location.pathname.replace('/', '')
    gaEvent(isEmpty(pathname) ? 'home' : pathname, 'Click to see movie detail', { value: id })
    createModel(<MovieDetail id={id} />)
  }

  useEffect(() => {
    const id = setTimeout(() => {
      cardRef.current.classList.remove('disappear')
    }, 300)
    setFirstTimer(id)

    return () => {
      clearTimeout(firstTimeer)
      clearTimeout(secondTimer)
    }
  }, [])
  

  const { id, internal, main_taiwan_name, main_original_name, imdb_rating, douban_rating, tomator_rating, img, video_id } = data
  return (
    <div className="modal floating-card-wrapper" style={position}>
      <div className="floating-card disappear" onMouseLeave={onMouseLeave} style={size} ref={cardRef}>
        <div className="movie-card-info">
          {!isEmpty(video_id) ? <iframe
            src={`https://www.youtube.com/embed/${video_id}?rel=0&autoplay=1&mute=1&enablejsapi=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe> : <img src={img}/>}
          <div className="info-content">
            <div className="content-top">
              <h4>{`${main_taiwan_name}  `}<span>{main_original_name}</span></h4>
              {/* <p className="preference">{`XX% 適合您`}</p> */}
            </div>
            <div className="tags">
              {/* <p>哈哈哈</p>
              <p>嘻嘻</p>
              <p>嘎嘎嘎</p> */}
            </div>
            <div className="buttons">
              {!isEmpty(imdb_rating) && <RankingIcon type={'imdb'} id={internal} rating={imdb_rating} />}
              {!isEmpty(douban_rating) && <RankingIcon type={'douban'} id={internal} rating={douban_rating} />}
              {!isEmpty(tomator_rating) && <RankingIcon type={'tomatoes'} id={internal} rating={tomator_rating} />}
              <div className="button play" onClick={() => onInfoClick(id)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M6 2l52 30L6 62V2z"></path></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
}


export default React.memo(FloatingCard)
