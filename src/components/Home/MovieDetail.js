import { isEmpty } from 'lodash'
import React, { useState, useEffect, useCallback } from 'react'
import { getMovieDetail, getRecommends } from '../../api'
import RecommendCard from './RecommendCard'

const  MovieDetail = ({ id, closeModal }) => {
  const [isOpen, setIsOpen] = useState(true)
  const [info, setInfo] = useState({})
  const [recommend, setRecommend] = useState([])

  const handleClose = useCallback(() => {
    setIsOpen(false)
    closeModal()
	}, [])

  const fetchMovieInfo = async() => {
    const { data } = await getMovieDetail(id)
    setInfo(data[0])
    window.scrollTo({ top: 0 })
  }

  const fetchRecommended = async() => {
    const { data } = await getRecommends(id)
    setRecommend(data)
  }

  useEffect(() => {
    fetchMovieInfo()
    fetchRecommended()
  }, [])

  return (
    <div className="movie-detail-container">
      <div onClick={() => handleClose()} className={`black-background black-background-animation ${isOpen ? 'keyframes-show' : 'keyframes-disappear'}`} />
      {!isEmpty(info) && <div className="movie-detail">
        <div className="movie-detail-top">
          <button className="btn-close" onClick={handleClose}>
            <svg viewBox="0 0 24 24" data-uia="previewModal-closebtn" role="button" aria-label="close" tabIndex="0"><path d="M12 10.586l7.293-7.293 1.414 1.414L13.414 12l7.293 7.293-1.414 1.414L12 13.414l-7.293 7.293-1.414-1.414L10.586 12 3.293 4.707l1.414-1.414L12 10.586z" fill="currentColor"></path></svg>
          </button>
          {info.url ? <iframe
            src={`https://www.youtube.com/embed/${id}?rel=0&autoplay=1&mute=1&enablejsapi=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          /> :  <img src={info.img}/>}
          <div className="background-gradient" />
        </div>
        <div className="movie-detail-bottom">
          <div className="left-row">
            <p className="preference">XX% 適合妳</p>
            <p className="year">{info.date_in_theater ? info.date_in_theater.slice(0, 4) : ''}</p>
            <article>{info.chinese_description || ''}</article>
          </div>
          <div className="right-row">
            <p><span>導演：</span>{info.director_list || ''}</p>
            <p><span>演員：</span>{info.actor_list || ''}</p>
            <p><span>類型：</span>{info.feature_list || ''}</p>
          </div>
        </div>
        {recommend && <div className="movie-detail-recommend">
          <h4>類似影片</h4>
          <div className="list">
            {recommend.map((data, index) => {
              if (index > 8) return null
              return <RecommendCard key={data.id} data={data}/>
            }, )}
          </div>
        </div>}
      </div>}
    </div>
  )
}
export default React.memo(MovieDetail)