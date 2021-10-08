import React, { useState, useEffect, useRef, useCallback } from 'react'
import { isEmpty } from 'lodash'
import { FloatingCard } from '../Movie'
import { removeCards, createModel } from '../../utils'
import { gaEvent } from '../../services/GA'

const  MovieCard = ({ data }) => {
  const [visible, setVisible] = useState(false)
  const cardRef = useRef(null)

  const showFloatingCard = useCallback(() => {
    removeCards()
    setVisible(true)
    const pathname = window.location.pathname.replace('/', '')
    gaEvent(isEmpty(pathname) ? 'home' : pathname, 'Hover a movie card', { value: data.internal })
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