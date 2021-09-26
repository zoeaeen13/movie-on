import React, { useState, useEffect, useRef, useCallback } from 'react'
import { FloatingCard } from '../Movie'
import { removeCards, createModel } from '../../utils'

const  MovieCard = ({ data }) => {
  const [visible, setVisible] = useState(false)
  const cardRef = useRef(null)

  const showFloatingCard = useCallback(() => {
    removeCards()
    setVisible(true)
  }, [])

  useEffect(() => {
    if (visible) {
      const clintRect = cardRef.current.getBoundingClientRect()
      createModel(
        <FloatingCard
          data={data}
          clintRect={clintRect}
          setVisible={setVisible}
        />
      )
    }
  }, [visible])

  return (
    <div
      onMouseOut={() => setVisible(false)}
      onMouseEnter={showFloatingCard}
      className="movie-card"
      ref={cardRef}
    >
      <img src={data.img} onMouseEnter={showFloatingCard} alt=""/>
    </div>
  )
}
export default React.memo(MovieCard)