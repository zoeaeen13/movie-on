import React, { useState, useEffect, useRef, useCallback } from 'react'
import FloatingCard from './FloatingCard'
import { removeCards, createModel } from '../../utils'

const  MovieCard = ({ data }) => {
  const [visible, setVisible] = useState(false)
  const cardRef = useRef(null)

  const onMouseEnter = useCallback(() => {
    removeCards('.floating-card-wrapper')
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
      onMouseEnter={onMouseEnter}
      className="movie-card"
      ref={cardRef}
    >
      <img src={data.img} />
    </div>
  )
}
export default React.memo(MovieCard)