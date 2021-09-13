import React, { useState, useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { FloatingCardWrapper, FloatingCard } from './FloatingCard'

const MyPortal = ({ children }) => {
  const element = document.createElement('div')
  useEffect(() => {
    document.body.appendChild(element)
    return () => {
      document.body.removeChild(element)
    }
  })
  return createPortal(children, element)
}

const  MovieCard = ({ data, children }) => {
  const [visible, setVisible] = useState(false)
  const cardRef = useRef(null)
  const handleStyle = () => {
    const { width, height, x, y } = cardRef.current.getBoundingClientRect()
    return { top: y, left: x }
  }

  
  const onMouseEnter = useCallback(() => {
    setVisible(true)
  }, [])

  const onMouseLeave = useCallback(() => {
    setVisible(false)
  }, [])

  return (
    <div
      onMouseEnter={onMouseEnter}
      className="movie-card"
      ref={cardRef}
    >     
    {children}
      {visible && (
        <MyPortal>
          <FloatingCardWrapper
            id={data.id}
            className={`pop-up-animation ${visible ? 'show' : 'hidden'}`}
            style={handleStyle()}
            onMouseLeave={onMouseLeave}
          >
            <FloatingCard id={data.id} />
          </FloatingCardWrapper>
        </MyPortal>
      )}
    </div>
  )
}
export default React.memo(MovieCard)