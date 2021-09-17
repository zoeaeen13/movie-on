import React from 'react'
import { createModel, removeCards } from '../../utils'
import MovieDetail from './MovieDetail'

const  RecommendCard = ({ data }) => {
  const { date_in_theater, main_taiwan_name, internal } = data

  const onClickCard = () => {
    removeCards('.movie-detail-container')
    setTimeout(() => {
      createModel(<MovieDetail id={internal} />)
    }, 1000)
  }

  return (
    <div className="recommend-card" onClick={onClickCard}>
      <div className="recommend-card-img">
        <img src={data.img} />
      </div>
      <div className="recommend-card-content">
        <h6>{date_in_theater.slice(0, 4)}</h6>
        <p>{main_taiwan_name}</p>
      </div>
    </div>
  )
}
export default React.memo(RecommendCard)