import { isEmpty } from 'lodash'
import React, { useState, useEffect, useCallback, useRef } from 'react'
import { getMovieDetail, getRecommends } from '../../api'
import RecommendCard from './RecommendCard'
import { MOVIE_TYPE } from '../../constants'

const handleType = (str) => {
  const typeArr = str.split(',')
  let ans = ''
  typeArr.forEach((type, index) => {
    ans += (index !== 0 ? '、' : '') + MOVIE_TYPE[type].name
  })
  return ans
}

const  MovieDetail = ({ id, closeModal }) => {
  // const [isOpen, setIsOpen] = useState(true)
  const [firstTimeer, setFirstTimer] = useState(null)
  const [secondTimer, setSecondTimer] = useState(null)
  const [info, setInfo] = useState({})
  const [recommend, setRecommend] = useState([])
  const pageRef = useRef(null)

  const handleClose = useCallback(() => {
    if (pageRef.current) {
      pageRef.current.classList.add('hidden')
      const id = setTimeout(() => closeModal(), 500)
      setSecondTimer(id)
    }
	}, [])

  const onButtonClick = (type) => {
    const { rotten_tomato_id, imdb_id, douban_id } = info
    switch (type) {
      case 'imdb':
        return window.open(`https://www.imdb.com/title/${imdb_id}`, "_blank")
      case 'douban':
        return window.open(`https://movie.douban.com/subject/${douban_id}`, "_blank")
      case 'tomatoes':
        return window.open(`https://www.rottentomatoes.com/m/${rotten_tomato_id}`, "_blank")
      default:
        break;
    }
  }

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
    // show
    const id = setTimeout(() => {
      if (pageRef.current) {
        pageRef.current.classList.remove('hidden')
      }
    }, 500)
    setFirstTimer(id)
    return () => {
      clearTimeout(firstTimeer)
      clearTimeout(secondTimer)
    }
  }, [])

  return (
    <div className="movie-detail-container">
      <div onClick={() => handleClose()} className="black-background" />
      {/* <div onClick={() => handleClose()} className={`black-background black-background-animation`} /> */}
      {!isEmpty(info) && <div className="movie-detail hidden" ref={pageRef} >
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
          <div className="info">
            <h3>{info.main_taiwan_name}</h3>
            <div className="buttons">
              <div className="button plus">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M32 16v32m16-16H16"></path></svg>
              </div>
              <div className="button play">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M54 35h2a4 4 0 1 0 0-8H34a81 81 0 0 0 2-18 4 4 0 0 0-8 0s-4 22-18 22H4v24h10c4 0 12 4 16 4h20a4 4 0 0 0 0-8h2a4 4 0 0 0 0-8h2a4 4 0 0 0 0-8"></path></svg>
              </div>
            </div>
          </div>
        </div>
        <div className="movie-detail-bottom">
          <div className="left-row">
            <p className="preference">XX% 適合妳</p>
            <p className="year">{info.date_in_theater ? info.date_in_theater.slice(0, 4) : ''}</p>
            {info && info.chinese_description.trim().split('。').map(desc => {
              if (!desc.length) return null
              return <article>{`${desc}。`}</article>
            })}
          </div>
          <div className="right-row">
            <p><span>導演：</span>{info.director_list || ''}</p>
            <p><span>演員：</span>{info.actor_list.replaceAll(',', '、')}</p>
            <p><span>類型：</span>{handleType(info.feature_list)}</p>
            <div className="buttons">
              {info.rating && <div className="icon-button-wrap" onClick={() => onButtonClick('imdb')}>
                <div className="button imdb"/>
                <p className="score">{`${info.rating}（共 ${info.rating_count} 評分）`}</p>
              </div>}
              {info.avg_rating && <div className="icon-button-wrap" onClick={() => onButtonClick('douban')}>
                <div className="button douban"/>
                <p className="score">{`${info.avg_rating}（共 ${info.total_rating_amount} 評分）`}</p>
              </div>}
              {!isEmpty(info.audience_rating) && <div className="icon-button-wrap" onClick={() => onButtonClick('tomatoes')}>
                <div className="button tomatoes"/>
                <p className="score">{`${info.audience_rating} 觀眾評分（共 ${info.audience_rating_amount} 評分）`}</p>
              </div>}
              {!isEmpty(info.tomator_rating) && <div className="icon-button-wrap" onClick={() => onButtonClick('tomatoes')}>
                <div className="button tomatoes"/>
                <p className="score">{`${info.tomator_rating} 影評評分（共 ${info.tomator_rating_amount} 評分）`}</p>
              </div>}
            </div>
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