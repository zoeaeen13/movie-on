import React, { useState, useEffect, useRef, useCallback } from 'react'
import FloatingCard from './FloatingCard'
import createModel from '../../utils/createModel'

const  MovieCard = ({ data, url }) => {
  const [visible, setVisible] = useState(false)
  const cardRef = useRef(null)

  const onMouseEnter = useCallback(() => {
    // remove all floating cards
    const modals = document.querySelectorAll('.floating-card-wrapper')
    if (modals) modals.forEach(modal => {
      modal.classList.add('hidden')
      setTimeout(() => modal.remove(), 100)
    })
    setVisible(true)
  }, [])

  useEffect(() => {
    if (visible) {
      const clintRect = cardRef.current.getBoundingClientRect()
      createModel(
        <FloatingCard
          id={data.id}
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
      style={{ backgroundImage: `url(${url})`}}
    />
  )
}
export default React.memo(MovieCard)